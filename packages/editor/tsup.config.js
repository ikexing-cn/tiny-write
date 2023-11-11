import { defineConfig } from 'tsup'

export default defineConfig({
  dts: true,
  clean: true,
  sourcemap: true,
  splitting: false,
  format: ['esm'],
  entry: ['src/**'],
  minify: process.env.NODE_ENV === 'production',
})
