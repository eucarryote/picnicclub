import { supabase } from '$lib/supabaseClient';

export async function load() {
	const { data } = await supabase.from('picnics').select();
	return {
		picnics: data ?? []
	};
}
