import { createClient, SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = "https://dosxdaotjfpvzkktsddu.supabase.co"
const anonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRvc3hkYW90amZwdnpra3RzZGR1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY0ODE3MjIsImV4cCI6MjA2MjA1NzcyMn0.I7bECpX2Q3tdVNXjoBb5JzIlR9RufWuwCURtTqyAQiA";

export const supabase = createClient(supabaseUrl,anonKey)