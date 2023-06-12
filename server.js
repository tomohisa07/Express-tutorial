//expressのモジュールを読み込む
const express = require("express");
//expressをインスタンス化する
const app = express();
//ポート番号を設定する　例：3000
const PORT = 3000;

app.get("/", (req, res) => {
    // console.log("hello express");
    // res.send("hello");
    // res.sendStatus(500);
    // res.status(500).send("error");
    res.status(500).json({ msg: "error"});
 });

 app.get("user", (req, res) => {
    res.send("user");
 });

 //listenイベントで3000番ポートでサーバーを起動する。
app.listen(PORT, () => console.log("サーバーが起動しました"));