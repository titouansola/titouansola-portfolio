import { defineConfig } from 'vite';
import vitePluginFaviconsInject from 'vite-plugin-favicons-inject';

export default defineConfig({
    plugins: [
        vitePluginFaviconsInject('./assets/typescript.svg')
    ]
});
