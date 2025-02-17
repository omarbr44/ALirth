<script setup>
import { RouterView, useRoute } from 'vue-router';
import NavBar from './components/NavBar.vue';

const route = useRoute()
</script>

<template>
  <div>
    <NavBar v-if="!route.path.includes('stream-video')" />
    <RouterView />
  </div>
</template>

<style scoped>

</style>
