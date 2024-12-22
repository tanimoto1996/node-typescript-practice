import express from 'express';
import path from 'path';

const app = express();
const PORT = 4000;

// 静的ファイルの配信を最優先で設定
app.use('/static', express.static(path.join(__dirname, 'public')));

// 他のルート
app.get('/', (req, res) => {
  res.send('Hello!！！');
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});