const express = require("express");
const app = express();

/**
 * @param port: 服务器监听的端口号
 **/
app.listen((port = 3000), () => {
	console.log("server is running on port 3000");
});

/**
 * @param req: 接收到来自客户端的数据
 * @param res: 向客户端返回的数据
 **/
app.get("/", (req, res) => {
	res.send("hello from node api");
});
