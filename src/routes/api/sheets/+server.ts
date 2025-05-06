// src/routes/api/sheets/+server.ts
import type { RequestHandler } from '@sveltejs/kit';
import { json } from '@sveltejs/kit';
import { sheets } from '$lib/server/sheets';

const SPREADSHEET_ID = '1KTHoU7v1gfY5F8Vtdt-FszTLeu9I1Hl4S0rnskHIVNM';
const SHEET_NAME = 'Sheet1';
const HEADER_RANGE = `${SHEET_NAME}!1:1`;
const DATA_RANGE = `${SHEET_NAME}!A2:H`;

// pull headers + rows into an array of { header1: val1, ... }
async function fetchAll(): Promise<Record<string, string>[]> {
	// 1) headers
	const headerRes = await sheets.spreadsheets.values.get({
		spreadsheetId: SPREADSHEET_ID,
		range: HEADER_RANGE
	});
	const headers = headerRes.data.values?.[0] ?? [];

	// 2) data
	const dataRes = await sheets.spreadsheets.values.get({
		spreadsheetId: SPREADSHEET_ID,
		range: DATA_RANGE
	});
	const rows = dataRes.data.values ?? [];

	return rows.map((row) =>
		headers.reduce(
			(obj, h, i) => {
				obj[h] = row[i] ?? '';
				return obj;
			},
			{} as Record<string, string>
		)
	);
}

export const GET: RequestHandler = async ({ url }) => {
	const id = url.searchParams.get('id');
	const all = await fetchAll();

	if (id) {
		const record = all.find((r) => r.id === id);
		if (!record) return json({ error: 'Not found' }, { status: 404 });
		return json(record);
	}

	return json(all);
};

export const POST: RequestHandler = async ({ request }) => {
	const payload = await request.json();
	const headers = Object.keys(payload);
	const values = headers.map((h) => payload[h] ?? '');

	await sheets.spreadsheets.values.append({
		spreadsheetId: SPREADSHEET_ID,
		range: SHEET_NAME,
		valueInputOption: 'RAW',
		insertDataOption: 'INSERT_ROWS',
		requestBody: { values: [values] }
	});

	return json(payload, { status: 201 });
};

export const PUT: RequestHandler = async ({ request }) => {
	const payload = await request.json();
	if (!payload.id) return json({ error: 'Missing id in payload' }, { status: 400 });

	const all = await fetchAll();
	const idx = all.findIndex((r) => r.id === payload.id);
	if (idx === -1) return json({ error: 'Not found' }, { status: 404 });

	// re-fetch headers to compute exact range
	const headerRes = await sheets.spreadsheets.values.get({
		spreadsheetId: SPREADSHEET_ID,
		range: HEADER_RANGE
	});
	const headers = headerRes.data.values?.[0] ?? [];

	const updatedRow = headers.map((h) => payload[h] ?? all[idx][h] ?? '');
	const sheetRow = idx + 2; // +2: because headers are row 1

	const lastCol = String.fromCharCode(65 + headers.length - 1); // e.g. 'C'
	const updateRange = `${SHEET_NAME}!A${sheetRow}:${lastCol}${sheetRow}`;

	await sheets.spreadsheets.values.update({
		spreadsheetId: SPREADSHEET_ID,
		range: updateRange,
		valueInputOption: 'RAW',
		requestBody: { values: [updatedRow] }
	});

	return json({ status: 'updated', row: payload });
};
