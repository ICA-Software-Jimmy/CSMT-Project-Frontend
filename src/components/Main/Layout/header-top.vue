<template>
    <div class="header-all">
        <div class="container">
            <svg width="100%" height="60px">
                    <text x="25%" y="70%" fill="white" class="logo">個案管理系統
                    </text>
                </svg>
        </div>
        <div class="link-items">
            <router-link :to="`/main/dashboard`" class="link-item">數據看板</router-link>
            <router-link :to="`/main/cases`" class="link-item">個案總覽</router-link>
            <router-link :to="`/main/service`" class="link-item">服務清冊</router-link>
            <router-link :to="`/main/account`" class="link-item">使用者管理</router-link>
            <a><i class="bi bi-person-circle"></i> 吳傑名</a>
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue';

const item = ref([
    {"name": "個案總覽", "component":"case-all"}
])
</script>

<style>
.logo{
    font-weight:normal;
    font-size: 2.5rem;
    text-anchor:middle;
    stroke:white;
    stroke-width: 1;
    animation:show 6s ease-in-out infinite alternate;
    font-family: 'Dancing Script', cursive;
    border-radius: 10px;
}
@keyframes show{
    0% ,10% {
        fill: transparent;
        stroke-dasharray: 0% 100%;
    }
    70% {
        stroke-dasharray: 100% 0%;
        stroke-opacity: 1;
        fill: transparent;
    }
    80%, 100%{
        stroke-opacity: 0;
        fill:white;
    }
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
    margin-right: 16px;
}
.link-item {
  color: white;
  text-decoration: none;
}

.link-item:hover{
    color: black;
}



@media (max-width: 768px) {

}

</style>