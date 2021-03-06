const db = require("../config/database");

exports.createProduct = async (req, res) => {
	const { product_name, quantity, price } = req.body;
	await db.query (
		"INSERT INTO products (product_name, quantity, price) VALUES ($1, $2, $3)",
		[product_name, quantity, price]
	);

	res.status(201).send({
		message: "product added sucessfully",
		body: {
			product: { product_name, quantity, price }
		}
	});
};

exports.listAllProducts = async (req, res) => {
	const products = await db.query("SELECT * FROM products");
	res.status(200).send(products.rows);
};

exports.listProductById = async (req, res) => {
	const productId = parseInt(req.params.id);
	const product = await db.query("SELECT * FROM products where productid = $1", [productId]);

	res.status(200).send(product.rows);
};

exports.updateProductById = async(req, res) => {
	const productId = parseInt(req.params.id);
	const { product_name, quantity, price } = req.body;
	await db.query("UPDATE products set product_name = $1, quantity = $2, price = $3 where productid = $4", [product_name, quantity, price, productId]);

	res.status(200).send({
		message: "Product updated sucessfully",
		product : {
			productId,
			product_name, 
			quantity, 
			price, 
		} 
	});
};

exports.deleteProductById = async(req, res) => {
	const productId = parseInt(req.params.id);
	await db.query("DELETE FROM products WHERE productid = $1", [productId]);

	res.status(200).send({
		message: `Product ${productId} deleted sucessfully`
	});
};