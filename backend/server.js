import express from "express";
import cors from "cors";
import sales from "./api/routes/sales.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/sales", sales);
app.use("*", (req, res) => {
	res.status(400).json({ error: "Not route found" });
});

export default app;
