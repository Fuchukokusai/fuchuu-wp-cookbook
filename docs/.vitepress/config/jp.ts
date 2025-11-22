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
      text: 'トップ Top',
      collapsed: false,
      items: [{ text: '内容の編集', link: 'pageModify/mainPageModify' }],
    },
    {
      text: 'サロン概要',
      link: 'pageGuide/saronSummary',
      collapsed: false,
    },
    {
      text: 'サロンの活動',
      collapsed: false,
      items: [
        { text: '日本語学習会', link: 'pageGuide/jaLearningMeetting' },
        { text: '文化交流会', link: 'pageGuide/jaCommunicateMeetting' },
        {
          text: 'ボランティア研修部会',
          link: 'pageGuide/volunteerTrainingCommittee',
        },
        {
          text: '生活情報支援部会',
          link: 'pageGuide/livingInfoSupportCommittee',
        },
        {
          text: '企画部会',
          link: 'pageGuide/planningCommittee',
        },
      ],
    },
    {
      text: '学習者のページ',
      collapsed: false,
      items: [{ text: '日本語学習会', link: 'pageGuide/learnerPage' }],
    },
    {
      text: 'ボランティアのページ',
      collapsed: false,
      items: [{ text: '日本語学習会', link: 'pageGuide/volunteerPage' }],
    },
    {
      text: 'イベント',
      collapsed: false,
      items: [{ text: 'イベントの作成', link: 'createEvent' }],
    },
    {
      text: 'ボタン、リンク集',
      link: 'friendLinkModify',
      collapsed: false,
    },
    {
      text: 'ユーザーからの問い合わせやフィードバックの処理',
      link: 'qaResolve',
      collapsed: false,
    },
    {
      text: 'ユーザーからの問い合わせの受信の設定',
      link: 'other/qaEmailRecieveSetting',
      collapsed: false,
    },
    {
      text: 'その他',
      collapsed: false,
      items: [
        {
          text: 'アクセス',
          link: 'pageGuide/access',
        },
        {
          text: 'パスワードつける pdf の管理',
          link: 'pdfWithPwdModify',
        },
        {
          text: '普通の pdf の管理',
          link: 'normalPdfUpload',
        },
      ],
    },
  ];
}
