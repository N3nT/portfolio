import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        index_pl: resolve(__dirname, 'index_pl/index-pl.html'),
        projects: resolve(__dirname, 'projects/projects.html'),
        projects_pl: resolve(__dirname, 'projects_pl/projects-pl.html'),
      },
    },
  },
})