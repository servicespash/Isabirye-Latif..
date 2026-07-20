import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nodePolyfills } from 'vite-plugin-node-polyfills';

export default defineConfig({
  plugins: [
    react(),
    nodePolyfills({
      include: [
        'fs', 'path', 'os', 'buffer', 'stream', 'util', 'crypto', 'url', 
        'events', 'process', 'http', 'https', 'zlib', 'querystring', 
        'punycode', 'string_decoder', 'timers', 'tty', 'vm', 'tls', 'net', 'dns'
      ],
      globals: {
        Buffer: true,
        global: true,
        process: true,
      },
    }),
  ],
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'esbuild',
    rollupOptions: {
      output: {
        format: 'es',
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      },
    },
  },
  server: {
    host: '0.0.0.0',
    port: 3000,
    strictPort: true,
    watch: {
      usePolling: true,
    },
  },
});
