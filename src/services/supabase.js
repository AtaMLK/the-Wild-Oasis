/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://lfgwrrbckdamneuhjcsp.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxmZ3dycmJja2RhbW5ldWhqY3NwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjUwMTQ3MzAsImV4cCI6MjA0MDU5MDczMH0.FysAk6gEIofg-A60lEK9twhTzjxT27a1i31mG36dh88";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
