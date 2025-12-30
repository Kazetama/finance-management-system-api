import express from "express";
import {
    getTransactions,
    createTransaction,
    deleteTransaction,
} from "../controllers/transactions.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.use(authMiddleware);

router.get("/", getTransactions);
router.post("/", createTransaction);
router.delete("/:id", deleteTransaction);

export default router;
