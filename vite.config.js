import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [],
    server: {
      port: process.env.PORT || 5175, // Default to 5175 if PORT is not set
      host: '0.0.0.0',
    },
  };
});
