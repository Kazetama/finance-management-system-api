import { supabase } from "../config/supabase.js";

export const login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({
            message: "Email and password are required"
        });
    }

    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
    });

    if (error) {
        return res.status(401).json({
            message: error.message
        });
    }

    return res.json({
        message: "Login success",
        user: {
            id: data.user.id,
            email: data.user.email
        },
        access_token: data.session.access_token,
        refresh_token: data.session.refresh_token
    });
};
