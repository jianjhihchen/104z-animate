<script setup>
import BaseHeader from '@/components/BaseHeader.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <BaseHeader></BaseHeader>
  <RouterView></RouterView>
</template>

<style lang="scss">
@use '@/assets/styles/base.scss';

#app {
  flex: 1 0 auto;
  display: flex;
}
</style>