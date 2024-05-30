require('dotenv').config();
require('express-async-errors');
// express
const express = require('express');
const app = express();
// rest of package

//database
const connectDB = require('./db/connect');

// routers
const productRouter = require('./routes/productRoutes');

// middleware
app.use(express.json());

app.use(express.static('./public'));

app.use('/api/v1/products', productRouter);

const port = process.env.PORT || 3000;
const start = async () => {
	try {
		await connectDB(process.env.MONGO_URI);
		app.listen(port, () =>
			console.log(`Server is listening on port ${port}`),
		);
	} catch (error) {
		console.log(error);
	}
};

start();
