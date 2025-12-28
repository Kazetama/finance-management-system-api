import { supabase } from "../config/supabase.js";

export const getCategories = async (req, res) => {
    const userId = req.user.id;

    const { data, error } = await supabase
        .from("categories")
        .select("*")
        .eq("user_id", userId)
        .order("created_at", { ascending: false });

    if (error) {
        return res.status(400).json({ message: error.message });
    }

    res.json(data);
};

export const createCategory = async (req, res) => {
    const userId = req.user.id;
    const { name, type } = req.body;

    if (!name || !type) {
        return res.status(400).json({
            message: "name and type are required",
        });
    }

    const { data, error } = await supabase
        .from("categories")
        .insert([
            {
                user_id: userId,
                name,
                type,
            },
        ])
        .select()
        .single();

    if (error) {
        return res.status(400).json({ message: error.message });
    }

    res.status(201).json({
        message: "Category created",
        data,
    });
};
