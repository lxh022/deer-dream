import { navbar } from "vuepress-theme-hope";

export const Navbar = navbar([
    { text: "前端集合", icon: "centos", link: "/front-end/" },
    { text: "后端集合", icon: "network", link: "/back-end/" },
    { text: "面试题汇总", icon: "read", link: "/topic/" },
    {
        text: "文档集合",
        icon: "note",
        children: [
            {
                text: "框架文档",
                children: [
                    {
                        text: "Vue3",
                        link: "https://cn.vuejs.org/"
                    },
                    {
                        text: "React",
                        link: "https://react.docschina.org/"
                    },
                    {
                        text: "Vite",
                        link: "https://cn.vitejs.dev/"
                    },
                    {
                        text: "NodeJs",
                        link: "https://nodejs.org/zh-cn"
                    },
                    {
                        text: "Uniapp",
                        link: "https://uniapp.dcloud.net.cn/"
                    },
                    {
                        text: "Taro",
                        link: "https://taro-docs.jd.com/docs"
                    },
                    {
                        text: "Sass",
                        link: "https://www.sass.hk/"
                    },
                    {
                        text: "Less",
                        link: "https://less.bootcss.com/"
                    },
                    {
                        text: "Axios",
                        link: "https://www.axios-http.cn/"
                    },
                    {
                        text: "ES6入门教程",
                        link: "https://es6.ruanyifeng.com/"
                    },
                ],
            },
            {
                text: "UI框架",
                children: [
                    {
                        text: "Ant Design Vue",
                        link: "https://next.antdv.com/components/overview-cn"
                    }, {
                        text: "Ant Design React",
                        link: "https://ant.design/index-cn"
                    }, {
                        text: "Ant Design Mobile",
                        link: "https://mobile.ant.design/zh"
                    }, {
                        text: "京东NutUI",
                        link: "https://nutui.jd.com/#/"
                    }, {
                        text: "Element-plus",
                        link: "https://element-plus.gitee.io/zh-CN/"
                    }, {
                        text: "有赞Vant Vue3",
                        link: "https://vant-contrib.gitee.io/vant/#/zh-CN"
                    }, {
                        text: "View Design",
                        link: "https://www.iviewui.com/"
                    }, {
                        text: "Layui",
                        link: "https://www.ilayuis.com/v2/docs/"
                    }, {
                        text: "Bootstrap",
                        link: "https://v4.bootcss.com/"
                    }
                ]
            },
            {
                text: "可视化",
                children: [
                    {
                        text: "Threejs",
                        link: "https://threejs.org/"
                    }, {
                        text: "D3js",
                        link: "https://d3js.org/"
                    }, {
                        text: "ECharts",
                        link: "https://echarts.apache.org/zh/index.html"
                    }
                ]
            },
            {
                text: "配置相关",
                children: [
                    {
                        text: "ESLint",
                        link: "https://zh-hans.eslint.org/"
                    }, {
                        text: "Babel",
                        link: "https://www.babeljs.cn/"
                    }, {
                        text: "Nginx中文文档",
                        link: "https://blog.redis.com.cn/doc/index.html"
                    }
                ]
            }
        ],

    },
    {
        text: "工具组",
        icon: "repair",
        children: [
            {
                text: "构建工具",
                children: [
                    {
                        text: "NPM | 包管理 和 项目构建工具",
                        link: "https://www.npmjs.com/"
                    },
                    {
                        text: "webpack 项目构建工具",
                        link: "https://webpack.js.org/"
                    },
                    {
                        text: "Yarn | 包管理 和 项目构建工具",
                        link: "https://yarnpkg.com/"
                    },
                ]
            },
            {
                text: "部署工具",
                children: [
                    {
                        text: "Github",
                        link: "https://pages.github.com/"
                    },
                    {
                        text: "Netlify",
                        link: "https://www.netlify.com/"
                    },
                    {
                        text: "Vercel",
                        link: "https://vercel.com/"
                    },
                    {
                        text: "Surge",
                        link: "https://surge.sh/"
                    },
                    {
                        text: "Heroku",
                        link: "https://www.heroku.com/"
                    },
                ]
            },
            {
                text: "在线工具",
                children: [
                    {
                        text: "程序员在线工具大全",
                        link: "https://tool.lu/"
                    },
                    {
                        text: "CodePen | 前端在线测试和演示工具  国外站点",
                        link: "https://codepen.io/"
                    },
                    {
                        text: "Can I use | Web前端兼容性列表",
                        link: "https://caniuse.com/"
                    },
                    {
                        text: "TinyPNG | 图片在线压缩工具",
                        link: "https://tinypng.com/"
                    },
                    {
                        text: "web.dev | 评测网站性能 基于Lighthouse",
                        link: "https://web.dev/"
                    },
                    {
                        text: "Shape Divider | 定制各种形状SVG的工具",
                        link: "https://www.shapedivider.app/"
                    },
                    {
                        text: "在线文件转换器",
                        link: "https://cloudconvert.com/"
                    },
                    {
                        text: "Carbon | 代码转图片工具",
                        link: "https://carbon.now.sh/"
                    },
                    {
                        text: "Wappalyzer | 检测某个网站的技术栈",
                        link: "https://www.wappalyzer.com/"
                    },
                    {
                        text: "BootCDN 中文网开源项目免费 CDN 加速服务",
                        link: "https://www.bootcdn.cn/"
                    },
                    {
                        text: "开发者搜索服务",
                        link: "https://kaifa.baidu.com/"
                    },
                    {
                        text: "@font-face 生成器",
                        link: "https://transfonter.org/"
                    }
                ]
            },
            {
                text: "抓包工具",
                children: [
                    {
                        text: "Fiddler抓包工具",
                        link: "https://www.telerik.com/fiddler"
                    }
                ]
            },
        ]
    }
]);
