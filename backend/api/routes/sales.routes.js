import express from "express";

import SalesController from "../controllers/sales.controller.js";

const router = express.Router();

// Define route for the sales using filters:
router.route("/").get(SalesController.apiGetSales);

// Define route to get a specific sale
router.route("/:id").get(SalesController.apiGetSalesById);

// Define route to create new sale
router.route("/new").post(SalesController.apiPostSales);

//.put(SalesController.apiUpdateSalesById)
router.route("/delete/:id").delete(SalesController.apiDeleteSalesById);

// Define route to get a list all distinct cutomers
router.route("/customers").get(SalesController.apiGetCustomers);

// Define route to get a list all distinct store location
router.route("/storeLocation").get(SalesController.apiGetStoreLocation);

// Define route to get a list all distinct purchaseMethod
router.route("/purchaseMethod").get(SalesController.apiGetPurchaseMethod);

export default router;
