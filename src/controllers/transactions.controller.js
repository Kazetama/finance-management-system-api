import { supabase } from "../config/supabase.js";

/**
 * GET /api/transactions
 * Ambil semua transaksi user login
 */
export const getTransactions = async (req, res) => {
    const userId = req.user.id;

    const { data, error } = await supabase
        .from("transactions")
        .select(`
            id,
            amount,
            description,
            transaction_date,
            type,
            created_at,
            category:categories (
                id,
                name,
                type
            )
        `)
        .eq("user_id", userId)
        .order("transaction_date", { ascending: false });

    if (error) {
        return res.status(400).json({
            message: error.message,
        });
    }

    res.json(data);
};

/**
 * POST /api/transactions
 * Buat transaksi baru
 */
export const createTransaction = async (req, res) => {
    const userId = req.user.id;
    const { category_id, amount, description, transaction_date, type } = req.body;

    if (!category_id || !amount || !transaction_date || !type) {
        return res.status(400).json({
            message: "category_id, amount, transaction_date, and type are required",
        });
    }

    const { data, error } = await supabase
        .from("transactions")
        .insert([
            {
                user_id: userId,
                category_id,
                amount,
                description,
                transaction_date,
                type,
            },
        ])
        .select()
        .single();

    if (error) {
        return res.status(400).json({
            message: error.message,
        });
    }

    res.status(201).json({
        message: "Transaction created",
        data,
    });
};

/**
 * DELETE /api/transactions/:id
 */
export const deleteTransaction = async (req, res) => {
    const userId = req.user.id;
    const { id } = req.params;

    const { error } = await supabase
        .from("transactions")
        .delete()
        .eq("id", id)
        .eq("user_id", userId);

    if (error) {
        return res.status(400).json({
            message: error.message,
        });
    }

    res.json({
        message: "Transaction deleted",
    });
};
