<template>
  <div style="display: none;"> 
      <router-link :to="`/login`">Login</router-link>
      <router-link :to="`/main`">Main</router-link>
  </div>
  <router-view />
</template>

<script setup>
import login from './components/login/login.vue';
</script>

<style scoped>

</style>