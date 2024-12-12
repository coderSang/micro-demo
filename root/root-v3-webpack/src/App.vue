<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <router-link to="/page-1">page-1</router-link> |
  <router-link to="/page-2">page-2</router-link>
  <RouterView></RouterView>
</template>

<style scoped></style>
