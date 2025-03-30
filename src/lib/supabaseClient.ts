import { createClient } from '@supabase/supabase-js';
import { PRIVATE_SUPABASE_URL, PRIVATE_SUPABASE_ANON_KEY } from '$env/static/private';
export const supabase = createClient(PRIVATE_SUPABASE_URL, PRIVATE_SUPABASE_ANON_KEY);
