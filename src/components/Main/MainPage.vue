<template>
    <div class="body-all">
        <div>
            <HeaderTop />
        </div>
        <br />
        <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item">目前位置</li>
                <li class="breadcrumb-item active" aria-current="page">個案總覽</li>
            </ol>
        </nav>
        <div>
            <router-view/>
        </div>
        <FooterBottom />
 
    </div>
</template>
<script setup>
import HeaderTop  from '../Main/Layout/header-top.vue';
import FooterBottom from '../Main/Layout/footer.vue';
</script>
<style scoped>
.body-all{
    width: 1080px;
    margin: 0px auto;
    max-width: 100%; 
}
</style>