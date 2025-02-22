<template>
    <CaseRegister />
    <div class="case-box">
        <div class="case-box-title">
            <label>分布自行收案</label>
        </div>
        <div class="case-table">
            <UnassignedCases />
        </div>
    </div>
    <div class="case-box">
        <div class="case-box-title">
            <label>政府派案</label>
        </div>
        <div class="case-table">
            <GovernmentAssignedCase />
        </div>
    </div>

</template>
<script setup>
import UnassignedCases from './unassigned-cases.vue';
import CaseRegister from "./case-register.vue";
import GovernmentAssignedCase from './government-assigned-case.vue';
</script>
<style scoped>
.case-box{
    margin-top: 32px;
    width: 100%;
    border-radius: 4px;
    border: 1.3px #7e4e2e solid;
}
.case-table{
    padding: 32px
}

.case-box-title{
    text-align: center;
    background-color: #7e4e2e;
    color: white;
    padding: 8px;
    border-radius: 4px 4px 0 0;
}
.case-box-title label{
    font-size: 1.2rem;
}

</style>