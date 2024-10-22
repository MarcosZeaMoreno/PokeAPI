import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import symfonyPlugin from 'vite-plugin-symfony'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    symfonyPlugin({
		viteDevServerHostname: 'localhost',
	}),
  ],
  server: {
    host: true,
    port: 8000,
    watch: {
      usePolling: true
    }
  }
})
