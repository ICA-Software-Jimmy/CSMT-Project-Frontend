<template>
    <div class="header-all">
        <div class="container">
            <router-link :to="`/MainPage/Dashboard`" class="logo">少年個案管理系統</router-link>
        </div>
        <div class="link-items">
            <router-link :to="`/MainPage/Dashboard`" class="link-item">數據看板</router-link>
            <router-link :to="`/MainPage/AllCase`" class="link-item">個案總覽</router-link>
            <router-link :to="`/MainPage/UnassignedCasesCollection`" class="link-item">派案首頁</router-link>
            <router-link :to="`/MainPage/ServiceRecord`" class="link-item">服務清冊</router-link>
            <router-link :to="`/MainPage/ReportAll`" class="link-item">報表下載</router-link>
            <router-link :to="`/MainPage/AccountManagement`" class="link-item">使用者管理</router-link>
            <a><i class="bi bi-person-circle"></i> {{ userName  }}</a>
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue';

const userName = ref('');
const item = ref([
    {"name": "個案總覽", "component":"case-all"}
])


userName.value = sessionStorage.getItem("userName") || "訪客";

</script>

<style>
.container{
    margin-left: 16px;
}
.logo{
    font-weight:normal;
    font-size: 2.5rem;
    stroke-width: 1;
    margin-left: 16px;
    color: white;
    text-decoration: none;
}
.header-all {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 0;
    background: #9B9B93; 
    color: white;
    height: 80px;
    width: 100%;
    border-radius: 5px; 
    align-items:center;
    text-anchor:middle;
}
.link-items{
    display: flex;
    flex-direction: row;
    text-anchor:middle;
    align-items:center;
    width:100%;
    justify-content: space-around;
    font-size: 1.2rem;
    color:white;
    margin-right: 32px;
}
.link-item {
  color: white;
  text-decoration: none;
}

.link-item:hover{
    color: black;
}

</style>