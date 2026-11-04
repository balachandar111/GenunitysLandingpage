import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'VITE_');
  if (process.env.VERCEL === '1') {
    const apiUrl = (process.env.VITE_API_URL || env.VITE_API_URL || '').trim();
    let url;
    try { url = new URL(apiUrl); } catch { /* Report the configuration error below. */ }
    if (!url || url.protocol !== 'https:' || url.pathname !== '/' || url.search || url.hash || url.username || url.password) {
      throw new Error('Set VITE_API_URL to your Render HTTPS origin (no /api path) in Vercel, then redeploy.');
    }
  }
  return {
    plugins: [react()],
    server: {
      port: 5173,
      proxy: { '/api': { target: 'http://localhost:5000', changeOrigin: true } },
    },
  };
});
