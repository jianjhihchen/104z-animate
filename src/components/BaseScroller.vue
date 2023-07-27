<script setup>
import {
  ref, reactive, computed, onMounted, onBeforeUnmount, watch
} from 'vue'
import { useWindowSize } from '@vueuse/core'
import { useScroll } from '@/stores/useScroll'

const { width } = useWindowSize()
const storeScroll = useScroll()

const BaseScroller = ref(null)
const config = reactive({
  scrollX: 0,
  wheelSpeed: 0,
  touchStartX: 0,
  contentWidth: 0
})

const styleObj = computed(() => {
  return {
    transform: `translateX(${ config.scrollX * -1 }px)`
  }
})

const onWheel = (e) => {
  let speed = e.wheelDelta % 120 === 0 
    ? e.wheelDelta / 120
    : e.wheelDelta / 12

  config.wheelSpeed = speed * 5
}

const onTouchStart = (e) => {
  config.touchStartX = e.touches[0].pageX
}

const onTouchMove = (e) => {
  config.wheelSpeed = e.touches[0].pageX - config.touchStartX
  config.touchStartX = e.touches[0].pageX
}

const render = () => {
  config.wheelSpeed += (0 - config.wheelSpeed) * 0.05
  config.scrollX -= config.wheelSpeed

  if (config.scrollX < 0) config.scrollX = 0
  if (config.scrollX > config.contentWidth - width.value) {
    config.scrollX = config.contentWidth - width.value
  }

  storeScroll.x = config.scrollX 

  window.requestAnimationFrame(render)
}

const init = () => {
  config.contentWidth = BaseScroller.value.clientWidth
}

watch(width, () => {
  init()
})

onMounted(() => {
  window.addEventListener('wheel', onWheel)
  document.addEventListener('touchstart', onTouchStart)
  document.addEventListener('touchmove', onTouchMove)

  render()
  init()
})

onBeforeUnmount(() => {
  window.removeEventListener('wheel', onWheel)
  document.removeEventListener('touchstart', onTouchStart)
  document.addEventListener('touchmove', onTouchMove)
})
</script>

<template>
  <div
    ref="BaseScroller"
    class="BaseScroller"
    :style="styleObj"
  >
    <slot></slot>
  </div>
</template>

<style lang="scss">
.BaseScroller {
  display: flex;
  height: 100%;
}
</style>