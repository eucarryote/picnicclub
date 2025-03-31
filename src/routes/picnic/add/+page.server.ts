import { fail } from '@sveltejs/kit';
import type { TablesInsert } from '../../../../database.types';
import type { Actions } from './$types';

import { supabase } from '$lib/supabaseClient';

export const actions: Actions = {
	default: async ({ request }) => {
		const formData = await request.formData();

		const newPicnic: TablesInsert<'picnic'> = {
			title: formData.get('title') as string,
			description: formData.get('description') as string | null,
			email: formData.get('email') as string | null,
			location: formData.get('location') as string | null,
			meeting_place: formData.get('meeting_place') as string | null,
			organizer_name: formData.get('organizer_name') as string | null,
			created_at: new Date().toISOString()
		};

		try {
			console.log('New picnic:', newPicnic);
			supabase
				.from('picnic')
				.insert(newPicnic)
				.then(({ data, error }) => {
					if (error) {
						console.error('Error inserting picnic:', error);
						throw new Error('Failed to insert picnic');
					}
					if (data) {
						console.log('Inserted picnic:', data);
					}
				});
		} catch (error) {
			console.error('Error adding picnic:', error);
			return fail(500, { error: 'Failed to add picnic' });
		}

		return { success: true };
	}
};
