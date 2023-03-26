import { path } from "@vuepress/utils";
import { hopeTheme } from "vuepress-theme-hope";
import { Navbar } from "./navbar";
import { Sidebar } from "./sidebar";

export default hopeTheme({
  hostname: "https://vuepress-theme-hope-docs-demo.netlify.app",

  favicon: "/images/favicon.png",

  author: {
    name: "Mr.Lu",
    url: "https://mrhope.site",
  },

  iconAssets: "iconfont",

  logo: "/images/favicon.png",

  repo: "vuepress-theme-hope/vuepress-theme-hope",

  docsDir: "demo/theme-docs/src",
  // 深色模式配置
  darkmode: 'switch',

  themeColor: {
    blue: '#2196f3',
    red: '#f26d6d',
    green: '#3eaf7c',
    orange: '#fb9b5f',
  },
  fullscreen: true,

  // navbar
  navbar: Navbar,

  // sidebar
  sidebar: Sidebar,

  // 导航栏布局
  navbarLayout: {
    start: ['Brand'],
    center: ['Links'],
    end: ['Repo', 'Outlook', 'Search'],
  },

  // footer: "默认页脚",
  displayFooter: true,

  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
    },
  },
  blog: {
    // articleInfo: ['Date', 'PageView', 'Category', 'Tag', 'ReadingTime'],
    name: 'Deer.Lu',
    description: '踏遍千山万水，不问前方路。',
    roundAvatar: true,
    medias: {
      // GitHub: 'https://github.com/dselegent',
      // Gitee: 'https://gitee.com/dselegent',
      QQ: '/images/qq.jpeg',
      Wechat: '/images/qrcode.jpg',
      Email: 'mailto:2235808893@qq.com',
      Gmail: 'mailto:luxuhui6666@gmail.com',
    },
  },

  plugins: {
    blog: {
      excerpt: true,
    },
    comment: {
      // @ts-expect-error: You should generate and use your own comment service
      provider: "Waline",
    },

    // all features are enabled for demo, only preserve features you need here
    // 禁用不需要的配置
    mdEnhance: {
      align: true,
      attrs: true, // 使用特殊标记为 Markdown 元素添加属性
      // chart: true,
      // codetabs: true, // 代码块分组
      container: true,
      // demo: true, //代码演示
      // echarts: true,
      // flowchart: true,
      gfm: true,
      imgLazyload: true,
      // imgMark: true,
      imgSize: true,
      figure: true,
      include: true, //导入文件
      // katex: true,
      mark: true,
      // mermaid: true,
      footnote: true,
      tasklist: true,
      sub: true, // 上下角标
      sup: true,
      // tabs: true, // 选项卡
      // vpre: true,
      // vuePlayground: true, // Vue 交互演示
    },

  },
});
