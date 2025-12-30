import express from "express";
import cors from "cors";
import testRoutes from "./routes/testkoneksi.routes.js";
import authRoutes from "./routes/auth.routes.js";
import categoryRoutes from "./routes/category.routes.js";
import transactionRoutes from "./routes/transactions.routes.js";
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/test", testRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/transactions", transactionRoutes);

app.get("/", (req, res) => {
    res.json({
        message: "FinTrack API is running 🚀"
    });
});

export default app;
