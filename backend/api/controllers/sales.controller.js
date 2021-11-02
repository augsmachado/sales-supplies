import SalesDAO from "../../dao/salesDAO.js";

export default class SalesController {
	// Get all sales
	static async apiGetSales(req, res, next) {
		try {
			const salesPerPage = req.query.salesPerPage
				? parseInt(req.query.salesPerPage, 10)
				: 20;
			const page = req.query.page ? parseInt(req.query.page, 10) : 0;

			let filters = {};

			// Only filter is used
			if (req.query.storeLocation) {
				filters.storeLocation = req.query.storeLocation;
			} else if (req.query.purchaseMethod) {
				filters.purchaseMethod = req.query.purchaseMethod;
			} else if (req.query.couponUsed) {
				const bool =
					req.query.couponUsed.toLowerCase() === "true"
						? true
						: false;
				filters.couponUsed = bool;
			} else if (req.query.gender) {
				filters.gender = req.query.gender;
			} else if (req.query.age) {
				filters.age = parseInt(req.query.age);
			} else if (req.query.email) {
				filters.email = req.query.email;
			} else if (req.query.satisfaction) {
				filters.satisfaction = parseInt(req.query.satisfaction);
			}

			// Combination of filters
			if (req.query.storeLocation && req.query.purchaseMethod) {
				filters.storeLocation = req.query.storeLocation;
				filters.purchaseMethod = req.query.purchaseMethod;
			}

			const { salesList, totalNumSales } = await SalesDAO.getSales({
				filters,
				page,
				salesPerPage,
			});

			let response = {
				sales: salesList,
				page: page,
				filters: filters,
				entries_per_page: salesPerPage,
				total_results: totalNumSales,
			};

			res.json(response);
		} catch (err) {
			console.log(`apiGetSales, ${err}`);
			res.status(500).json({ error: err });
		}
	}

	// Get a specific sale
	static async apiGetSalesById(req, res, next) {
		try {
			let id = req.params.id || {};
			let sale = await SalesDAO.getSalesById(id);

			if (!sale) {
				res.status(400).json({ error: "No sale found" });
				return;
			}
			res.json(sale);
		} catch (err) {
			console.log(`apiGetSalesById, ${err}`);
			res.status(500).json({ error: err });
		}
	}

	// Create a new sale
	static async apiPostSales(req, res, next) {
		try {
			const saleDate = new Date();
			const customer = req.body.customer;
			const storeLocation = req.body.storeLocation;
			const couponUsed =
				req.body.couponUsed.toLowerCase() === "true" ? true : false;
			const purchaseMethod = req.body.purchaseMethod;
			const items = req.body.items;

			const response = await SalesDAO.newSale(
				saleDate,
				customer,
				storeLocation,
				couponUsed,
				purchaseMethod,
				items
			);

			res.json({ status: "sucess", response: response });
		} catch (err) {
			res.status(500).json({ error: err.message });
		}
	}

	// Update a specific sale
	static async apiUpdateSalesById(req, res, next) {
		try {
			const saleId = req.params.id;
			const saleDate = new Date();
			const customer = req.body.customer;
			const items = req.body.items;

			const response = await SalesDAO.updateSales(
				saleId,
				saleDate,
				customer,
				items
			);

			var { error } = response;
			if (error) {
				res.status(400).json({ error });
			}

			if (response.modifiedCount === 0) {
				throw new Error(
					"unable to update sale - customer may not be original buyer"
				);
			}

			res.json({ status: "success", response: response });
		} catch (err) {
			res.status(500).json({ err: err.message });
		}
	}

	// Delete a specific sale
	static async apiDeleteSalesById(req, res, next) {
		try {
			const saleId = req.params.id;

			const response = await SalesDAO.deleteSalesById(saleId);

			res.json({ status: "success", response: response });
		} catch (err) {
			res.status(500).json({ error: err.message });
		}
	}

	// List all distinct customers
	static async apiGetCustomers(req, res, next) {
		try {
			const { customersList, totalNumCustomers } =
				await SalesDAO.getCustomers();

			let response = {
				customers: customersList,
				total_results: totalNumCustomers,
			};
			res.json(response);
		} catch (err) {
			console.log(`apiGetCustomers, ${err}`);
			res.status(500).json({ error: err });
		}
	}

	// List all storeLocation
	static async apiGetStoreLocation(req, res, next) {
		try {
			let storeLocation = await SalesDAO.getStoreLocation();
			res.json(storeLocation);
		} catch (err) {
			console.log(`apiGetStoreLocation, ${err}`);
			res.status(500).json({ error: err });
		}
	}

	// List all purchaseMethod
	static async apiGetPurchaseMethod(req, res, next) {
		try {
			let purchaseMethod = await SalesDAO.getPurchaseMethod();
			res.json(purchaseMethod);
		} catch (err) {
			console.log(`apiGetPurchaseMethod, ${err}`);
			res.status(500).json({ error: err });
		}
	}
}
