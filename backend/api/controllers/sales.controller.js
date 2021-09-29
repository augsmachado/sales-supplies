import SalesDAO from "../../dao/salesDAO.js";

export default class SalesController {
	static async apiGetSales(req, res, next) {
		const salesPerPage = req.query.salesPerPage
			? parseInt(req.query.salesPerPage, 10)
			: 20;
		const page = req.query.page ? parseInt(req.query.page, 10) : 0;

		let filters = {};
		if (req.query.storeLocation) {
			filters.storeLocation = req.query.storeLocation;
		} else if (req.query.purchaseMethod) {
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
}
