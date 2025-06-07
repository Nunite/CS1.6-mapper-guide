const express = require('express');
const path = require('path');
const session = require('express-session');
const adminRoutes = require('./admin-api');

const app = express();
const PORT = process.env.PORT || 3003;

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

// 静态文件
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

// 启动服务器
app.listen(PORT, () => {
  console.log(`服务器运行在 http://localhost:${PORT}`);
}); 