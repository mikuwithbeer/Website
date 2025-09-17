import {defineConfig} from 'vite'
import {fileURLToPath} from 'node:url'
import vue from '@vitejs/plugin-vue'

// UnoCSS
import Unocss from 'unocss/vite'
import {presetAttributify, presetWind4} from 'unocss'

export default defineConfig({
    plugins: [vue(), Unocss({
        presets: [presetAttributify(), presetWind4()], // Presets
    })],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    }
})
