import { createApp } from 'vue';
import App from './App.vue';
import './index.css';
import { createWebHashHistory, createRouter } from 'vue-router';
import MyApp from './components/MyApp.vue';
import MyApp2 from './components/MyApp2.vue';

const history = createWebHashHistory();
const router = createRouter({
    history,
    routes: [
        { path: '/', component: MyApp },
        { path: '/xxx', component: MyApp2 },
    ],
});

const app = createApp(App);
app.use(router);
app.mount('#app');
