// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeObsidian from 'starlight-theme-obsidian'

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
            plugins: [starlightThemeObsidian({
                backlinks: false,
                graph: false,
            })],
			title: 'docs.lukeh.nz',
			sidebar: [
                {
                    label: 'Home',
                    slug: ''
                },
                {
                    label: 'Deployment',
                    items: [
                        { label: 'Alpine Linux', slug: 'deployment/alpine-linux' },
                        { label: 'Ubuntu', slug: 'deployment/ubuntu' },
                    ],
                },
                {
                    label: 'Programming',
                    items: [
                        { label: 'Laravel', slug: 'programming/laravel' },
                    ],
                },
                {
                    label: 'General',
                    items: [
                        { label: 'macOS', slug: 'general/macos' },
                    ],
                },
			],
		}),
	],
});
