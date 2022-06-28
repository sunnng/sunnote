import { defineConfig } from 'vitepress'

export default defineConfig({
    lang: 'zh-CN',
    title: 'Sun Note',
    description: 'Vite & Vue powered static site generator.',
    head: [['link', {rel: 'icon', href: '/logo.svg'}]],
    appearance: true,
    lastUpdated: true,
    markdown: {
        theme: 'material-palenight',
        lineNumbers: true
    },
    themeConfig: {
        // Nav
        logo: { light: '/logo.svg', dark: '/logo-dark.svg' },
        siteTitle: 'SunNote',
        nav: [
            { text: 'Java Web', link: '/web/java-web', activeMatch: '/web' },
            { text: 'Tools', link: '/tools/git'},
        ],
        socialLinks: [
            { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
            { icon: 'twitter', link: '...' },
            { icon: 'discord', link: '...' }
        ],

        // SideBar
        sidebar: {
            '/tools/': [
                {
                    text: 'Develop Tools',
                    items: [
                        // This shows `/guide/index.md` page.
                        { text: 'Git', link: '/tools/git' }, // /guide/index.md
                    ]
                }
            ],
        },
        // Edit Link
        editLink: {
            pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
            text: 'Edit this page on GitHub'
        },
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2022-present Chengyuan Sun'
        },
        lastUpdatedText: 'Updated Date'
    }
})
