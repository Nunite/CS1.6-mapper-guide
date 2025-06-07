const express = require('express');
const path = require('path');
const session = require('express-session');
const adminRoutes = require('./admin-api');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3003;

// 请求日志中间件
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// 配置session
app.use(session({
  secret: 'cs16-map-guide-secret-key',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false, maxAge: 24 * 60 * 60 * 1000 } // 1天
}));

// 处理JSON请求
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 测试API路由
app.get('/api/test', (req, res) => {
  res.json({ status: 'ok', message: '服务器正常工作' });
});

// AI聊天API路由
app.post('/api/ai_chat', async (req, res) => {
  try {
    console.log('[AI聊天] 收到请求');
    const userInput = req.body.input || '';
    
    if (!userInput) {
      return res.status(400).json({ error: '没有输入内容' });
    }
    
    // 直接调用Coze API
    const cozeApiToken = "pat_SiF46NkhxcWDtLlAMXFcVrbMxczIwlC79ruTxQ8fiWIM0PtvC456RZ7vXyFQPI4m";
    const workflowId = "7512711241362800674";
    
    const response = await axios.post('https://api-cn.coze.com/v1/workflow/run', {
      workflow_id: workflowId,
      parameters: { input: userInput }
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${cozeApiToken}`
      }
    });
    
    const reply = response.data.data || "无回复内容";
    res.json({ reply: reply });
    
  } catch (error) {
    console.error('[AI聊天] 错误:', error.message);
    
    // 提供详细的错误信息
    if (error.response) {
      console.error('[AI聊天] 响应状态:', error.response.status);
      console.error('[AI聊天] 响应数据:', error.response.data);
      res.status(error.response.status).json({
        error: 'AI服务调用失败',
        message: `Coze API返回错误: ${error.response.status}`,
        details: error.response.data
      });
    } else if (error.request) {
      console.error('[AI聊天] 没有收到响应');
      res.status(503).json({
        error: 'AI服务调用失败',
        message: 'Coze API没有响应',
        details: '无法连接到Coze API服务'
      });
    } else {
      res.status(500).json({
        error: 'AI服务调用失败',
        message: error.message
      });
    }
  }
});

// 静态文件服务
app.use(express.static('public'));
app.use(express.static('docs'));

// 管理员路由
app.use(adminRoutes);

// 管理员页面路由
app.get('/admin', (req, res) => {
  if (req.session && req.session.isAdmin) {
    res.sendFile(path.join(__dirname, 'public', 'admin.html'));
  } else {
    res.redirect('/admin/login');
  }
});

// 主页
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'docs', 'index.html'));
});

// 404错误处理
app.use((req, res, next) => {
  console.log(`[404] 未找到资源: ${req.method} ${req.url}`);
  res.status(404).json({ error: '未找到请求的资源' });
});

// 全局错误处理
app.use((err, req, res, next) => {
  console.error('服务器错误:', err);
  res.status(500).json({ error: '服务器内部错误' });
});

// 启动服务器
app.listen(PORT, () => {
  console.log(`服务器运行在 http://localhost:${PORT}`);
  console.log(`AI聊天API: /api/ai_chat (直接集成Coze API)`);
  console.log(`测试接口: http://localhost:${PORT}/api/test`);
}); 