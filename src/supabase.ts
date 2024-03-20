import { createClient } from '@supabase/supabase-js'
import { ref } from 'vue';
import type { Database } from '@/types';


const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey)
// @ts-ignore
globalThis.supabase = supabase

const { data } = await supabase.auth.getUser()
export const user = ref(data.user)
supabase.auth.onAuthStateChange((evt, session) => {
    console.log("connect avec : ",session);
    
    user.value = session?.user ?? null
})