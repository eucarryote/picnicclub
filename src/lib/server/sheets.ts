// src/lib/server/sheets.ts
import { google } from 'googleapis';
import { PRIVATE_GOOGLE_SERVICE_ACCOUNT_KEY } from '$env/static/private';

const credentials = JSON.parse(PRIVATE_GOOGLE_SERVICE_ACCOUNT_KEY!);

const auth = new google.auth.GoogleAuth({
	credentials,
	scopes: ['https://www.googleapis.com/auth/spreadsheets']
});

export const sheets = google.sheets({
	version: 'v4',
	auth
});
