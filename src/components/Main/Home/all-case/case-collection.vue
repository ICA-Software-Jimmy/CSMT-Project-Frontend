<template>
    <div class="case-box">
        <div class="case-box-title">
            <label>社工評估 - 開案中</label>
        </div>
        <div class="case-table">
            <assessingCase />
        </div>
    </div>
    <div class="case-box">
        <div class="case-box-title">
            <label>社工評估 - 確定開案</label>
        </div>
        <div class="case-table">
            <openedCase />
        </div>
    </div>
    <div class="case-box">
        <div class="case-box-title">
            <label>社工評估 - 不開案</label>
        </div>
        <div class="case-table">
            <unopenedCase />
        </div>
    </div>
</template>
<script setup>
import assessingCase from './assessing-case.vue';
import openedCase from './opened-case.vue';
import unopenedCase from './unopened-case.vue';
</script>
<style scoped>
.case-box{
    margin-top: 32px;
    width: 100%;
    border-radius: 4px;
    border: 1.3px #855555 solid;
}
.case-table{
    padding: 32px
}

.case-box-title{
    text-align: center;
    background-color: #855555;
    color: white;
    padding: 8px;
    border-radius: 4px 4px 0 0;
}
.case-box-title label{
    font-size: 1.2rem;
}
</style>