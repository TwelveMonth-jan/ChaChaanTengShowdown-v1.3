import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const repoBase = '/ChaChaanTengShowdown-v1.3/';

export default defineConfig(({ command }) => ({
  plugins: [react()],
  server: { port: 5173, open: true },
  base: command === 'build' ? repoBase : '/',
}));
