import { createWebHashHistory, createRouter } from 'vue-router';
import { h } from 'vue';
import Markdown from './components/Markdown.vue';
import intro from './markdown/intro.md';
import install from './markdown/install.md';
import getStarted from './markdown/get-started.md';
const md = (string) => h(Markdown, { content: string, key: string });

const history = createWebHashHistory();
export const router = createRouter({
    history,
    routes: [
        { path: '/', component: () => import('./views/Home.vue') },
        {
            path: '/doc',
            component: () => import('./views/Doc.vue'),
            children: [
                { path: '', redirect: '/doc/intro' },
                { path: 'switch', component: () => import('./components/SwitchDemo.vue') },
                { path: 'button', component: () => import('./components/ButtonDemo.vue') },
                { path: 'dialog', component: () => import('./components/DialogDemo.vue') },
                { path: 'tabs', component: () => import('./components/TabsDemo.vue') },
                { path: 'progress', component: () => import('./components/ProgressDemo.vue') },
                { path: 'intro', component: md(intro) },
                { path: 'get-started', component: md(getStarted) },
                { path: 'install', component: md(install) },
            ],
        },
    ],
});
