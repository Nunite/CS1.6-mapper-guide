const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const { exec } = require('child_process');
const router = express.Router();

// IP限制中间件 - 只允许特定IP访问管理界面
const ipRestriction = (req, res, next) => {
  const allowedIPs = ['36.148.149.131'];
  // 获取客户端IP的多种方式
  let clientIP = req.headers['x-forwarded-for'] || 
               req.headers['x-real-ip'] || 
               req.connection.remoteAddress ||
               req.socket.remoteAddress;
  
  // 如果是逗号分隔的多个IP，取第一个（通常是真实客户端IP）
  if (clientIP && clientIP.includes(',')) {
    clientIP = clientIP.split(',')[0].trim();
  }
  
  // 处理IPv6格式的IPv4地址 (::ffff:192.168.1.1)
  if (clientIP && clientIP.includes('::ffff:')) {
    clientIP = clientIP.replace('::ffff:', '');
  }
  
  console.log(`[IP检查] 原始客户端IP: ${req.connection.remoteAddress}, 处理后IP: ${clientIP}, 路径: ${req.path}`);
  
  // 检查请求路径是否以/admin开头
  if (req.path.startsWith('/admin')) {
    // 检查IP是否在允许列表中（使用包含检查更灵活）
    const isAllowed = allowedIPs.some(ip => clientIP.includes(ip)) || 
                     clientIP.includes('127.0.0.1') || 
                     clientIP.includes('::1') ||
                     clientIP === '::1';
    
    if (isAllowed) {
      console.log(`[访问允许] IP ${clientIP} 访问管理页面 ${req.path}`);
      next();
    } else {
      console.log(`[安全警告] IP ${clientIP} 尝试访问管理页面 ${req.path}`);
      return res.status(403).send('访问被拒绝: 您的IP地址未获授权');
    }
  } else {
    next();
  }
};

// 应用IP限制中间件到所有路由
router.use(ipRestriction);

// 鉴权中间件
const requireAuth = (req, res, next) => {
  // 这里应该实现真正的鉴权逻辑
  // 例如，检查session或JWT token
  if (req.session && req.session.isAdmin) {
    next();
  } else {
    res.status(401).send('未授权访问');
  }
};

// 获取文件列表
router.get('/api/files', requireAuth, async (req, res) => {
  try {
    const files = await getFilesRecursively('docs');
    res.json(files);
  } catch (error) {
    console.error('获取文件列表错误:', error);
    res.status(500).send(error.message);
  }
});

// 获取单个文件内容
router.get('/api/file', requireAuth, async (req, res) => {
  try {
    const filePath = req.query.path;
    
    // 安全检查：确保文件路径在docs目录内
    const fullPath = path.resolve(filePath);
    const docsDir = path.resolve('docs');
    
    if (!fullPath.startsWith(docsDir)) {
      return res.status(403).send('禁止访问此文件');
    }
    
    const content = await fs.readFile(fullPath, 'utf8');
    res.send(content);
  } catch (error) {
    console.error('获取文件内容错误:', error);
    res.status(500).send(error.message);
  }
});

// 保存文件
router.post('/api/save', requireAuth, async (req, res) => {
  try {
    const { path: filePath, content } = req.body;
    
    // 安全检查：确保文件路径在docs目录内
    const fullPath = path.resolve(filePath);
    const docsDir = path.resolve('docs');
    
    if (!fullPath.startsWith(docsDir)) {
      return res.status(403).send('禁止修改此文件');
    }
    
    // 确保目录存在
    const fileDir = path.dirname(fullPath);
    await fs.mkdir(fileDir, { recursive: true });
    
    await fs.writeFile(fullPath, content, 'utf8');
    res.send('保存成功');
  } catch (error) {
    console.error('保存文件错误:', error);
    res.status(500).send(error.message);
  }
});

// 发布网站
router.post('/api/publish', requireAuth, (req, res) => {
  // 这里可以执行git命令或其他部署脚本
  // 例如重新生成静态文件或者触发CI/CD流程
  // 简单示例：重启服务或触发某个脚本
  exec('npm run build', (error, stdout, stderr) => {
    if (error) {
      console.error('发布错误:', error);
      return res.status(500).send(error.message);
    }
    console.log('发布输出:', stdout);
    res.send('发布成功');
  });
});

// 递归获取文件列表
async function getFilesRecursively(dir) {
  let files = [];
  const items = await fs.readdir(dir, { withFileTypes: true });
  
  for (const item of items) {
    const fullPath = path.join(dir, item.name);
    
    if (item.isDirectory()) {
      files = files.concat(await getFilesRecursively(fullPath));
    } else if (item.name.endsWith('.md')) {
      files.push({ path: fullPath });
    }
  }
  
  return files;
}

// 管理员登录页面
router.get('/admin/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'admin-login.html'));
});

// 管理员登录处理
router.post('/admin/login', (req, res) => {
  const { username, password } = req.body;
  
  // 简单示例，实际应使用更安全的验证
  if (username === 'admin' && password === 'yourSecurePassword') {
    if (req.session) {
      req.session.isAdmin = true;
    }
    res.redirect('/admin');
  } else {
    res.status(401).send('用户名或密码错误');
  }
});

// 登出
router.get('/admin/logout', (req, res) => {
  if (req.session) {
    req.session.isAdmin = false;
  }
  res.redirect('/admin/login');
});

module.exports = router; 