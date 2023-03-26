import { defineUserConfig } from "vuepress";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import { blog } from "vuepress-theme-hope";
import theme from "./theme.js";

export default defineUserConfig({
  // 网站语言，默认为中文
  lang: 'zh-CN',
  // 网站标题
  title: '逐梦之旅',
  // 网站描述
  description: '记录个人日常开发遇到的一些技巧，难点。',

  // 网站路径默认为主域名。
  base: "/",
  theme,
  plugins: [
    // 本地搜索，删除上方 docsearchPlugin 区块后生效
    searchProPlugin({
      // 索引全部内容
      indexContent: true,
    })
  ],
});
