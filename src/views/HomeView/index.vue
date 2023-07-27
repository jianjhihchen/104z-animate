<script setup>
import BaseScroller from '@/components/BaseScroller.vue'
import SectionPart1 from './components/SectionPart1.vue'
import SectionPart2 from './components/SectionPart2.vue'
import SectionPart3 from './components/SectionPart3.vue'
</script>

<template>
  <div class="HomeView">
    <BaseScroller>
      <SectionPart1></SectionPart1>
      <SectionPart2></SectionPart2>
      <SectionPart3></SectionPart3>
    </BaseScroller>
  </div>
</template>

<style lang="scss">
.HomeView {

}
</style>