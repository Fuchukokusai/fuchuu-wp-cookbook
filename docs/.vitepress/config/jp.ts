import { defineConfig, type DefaultTheme } from 'vitepress';

export const jp = defineConfig({
  lang: 'jp',

  themeConfig: {
    nav: nav(),

    sidebar: {
      '/jp/guide/': { base: '/jp/guide/', items: sidebarGuide() },
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
      link: '/jp/guide/index',
      activeMatch: '/guide/',
    },
  ];
}

function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Guide',
      collapsed: false,
      items: [
        { text: 'ホームページの作成ガイド', link: 'homepage' },
        { text: 'イベントのクリエート（event の編集', link: 'createEvent' },
        { text: 'activity の編集（文章の編集', link: 'createPost' },
        {
          text: 'ユーザーからの問い合わせやフィードバックの処理', link: 'qaResolve',
        },
      ],
    },
  ];
}
