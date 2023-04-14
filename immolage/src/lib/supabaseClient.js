import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://ylauufsketczcxfhevwv.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlsYXV1ZnNrZXRjemN4Zmhldnd2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODE0NTQ1ODMsImV4cCI6MTk5NzAzMDU4M30.EXCKm7liTQZznKKMvxE1E3jrH6k60efb1DYyZB5FE6c";

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export default supabase;
