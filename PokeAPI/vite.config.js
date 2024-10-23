import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// example fetch:

//fetch('/api/test').then(data => data.json()).then(json => console.log(json))


// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
	],
	server: {
		proxy: {
			// Reverse proxy for Symfony backend
			'/api/': {
				target: 'http://symfony:8000/',
				rewrite: path => path.replace(/^\/api/, '')
			}
		},
		host: '0.0.0.0',
		port: 8000,
		watch: {
		usePolling: true
		}
	},
	build: {
		rollupOptions: {
			input: {
				app: "./app.jxs"
			},
		},
	}
})
