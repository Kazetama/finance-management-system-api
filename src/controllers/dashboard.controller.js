import { supabase } from "../config/supabase.js";

export const getDashboardSummary = async (req, res) => {
    const userId = req.user.id;

    const { data, error } = await supabase
        .from("transactions")
        .select("amount, type")
        .eq("user_id", userId);

    if (error) {
        return res.status(400).json({
            message: error.message,
        });
    }

    let income = 0;
    let expense = 0;

    for (const trx of data) {
        if (trx.type === "income") income += trx.amount;
        if (trx.type === "expense") expense += trx.amount;
    }

    res.json({
        income,
        expense,
        balance: income - expense,
    });
};
