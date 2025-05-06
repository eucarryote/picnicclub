// src/lib/server/sheets.ts
import { google } from 'googleapis';
import path from 'path';

// 1. Create one GoogleAuth instance (typed correctly for google.sheets)
const auth = new google.auth.GoogleAuth({
	keyFile: path.resolve('src/lib/credentials/service-account.json'),
	scopes: ['https://www.googleapis.com/auth/spreadsheets']
});

// 2. Pass the GoogleAuth object (not getClient()) into sheets()
export const sheets = google.sheets({
	version: 'v4',
	auth // ← this is the GoogleAuth<JSONClient> that TS loves
});
