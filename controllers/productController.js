const Product = require('../models/Product');
const { StatusCodes } = require('http-status-codes');

// create Product
const createProduct = async (req, res) => {
	// req.body.user = req.user.userId;
	console.log(req.body);
	const product = await Product.create(req.body);
	res.status(StatusCodes.CREATED).json({ product });
};

module.exports = { createProduct };
