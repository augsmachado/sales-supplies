import mongodb from "mongodb";
const ObjectId = mongodb.ObjectId;

const SALES_PER_PAGE = 20;
const PAGE = 0;

let sales;

export default class SalesDAO {
	// Establish a connection handle in SalesDAO
	static async injectDB(conn) {
		if (sales) {
			return;
		}

		try {
			const database = await conn.db(process.env.SALES_NS);
			sales = database.collection("sales");
		} catch (err) {
			console.error(
				`Unable to establish a collection handle in salesDAO: ${err}`,
				err
			);
		}
	}

	static async getSales({
		filters = null,
		page = PAGE,
		salesPerPage = SALES_PER_PAGE,
	} = {}) {
		let query;

		if (filters) {
			if ("storeLocation" in filters) {
				query = { storeLocation: { $eq: filters["storeLocation"] } };
			} else if ("purchaseMethod" in filters) {
				query = { purchaseMethod: { $eq: filters["purchaseMethod"] } };
			}
		}

		let cursor;
		try {
			cursor = await sales.find(query);
		} catch (err) {
			console.error(`Unable to issue find command, ${err}`, err);
			return { salesList: [], totalNumSales: 0 };
		}

		const displayCursor = cursor
			.limit(salesPerPage)
			.skip(salesPerPage * page);
		try {
			const salesList = await displayCursor.toArray();
			const totalNumSales =
				page === PAGE ? await sales.countDocuments(query) : 0;
			return { salesList, totalNumSales };
		} catch (err) {
			console.error(
				`Unable to convert cursor to array or problem to count documents, ${err}`
			);
			return { salesList: [], totalNumSales: 0 };
		}
	}
}
