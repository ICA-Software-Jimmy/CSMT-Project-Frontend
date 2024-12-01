import { createRouter, createWebHistory } from "vue-router";
import login from './components/login/login.vue';
import main from './components/Main/MainPage.vue';
import case_all from './components/Main/Home/case-all.vue';
import account_management from './components/Main/Home/account-management.vue';
import dashboard from './components/Main/Home/dashboard.vue';
import service_record from './components/Main/Home/service-record.vue';

const routes = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        name: 'login',
        component: login
    },
    {
        path: '/main',
        name: 'main',
        component: main,
        children:[
            {
                path: '/main/cases',
                component: case_all
            },
            {
                path:'/main/account',
                component: account_management
            },
            {
                path:'/main/dashboard',
                component: dashboard
            },
            {
                path:'/main/service',
                component: service_record
            }
        ]
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes // Changed from routers to routes
});

export default router;
