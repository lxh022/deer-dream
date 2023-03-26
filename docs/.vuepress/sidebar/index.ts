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
                ],
            },
        ],
    },
    {
        text: '服务端',
        icon: 'page',
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
    }
]);
