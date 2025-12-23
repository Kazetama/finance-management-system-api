import "./config/env.js";

import app from "./app.js";

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("SUPABASE_URL:", process.env.SUPABASE_URL);
    console.log(`🔥 Server running on http://localhost:${PORT}`);
});
