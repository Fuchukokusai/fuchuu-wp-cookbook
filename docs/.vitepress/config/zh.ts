import { defineConfig, type DefaultTheme } from 'vitepress';

export const zh = defineConfig({
  lang: 'zh',

  themeConfig: {
    nav: nav(),

    sidebar: {
      '/zh/guide/': { base: '/zh/guide/', items: sidebarGuide() },
    },

    editLink: {
      pattern:
        'https://github.com/Fuchukokusai/fuchuu-wp-cookbook/edit/main/docs/:path',
      text: 'Edit this page on GitHub',
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: `Copyright © 2025-${new Date().getFullYear()} Samuel Su`,
    },
  },
});

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: 'Guide',
      link: '/zh/guide/index',
      activeMatch: '/zh/guide/',
    },
  ];
}

function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Guide',
      collapsed: false,
      items: [
        { text: 'home page 介绍', link: 'homepage' },
        { text: '创建 event', link: 'createEvent.md' },
        { text: '创建/编辑文章', link: 'createPost.md' },
        { text: '用户的咨询管理和回复', link: 'qaResolve.md' },
      ],
    },
  ];
}
