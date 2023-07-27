<script setup>
import {
  onMounted, watch, ref
} from 'vue'
import SectionContainer from './SectionContainer.vue'
import { useScroll } from '@/stores/useScroll'
import { storeToRefs } from 'pinia'

const storeScroll = useScroll()
const {
  fixedX
} = storeToRefs(storeScroll)

let element = {
  bg1: {
    pos: ref(0),
    dom: ref(null)
  },
  bg2: {
    pos: ref(0),
    dom: ref(null)
  },
  img1: {
    pos: ref(0),
    dom: ref(null)
  },
  img2: {
    pos: ref(0),
    dom: ref(null)
  },
  img3: {
    pos: ref(0),
    dom: ref(null)
  }
}

const init = () => {
  for (let prop in element) {
    const target = element[prop]
    target.pos.value = storeScroll.CHECK_CONTENT(target.dom.value)
  }
}

onMounted(() => {
  init()
})

watch(fixedX, () => {
  init()
})

</script>

<template>
  <SectionContainer
    class="Section3"
    title="02"
    name="アルバム"
  >
    <template #content>
      <div class="circle circle1">
        <div
          :ref="element.bg1.dom"
          :style="{ 'backgroundPosition': `0px ${element.bg1.pos.value * -500}px` }"
        ></div>
      </div>
      <div class="circle circle2">
        <div
          :ref="element.bg2.dom"
          :style="{ 'backgroundPosition': `0px ${element.bg1.pos.value * -500}px` }"
        ></div>
      </div>
      <div class="card">
        <figure
          :ref="element.img1.dom"
          :style="{ 'backgroundColor': `hsl(${element.img1.pos.value * 140 - 200}, 45%, 51%)`, 
                    filter: `hue-rotate(${element.img1.pos.value * 100}deg)` }"
        >
          <img src="@/assets/images/cover1.png">
        </figure>
        <figcaption>
          <h3>アイドル</h3>
          <span>2021.03</span>
        </figcaption>
      </div>
      <div class="card">
        <figure
          :ref="element.img2.dom"
          :style="{ 'backgroundColor': `hsl(${element.img2.pos.value * 140 - 200}, 45%, 51%)`,
                    filter: `hue-rotate(${element.img1.pos.value * 60}deg)` }"
        >
          <img src="@/assets/images/cover2.jpg">
        </figure>
        <figcaption>
          <h3>祝福</h3>
          <span>2022.11</span>
        </figcaption>
      </div>
      <div class="card">
        <figure
          :ref="element.img3.dom"
          :style="{ 'backgroundColor': `hsl(${element.img3.pos.value * 140 - 200}, 45%, 51%)`,
                    filter: `hue-rotate(${element.img1.pos.value * 10}deg)` }"
        >
          <img src="@/assets/images/cover3.webp">
        </figure>
        <figcaption>
          <h3>怪物</h3>
          <span>2021.03</span>
        </figcaption>
      </div>
    </template>
  </SectionContainer>
</template>

<style lang="scss">
.Section3 {
  background-image: linear-gradient(0deg, #e46695 0%, #fbc2eb 100%);
  position: relative;
  overflow: hidden;

  > header {
    --color: #724da7;
    --color-rgb: 92, 56, 143;
  }

  .circle {
    position: absolute;

    > div {
      position: absolute;
      inset: 0;
      background-size: 70px 70px;
      background-image: radial-gradient(#ffffff 10%, rgba(0, 0, 0, 0) 15%);
      opacity: .5;
    }

    &.circle1 {
      top: -30%;
      left: 0;

      > div {
        width: 50vw;
        height: 150vh;
        -webkit-mask-image: linear-gradient(180deg, transparent 50%, #000000 100%);
        transform: rotate(45deg);
      }
    }

    &.circle2 {
      top: 0%;
      right: 25%;

      > div {
        width: 620px;
        height: 100vh;
        -webkit-mask-image: linear-gradient(0deg, transparent 50%, #000000 100%);
      }
    }
  }

  .card {
    padding: 0 50px;
    width: calc(40vh + 100px);

    figure {
      position: relative;
      overflow: hidden;
      padding-top: 100%;
      background-color: #724da7;
      border-radius: 10px;
      box-shadow: 20px 30px 35px 0 rgba(#000000, .15);

      > img {
        position: absolute;
        width: 100%;
        height: 100%;
        inset: 0;
        object-fit: cover;
      }
    }

    figcaption {
      margin-top: 40px;
      letter-spacing: 1px;

      h3 {
        margin-bottom: 4px;
        font-size: 24px;
        line-height: 35px;
        color: #ffffff;
      }

      span {
        font-size: 16px;
        line-height: 25px;
        color: #ffffff;
        opacity: .7;
      }
    }
  }
}
</style>