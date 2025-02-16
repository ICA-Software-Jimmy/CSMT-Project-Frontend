<template>
    <div class="footer-all">
        <div>&copy; Copyright:汐止少年福利服務中心 | Jimmy ICA Software Development</div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.footer-all {
    display: flex;
    flex-direction: row;
    justify-content: center; /* Center content horizontally */
    align-items: center; /* Center content vertically */
    margin-top: 20px;
    background: #9B9B93;  /* fallback for old browsers */
    color: white;
    height: 50px;
    border-radius: 5px;
    width: 100%;
    padding: 20px; 

}

@media (max-width: 768px) {
    .footer-all {
        max-width: 100%;
    }
    
}
</style>