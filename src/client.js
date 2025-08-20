// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
dotenv.config();

// export default defineConfig({
//     plugins: [react()],
//     define: {
//         "process.env.VITE_URL": JSON.stringify(process.env.VITE_URL),
//         "process.env.VITE_API_KEY": JSON.stringify(process.env.VITE_API_KEY),
//     },
// });

const URL = process.env.VITE_URL;

const API_KEY = process.env.VITE_API_KEY;

const supabase = createClient(URL, API_KEY);

export { supabase };