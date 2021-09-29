import mongodb from "mongodb";
import dotenv from "dotenv";

import app from "./server.js";

import SalesDAO from "./dao/salesDAO.js"

// Define .env config
dotenv.config();
const MongoClient = mongodb.MongoClient;

// Define port to listen
const port = process.env.PORT || 8000;

// Define connection with database
MongoClient.connect(process.env.SALES_DB_URI, {
	useNewUrlParser: true,
	wtimeoutMS: 2500,
	maxPoolSize: 50,
})
	.catch((err) => {
		console.error(err.stack);
		process.exit(1);
	})
	.then(async (client) => {
		await SalesDAO.injectDB(client);
		app.listen(port, () => {
			console.log(`Database is running on port: ${port}`);
		});
	});
