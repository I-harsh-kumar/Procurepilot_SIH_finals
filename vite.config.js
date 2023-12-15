import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const useitforlocal = 'http://localhost:4000';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/users/signup': useitforlocal,
      '/api/users/signin': useitforlocal,
      '/api/gfr/getGfrRule': useitforlocal,
      '/api/gfr/edit': {
        target: useitforlocal,
        rewrite: (path) => path.replace(/^\/api\/gfr\/edit\//, '/api/gfr/edit/'), // Add the dynamic part here
      },
      '/api/gfr/view': {
        target: useitforlocal,
        rewrite: (path) => path.replace(/^\/api\/gfr\/edit\//, '/api/gfr/edit/'), // Add the dynamic part here
      },
    },
  },
})
