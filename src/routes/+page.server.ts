import { supabase } from '$lib/supabaseClient';

export async function load() {
	const { data } = await supabase.from('picnic').select();
	console.log('Loaded picnics:', data);
	return {
		picnics: data ?? []
	};
}
