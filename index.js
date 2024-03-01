const express = require("express");
const mongoose = require("mongoose");
const productRoute = require("./routes/product.route");
const app = express();

/** 处理 json / form 的中间件 */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
/** routes */
app.use("/api/products", productRoute);

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
	.catch((error) => {
		console.log("Database connection failed", err);
	});
