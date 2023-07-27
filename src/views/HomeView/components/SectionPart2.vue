<script setup>
import {
  onMounted, watch, ref, computed
} from 'vue'
import SectionContainer from './SectionContainer.vue'
import { useScroll } from '@/stores/useScroll'
import { storeToRefs } from 'pinia'

const storeScroll = useScroll()
const {
  fixedX, x 
} = storeToRefs(storeScroll)

let element = {
  trigger1: {
    pos: ref(0),
    dom: ref(null)
  }
}

const init = () => {
  for (let prop in element) {
    const target = element[prop]
    target.pos.value = storeScroll.CHECK_CONTENT(target.dom.value, true)
  }
}

onMounted(() => {
  init()
})

watch(fixedX, () => {
  init()
})

const styleObj = computed(() => {
  if (!element.trigger1.dom.value) return {}
  const {
    left, top, width: elementWidth
  } = element.trigger1.dom.value.getBoundingClientRect()
  // const elementWidth = right - left

  if (element.trigger1.pos.value > 0 
          && element.trigger1.pos.value < 1) {
    return {
      position: 'fixed',
      top: top,
      left: `${ x.value + (window.innerWidth / 2) - elementWidth / 2 }px` 
    }
  } else if (element.trigger1.pos.value >= 1) {
    const {
      left: leftSection 
    } = document.querySelector('.Section2').getBoundingClientRect()

    return {
      position: 'absolute',
      left: `${ leftSection + x.value - (left + x.value - (window.innerWidth / 2) - elementWidth / 2) + 350 }px`
    }
  }
  return {}
})
</script>

<template>
  <SectionContainer
    class="Section2"
    title="01"
    name="うた"
  >
    <template #content>
      <ul
        :ref="element.trigger1.dom"
        class="list"
      >
        <li :style="styleObj">
          <div :style="{ transform: `translateY(-${element.trigger1.pos.value / 0.2 * 80 - 80}px)` }">
            <div class="text">
              無敵の笑顔で荒らすメディア
            </div>
            <div class="text">
              知りたいその秘密ミステリアス
            </div>
            <div class="text">
              抜けてるとこさえ彼女のエリア
            </div>
            <div class="text">
              完璧で嘘つきな君は
            </div>
            <div class="text">
              天才的なアイドル様
            </div>
          </div>
        </li>
      </ul>
    </template>
  </SectionContainer>
</template>

<style lang="scss">
.Section2 {
  width: 2000px;
  background-size: cover;
  background-image: url('@/assets/images/trianglify-lowres.png');
  box-sizing: content-box;

  &.Section {
    padding-right: 25vw;
  }

  .list {
    position: relative;
    display: flex;
    align-items: center;
    width: 800px;

    > li {
      position: relative;
      display: flex;
      overflow: hidden;
      width: 800px;
      height: 80px;
      font-size: 48px;
      font-weight: bold;
      text-align: center;
      line-height: 80px;
      letter-spacing: 5px;
      flex-direction: column;
      flex-shrink: 0;
      color: #ffffff;
    }
  }
}
</style>