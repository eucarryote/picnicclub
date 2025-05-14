export async function load(event) {
	const response = await event.fetch('/api/sheets');
	if (!response.ok) {
		throw new Error('Failed to fetch picnics');
	}
	const data = await response.json();
	if (!Array.isArray(data)) {
		throw new Error('Invalid data format');
	}
	return {
		picnics: data ?? []
	};
}
