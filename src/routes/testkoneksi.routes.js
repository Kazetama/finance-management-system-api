import express from "express";
import { supabaseAdmin } from "../config/supabase.js";

const router = express.Router();

router.get("/supabase", async (req, res) => {
    try {
        const { data, error } = await supabaseAdmin.auth.admin.listUsers({
            perPage: 1
        });

        if (error) {
            return res.status(500).json({
                status: "error",
                message: error.message
            });
        }

        res.json({
            status: "ok",
            message: "Supabase connected successfully 🚀",
            sample_user: data.users
        });
    } catch (err) {
        res.status(500).json({
            status: "error",
            message: err.message
        });
    }
});

export default router;
