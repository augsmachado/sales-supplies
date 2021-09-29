import express from "express";

import SalesController from "../controllers/sales.controller.js";

const router = express.Router();

router.route("/").get(SalesController.apiGetSales);

// Define route for the restaurants using filters: zipcode, name and type of cuisine
//router.route("/").get(RestaurantsCtrl.apiGetRestaurants);

// Define route for a specific restaurant
// Definerouter.route("/id/:id").get(RestaurantsCtrl.apiGetRestaurantById);

export default router;
