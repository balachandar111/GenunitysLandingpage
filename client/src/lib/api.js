import axios from 'axios';

const api = axios.create({
  baseURL: (import.meta.env.VITE_API_URL || '').trim().replace(/\/+$/, ''),
  // Allow time for a free Render instance to wake up.
  timeout: 90000,
});

export async function submitLead(payload) {
  const { data } = await api.post('/api/leads', payload);
  if (data?.success !== true) {
    throw new Error('The server did not confirm that the enquiry was saved.');
  }
  return data;
}
