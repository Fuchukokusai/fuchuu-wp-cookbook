import { defineConfig } from 'vitepress';
import { zh } from './zh';
import { jp } from './jp';

export default defineConfig({
  // 站点级选项
  title: '府中国際サロン',
  description: '府中国際サロンのホームページ管理のマニュアル',
  base: '/t1/script/dist/dist/',

  locales: {
    root: {
      label: '中文简体',
      ...zh,
    },
    jp: {
      label: '日本語',
      ...jp,
    },
    zh: {
      label: '中文简体',
      ...zh,
    },
  },
  ignoreDeadLinks: true,
});
