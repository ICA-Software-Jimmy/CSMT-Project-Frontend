import { createRouter, createWebHistory } from 'vue-router';

import dashboard from "../src/components/Main/Home/dashboard.vue";
import Login from '../src/components/login/login.vue';
import MainPage from '../src/components/Main/MainPage.vue';

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {path:'/MainPage',name:'MainPage', component: MainPage}
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  });

export default router;