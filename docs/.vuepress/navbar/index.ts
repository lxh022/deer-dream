import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
    { text: "前端框架", icon: "centos", link: "/Vue2/" },
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
                text: "UI框架",
                children: []
            },
            {
                text: "可视化",
                children: []
            },
            {
                text: "配置相关",
                children: []
            }
        ]
    }
]);
