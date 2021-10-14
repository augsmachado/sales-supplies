import express from "express";

import SalesController from "../controllers/sales.controller.js";

const router = express.Router();

// Define route for the sales using filters: 
router.route("/").get(SalesController.apiGetSales);

// Define route to get a specific sale
router.route("/id/:id").get(SalesController.apiGetSaleById);

// Define route to get a list all distinct cutomers
router.route("/customers").get(SalesController.apiGetCustomers);

// Define route to get a list all distinct store location
router.route("/storeLocation").get(SalesController.apiGetStoreLocation);

// Define route to get a list all distinct purchaseMethod
router.route("/purchaseMethod").get(SalesController.apiGetPurchaseMethod);



// Define route for the restaurants using filters: zipcode, name and type of cuisine
//router.route("/").get(RestaurantsCtrl.apiGetRestaurants);

// Define route for a specific restaurant
// Definerouter.route("/id/:id").get(RestaurantsCtrl.apiGetRestaurantById);

export default router;
