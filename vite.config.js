import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
const useitforlocal=`http://localhost:4000`
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/users/signup': useitforlocal,
      '/api/users/signin': useitforlocal,
      '/api/gfr/getGfrRule': useitforlocal,
    },
  },
})
