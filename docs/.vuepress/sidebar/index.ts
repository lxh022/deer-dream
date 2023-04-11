import { sidebar } from "vuepress-theme-hope";

export const Sidebar = sidebar([
    {
        text: '前端',
        icon: 'page',
        prefix: '/front-end/',
        link: '',
        collapsible: true,
        children: [
            {
                text: '前端三剑客',
                icon: 'back-stage',
                prefix: '',
                collapsible: true,
                children: [
                    {
                        text: 'HTML',
                        icon: 'html',
                        prefix: 'html/',
                        collapsible: true,
                        children: 'structure',
                    }, {
                        text: 'CSS',
                        icon: 'css',
                        prefix: 'css/',
                        collapsible: true,
                        children: 'structure',
                    }, {
                        text: 'Javascript',
                        icon: 'javascript',
                        prefix: 'javascript/',
                        collapsible: true,
                        children: 'structure',
                    },
                ]
            },
            {
                text: '框架',
                icon: 'tree',
                prefix: '',
                collapsible: true,
                children: [
                    {
                        text: 'vue2',
                        icon: 'vue',
                        prefix: 'vue2/',
                        collapsible: true,
                        children: 'structure',
                    },
                    {
                        text: 'vue3',
                        icon: 'vue',
                        prefix: 'vue3/',
                        collapsible: true,
                        children: 'structure',
                    },
                    {
                        text: 'react',
                        icon: 'react',
                        prefix: 'react/',
                        collapsible: true,
                        children: 'structure',
                    },
                    {
                        text: '微信小程序',
                        icon: 'wechat',
                        prefix: 'wechat/',
                        collapsible: true,
                        children: 'structure',
                    },
                ],
            },
        ],
    },
    {
        text: '服务端',
        icon: 'network',
        prefix: '/back-end/',
        // link: '',
        collapsible: true,
        children: [
            {
                text: 'nodeJs',
                icon: 'nodeJS',
                prefix: 'node',
                collapsible: true,
                children: 'structure',
            },
            {
                text: 'mongodb',
                icon: 'mysql',
                prefix: 'mongodb',
                link: '',
                collapsible: true,
                children: 'structure',
            },
        ],
    },
    {
        text: '面试题集合',
        icon: 'relation',
        prefix: '/topic/',
        collapsible: true,
        children: [
            {
                text: '基础篇',
                icon: 'snow',
                prefix: 'foundation',
                link: 'foundation',
            },
            {
                text: '进阶篇',
                icon: 'selection',
                prefix: 'advance',
                link: 'advance',
            },
        ],
    },
]);
