import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import platuiBabelPlugin from './babel-plugin-platui.js';

export default defineConfig({
  plugins: [  
    react({
      babel: {
        plugins: [platuiBabelPlugin],
      }
    })
  ],
});
