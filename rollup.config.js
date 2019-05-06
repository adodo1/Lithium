import { eslint } from 'rollup-plugin-eslint';
// import svelte from 'rollup-plugin-svelte';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import css from 'rollup-plugin-css-porter';
import copy from 'rollup-plugin-copy';
import json from 'rollup-plugin-json';
import babel from 'rollup-plugin-babel';
import pkg from './package.json';

export default {
    input: './src/js/starter.js',
    output: {
        file: pkg.browser,
        format: 'iife',
        sourcemap: false,
        name: 'App',
        globals: {
            leaflet: 'L',     
        }             
    },
    external: ['leaflet', 'leaflet-geomixer' ],
    plugins: [        
        // svelte(),
        resolve(),        
        commonjs(),
        json(),
        eslint(),        
        css({dest: 'public/main.css', minified: true}),
        copy({
            targets: [                    
                'src/img',
                'node_modules/leaflet-ext-search/dist/search-input-field.png',
            ],            
        }),
        babel({
            include: ['src/**', 'node_modules/svelte/shared.js'],
            exclude: 'node_modules/**'
        })
    ]
};