import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "zh-CN",
  title: "Sun Note",
  description: "Vite & Vue powered static site generator.",
  head: [["link", { rel: "icon", href: "/logo.svg" }]],
  appearance: true,
  lastUpdated: true,
  markdown: {
    theme: "material-palenight",
    lineNumbers: true,
  },
  themeConfig: {
    // Nav
    logo: { light: "/logo.svg", dark: "/logo-dark.svg" },
    siteTitle: "SunNote",
    nav: [
      { text: "Java Web", link: "/web/java-web" },
      { text: "Tools", link: "/tools/git" },
      { text: "Web", link: "/web/session" },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
    // SideBar
    sidebar: {
      "/tools/": [
        {
          text: "Develop Tools",
          items: [
            // This shows `/guide/index.md` page.
            { text: "Git", link: "/tools/git" }, // /guide/index.md
          ],
        },
      ],
      "/web/": [
        {
          text: "Web technology",
          items: [
            // This shows `/guide/index.md` page.
            { text: "Session", link: "/web/session" }, // /guide/index.md
          ],
        },
      ],
    },
    // Edit Link
    editLink: {
      pattern: "https://github.com/vuejs/vitepress/edit/main/docs/:path",
      text: "在GitHub上编辑此页面",
    },
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2022-present Chengyuan Sun",
    },
    lastUpdatedText: "更新日期",
  },
});
