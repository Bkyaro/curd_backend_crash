const express = require("express");
const Product = require("../models/product.model");
const router = express.Router();
const {
	getProducts,
	searchProduct,
	createProduct,
	deleteProduct,
	updateProduct,
} = require("../controllers/product.controller");

/** 创建产品条目API */
router.post("/", createProduct);

/** 获取所有产品条目API */
router.get("/", getProducts);

/** 搜索单个产品条目API */
router.get("/:id", searchProduct);

/** 更改产品信息 API */
router.put("/:id", updateProduct);

/** 删除产品条目 API */
router.delete("/:id", deleteProduct);

module.exports = router;
