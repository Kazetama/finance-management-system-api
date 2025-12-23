import express from "express";
import cors from "cors";
import testRoutes from "./routes/testkoneksi.routes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/test", testRoutes);

app.get("/", (req, res) => {
    res.json({
        message: "FinTrack API is running 🚀"
    });
});

export default app;
