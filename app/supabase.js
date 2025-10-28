import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://mfywwcwmfoiwuvsboddu.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1meXd3Y3dtZm9pd3V2c2JvZGR1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE0NjYwMTMsImV4cCI6MjA3NzA0MjAxM30.oALJCjiAtR8IsmylWgplg6cFyNpsfrCP1ZYS0QQfNKE";
export const supabase = createClient(supabaseUrl, supabaseKey);
