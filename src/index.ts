import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// ESM 環境での __dirname の代替
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 4000;

// 静的ファイルの配信を設定
app.use('/static', express.static(path.join(__dirname, 'public')));

// 他のルート
app.get('/', (req, res) => {
  res.send('これでええか');
});

// サーバーを起動
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
