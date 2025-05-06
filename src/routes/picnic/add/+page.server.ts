import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
	default: async ({ request, fetch }) => {
		const formData = await request.formData();

		const newPicnic = {
			id: crypto.randomUUID(),
			created_at: new Date().toISOString(),
			title: formData.get('title') as string,
			description: formData.get('description') as string | null,
			organizer_name: formData.get('organizer_name') as string | null,
			email: formData.get('email') as string | null,
			location: formData.get('location') as string | null,
			meeting_place: formData.get('meeting_place') as string | null
		};

		try {
			await fetch('/api/sheets', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(newPicnic)
			}).then((response) => {
				if (!response.ok) {
					throw new Error('Failed to add picnic');
				}
			});
		} catch (error) {
			console.error('Error adding picnic:', error);
			return fail(500, { error: 'Failed to add picnic' });
		}

		return { success: true };
	}
};
