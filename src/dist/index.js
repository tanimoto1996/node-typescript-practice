"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const port = process.env.PORT || 4000;
// 静的ファイルの配信を最優先で設定
app.use('/static', express_1.default.static(path_1.default.join(__dirname, 'public')));
// 他のルート
app.get('/', (req, res) => {
    res.send('iiiii');
});
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
