<template>
  <main>
    <RouterView />
  </main>
</template>

<script setup>
import { RouterView } from "vue-router";

</script>

<style scoped>

@font-face {
  font-family: 'KCC-Hanbit';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/2403-2@1.0/KCC-Hanbit.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
}

.body *{
  font-family: 'KCC-Hanbit', sans-serif;
}

</style>