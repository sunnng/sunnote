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
      { text: "后端开发", link: "/backend/javaSE" },
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
            { text: "Git", link: "/tools/git" },
          ],
        },
      ],
      "/web/": [
        {
          text: "Web technology",
          items: [
            { text: "会话跟踪技术", link: "/web/session" },
          ],
        },
      ],
      "/backend/": [
        {
          text: "Java",
          items: [
            { text: "Java环境安装", link: "/backend/javaSE" },
            { text: "JavaSE基础语法", link: "/backend/javaSE-base" },
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
