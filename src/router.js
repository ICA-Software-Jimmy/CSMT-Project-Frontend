import { createRouter, createWebHistory } from 'vue-router';

import Login from '../src/components/login/login.vue';
import MainPage from './components/Main/MainPage.vue';
import AccountManagement from '../src/components/Main/Home/account-management/account-management.vue';
import ReportAll from '../src/components/Main/Home/report-management/report-all.vue';
import ServiceRecord from '../src/components/Main/Home/service-record/service-record.vue';
import Dashboard from "../src/components/Main/Home/dashboard/dashboard.vue";
import UnassignedCasesCollection from './components/Main/Home/unassigned-cases/unassigned-case-collection.vue';
import AllCase from './components/Main/Home/all-case/case-collection.vue'


const routes = [
    {
        path: '/',
        name: '/',
        component: Login
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path:'/MainPage',
        name:'MainPage', 
        component: MainPage,
        children: [
            {
                path: 'AllCase',
                name: 'AllCase',
                component:AllCase
            },
            {
                path: 'AccountManagement',
                name: 'AccountManagement',
                component:AccountManagement
            },
            {
                path: 'ReportAll',
                name: 'ReportAll',
                component:ReportAll
            },
            {
                path: 'ServiceRecord',
                name: 'ServiceRecord',
                component:ServiceRecord
            },
            {
                path: 'Dashboard',
                name: 'Dashboard',
                component:Dashboard
            },
            {
                path: 'UnassignedCasesCollection',
                name: 'UnassignedCasesCollection',
                component:UnassignedCasesCollection

            }
        ]
        
    }

]

// 創建路由器實例
const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes, 
});


export default router; // 將 router 匯出以便其他文件使用