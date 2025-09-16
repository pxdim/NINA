const express = require('express');
const path = require('path');
const app = express();

// 設定port（Railway會自動提供）
const PORT = process.env.PORT || 3000;

// 提供靜態檔案
app.use(express.static(__dirname));

// 主路由
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// 啟動伺服器
app.listen(PORT, () => {
    console.log(`LED計算機運行在 port ${PORT}`);
});
