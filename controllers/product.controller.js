const Product = require("../models/product.model");
const getProducts = async (req, res) => {
	try {
		// 获取所有数据库内的产品
		const products = await Product.find({});
		// 返回数据
		res.status(200).json(products);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};
const searchProduct = async (req, res) => {
	try {
		// 根据参数 id 查找条目
		const { id } = req.params;
		const product = await Product.findById(id);
		// 返回数据
		res.status(200).json(product);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};
const createProduct = async (req, res) => {
	try {
		// 将用户的数据传给mongoose Schema模块，并存储
		const product = await Product.create(req.body);
		// 返回 200 状态码和经过Schema生成后的数据
		res.status(200).json(product);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};
const deleteProduct = async (req, res) => {
	try {
		// 获取参数 id
		const { id } = req.params;
		// 寻找并删除产品
		const product = await Product.findByIdAndDelete(id, req.body);
		// 如果返回值为 false，抛出 404 并提示未找到产品
		if (!product) {
			return res.status(404).json({ message: "Product not found" });
		}
		res.status(200).json({ message: "Product deleted successfully" });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};
const updateProduct = async (req, res) => {
	try {
		// 获取参数 id
		const { id } = req.params;
		// 寻找并更新产品，存储返回值
		const product = await Product.findByIdAndUpdate(id, req.body);
		// 如果返回值为 false，抛出 404 并提示未找到产品
		if (!product) {
			return res.status(404).json({ message: "Product not found" });
		}
		// 返回更新后的数据
		const updatedProduct = await Product.findById(id);
		res.status(200).json(updatedProduct);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

module.exports = {
	getProducts,
	searchProduct,
	createProduct,
	deleteProduct,
	updateProduct,
};
