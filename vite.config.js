import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { resolve } from 'path';
import autoPreprocess from 'svelte-preprocess';
const projectRootDir = resolve(__dirname);

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/js/app.js'],
            refresh: true,
        }),
        svelte({
            preprocess: autoPreprocess(),
        })
    ],
    optimizeDeps: {
        include: [
            '@inertiajs/inertia',
            '@inertiajs/inertia-svelte',
        ]
    },
    resolve: {
        alias: {
            '@': resolve(projectRootDir, 'resources/js'),
            '~': resolve(projectRootDir, 'resources'),
        },
        extensions: ['.js', '.svelte', '.json'],
    },
    server: {
        hmr: {
         host: 'localhost'
        }    
    }
});
