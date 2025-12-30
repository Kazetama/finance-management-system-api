import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL;
const anonKey = process.env.SUPABASE_ANON_KEY;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

// Untuk auth user (login, verify JWT)
export const supabase = createClient(supabaseUrl, anonKey);

// Untuk admin / backend
export const supabaseAdmin = createClient(supabaseUrl, serviceKey);

export const getUserSupabase = (accessToken) => {
    return createClient(supabaseUrl, anonKey, {
        global: {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        },
    });
};