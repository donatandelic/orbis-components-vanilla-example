import { defineConfig } from 'vite'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

// https://vitejs.dev/config/
export default defineConfig({
    root: "./src",
    build: {
        outDir: "../dist",
        commonjsOptions: {
            transformMixedEsModules: true
        }
    },
    plugins: [
        nodePolyfills({})
    ],
})
