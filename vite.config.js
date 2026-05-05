import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  appType: 'spa',
  base: '/iyf-s10-week-09-miltonerick4410-oss/', 
});