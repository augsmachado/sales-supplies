import SalesDAO from "../../dao/salesDAO.js";

export default class SalesController {
	// Get all sales
	static async apiGetSales(req, res, next) {
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
			filters.couponUsed = req.query.couponUsed;
		} else if (req.query.email) {
			filters.email = req.query.email;
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
	}

	// Get a specific sale
	static async apiGetSaleById(req, res, next) {
		try {
			let id = req.params.id || {};
			let sale = await SalesDAO.getSaleById(id);

			if (!sale) {
				res.status(400).json({ error: "No sale found" });
				return;
			}
			res.json(sale);
		} catch (err) {
			console.log(`api, ${err}`);
			res.status(500).json({ error: err });
		}
	}

	// List all storeLocation
	static async apiGetStoreLocation(req, res, next) {
		try {
			let storeLocation = await SalesDAO.getStoreLocation();
			res.json(storeLocation);
		} catch (err) {
			console.log(`api, ${err}`);
			res.status(500).json({ error: err });
		}
	}

	// List all purchaseMethod
	static async apiGetPurchaseMethod(req, res, next) {
		try {
			let purchaseMethod = await SalesDAO.getPurchaseMethod();
			res.json(purchaseMethod);
		} catch (err) {
			console.log(`api, ${err}`);
			res.status(500).json({ error: err });
		}
	}
}
