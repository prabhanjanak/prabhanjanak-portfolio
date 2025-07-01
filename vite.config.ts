import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/prabhanjanak-portfolio/', // 👈 EXACTLY this
  plugins: [react()],
});
