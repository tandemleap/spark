// Returns today's van spots left as { spotsLeft: number | null }.
// Reads the "Ride Spots left today" view with a read-only Airtable key
// (AIRTABLE_TOKEN, set in Vercel). Only the number is sent to the browser.

const BASE_ID = 'app8YHLM4yub0RLu8';
const TABLE = 'Drop-in/Trip Plan & Logistics';
const VIEW = 'Ride Spots left today';
const FIELD = 'Available positions';

module.exports = async (req, res) => {
  res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate=60');

  const token = process.env.AIRTABLE_TOKEN;
  if (!token) {
    res.status(500).json({ spotsLeft: null });
    return;
  }

  const params = new URLSearchParams({ view: VIEW, 'fields[]': FIELD, maxRecords: '1' });
  const url = `https://api.airtable.com/v0/${BASE_ID}/${encodeURIComponent(TABLE)}?${params}`;

  try {
    const r = await fetch(url, { headers: { Authorization: `Bearer ${token}` } });
    if (!r.ok) throw new Error(`Airtable ${r.status}`);
    const data = await r.json();
    const record = data.records && data.records[0];
    const value = record ? Number(record.fields[FIELD]) : NaN;
    // No record today (no drop-in scheduled) or an unreadable value -> null.
    res.status(200).json({ spotsLeft: Number.isFinite(value) ? value : null });
  } catch (err) {
    console.error(err.message);
    res.status(502).json({ spotsLeft: null });
  }
};
