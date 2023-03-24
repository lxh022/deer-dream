import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
    "/": [
        {
            icon: "discover",
            text: "Vue快速入门",
            collapsible: true,
            children: [{
                text: "Vue2",
                prefix: "Vue2/",
                link: "Vue2/",
            }]
        },
        {
            icon: "note",
            text: "Vue3基础",
            collapsible: true,
            children: [{
                text: "Vue3",
                prefix: "Vue3/",
                link: "Vue3/",
            }]
        },
    ],

});
