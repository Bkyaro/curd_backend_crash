const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model");
const app = express();

/** 处理 json 的中间件 */
app.use(express.json());

/**
 * @param req: 接收到来自客户端的数据
 * @param res: 向客户端返回的数据
 **/
app.get("/", (req, res) => {
	res.send("hello from node api");
});

app.post("/api/products", async (req, res) => {
	try {
		// 将用户的数据传给mongoose Schema模块，并存储
		const product = await Product.create(req.body);
		// 返回 200 状态码和经过Schema生成后的数据
		res.status(200).json(product);
	} catch (err) {
		res.status(500).json({ message: error.message });
	}
});

app.get("/api/products", async (req, res) => {
	try {
		// 获取所有数据库内的产品
		const products = await Product.find({});
		// 返回数据
		res.status(200).json(products);
	} catch (err) {
		res.status(500).json({ message: error.message });
	}
});

app.get("/api/products/:id", async (req, res) => {
	try {
		// 根据参数 id 查找条目
		const { id } = req.params;
		const product = await Product.findById(id);
		// 返回数据
		res.status(200).json(product);
	} catch (err) {
		res.status(500).json({ message: error.message });
	}
});

mongoose
	.connect(
		"mongodb+srv://admin:<password>@curddb.us3eww3.mongodb.net/?retryWrites=true&w=majority&appName=CurdDB"
	)
	.then(() => {
		console.log("Connected to database");
		/**
		 * @param port: 服务器监听的端口号
		 **/
		app.listen((port = 3000), () => {
			console.log("server is running on port 3000");
		});
	})
	.catch((err) => {
		console.log("Database connection failed", err);
	});
