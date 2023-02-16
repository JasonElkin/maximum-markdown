import { defineConfig } from 'vite'
import { cert, key } from './build/certs'
import dns from 'dns'

dns.setDefaultResultOrder('verbatim')

export default defineConfig({
	build: {
		outDir: '../Our.Umbraco.MaximumMarkdown/wwwroot/assets',
		emptyOutDir: true,
		rollupOptions: {
			input: {
				main: 'src/maximum-markdown.ts'
			},
			output: {
				entryFileNames: `[name].js`,
				chunkFileNames: `[name].js`,
				assetFileNames: `[name].[ext]`
			}
		}
	},
	server: {
		https: {
			cert: cert,
			key: key
		},
		hmr: {
			clientPort: 5173 //Always use default port, ASP.NET doesn't seem to proxy websocket properly.
		}
	},
})
