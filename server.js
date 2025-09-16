const express = require('express');
const path = require('path');
const app = express();

// 使用 Railway 提供的 PORT
const PORT = process.env.PORT || 3000;

// 設定靜態檔案服務，自動處理 .html 副檔名
app.use(express.static(path.join(__dirname), {
  extensions: ['html'],        // 關鍵設定：自動加上 .html
  index: ['home.html']         // 設定 home.html 為首頁
}));

// 選擇性：將 .html 網址重新導向到乾淨網址
app.use((req, res, next) => {
  if (req.path.endsWith('.html')) {
    const cleanPath = req.path.slice(0, -5);
    return res.redirect(301, cleanPath);
  }
  next();
});

// 啟動伺服器
app.listen(PORT, () => {
  console.log(`伺服器運行在 port ${PORT}`);
});
