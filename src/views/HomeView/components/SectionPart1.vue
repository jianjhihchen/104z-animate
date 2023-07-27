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
  text1: {
    pos: ref(0),
    dom: ref(null)
  },
  text2: {
    pos: ref(0),
    dom: ref(null)
  },
  text3: {
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
  <SectionContainer class="Section1">
    <template #content>
      <div class="circle">
        <img
          :ref="element.img1.dom"
          src="@/assets/images/kv-circle01.png"
          :style="{ transform: `rotate(${element.img1.pos.value * 30}deg)` }"
        >
        <img
          :ref="element.img2.dom"
          src="@/assets/images/kv-circle02.png"
          :style="{ transform: `rotate(${element.img2.pos.value * -20}deg)` }"
        >
        <img
          :ref="element.img3.dom"           
          src="@/assets/images/kv-circle03.png"
          :style="{ transform: `rotate(${element.img3.pos.value * 20}deg)` }"
        >
      </div>
      <div class="borderCircle borderCircleLeft"></div>
      <div class="borderCircle borderCircleRight"></div>
      <div class="card">
        <figure>
          <img src="@/assets/images/mv1.png">
        </figure>
        <div
          :ref="element.text1.dom"
          class="text"
          :style="{ transform: `translateX(${element.text1.pos.value * -100 + 100}px)` }"
        >
          アイドル
        </div>
      </div>
      <div class="card">
        <figure>
          <img src="@/assets/images/mv2.jpg">
        </figure>
        <div
          :ref="element.text2.dom"
          class="text"
          :style="{ transform: `translateX(${element.text2.pos.value * -100 + 100}px)` }"
        >
          サークル
        </div>
      </div>
      <div class="card">
        <figure>
          <img src="@/assets/images/mv3.jpg">
        </figure>
        <div
          :ref="element.text3.dom"
          class="text"
          :style="{ transform: `translateX(${element.text3.pos.value * -100 + 100}px)` }"
        >
          おもかげ
        </div>
      </div>
    </template>
  </SectionContainer>
</template>

<style lang="scss">
.Section1 {
  .circle {
    position: absolute;
    top: 50%;
    right: 0%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1500px;
    height: 1500px;
    opacity: .3;
    filter: hue-rotate(190deg);

    img {
      position: absolute;

      &:nth-of-type(1) {
        max-width: 100%;
        opacity: .3;
      }

      &:nth-of-type(2) {
        max-width: 65%;
        opacity: .5;
      }

      &:nth-of-type(3) {
        max-width: 30%;
        opacity: .7;
      }
    }
  }

  .borderCircle {
    position: absolute;
    filter: blur(100px);
    background-image: linear-gradient(0deg, #a18cd1 0%, #fbc2eb 100%);

    &.borderCircleLeft {
      top: -20vw;
      left: -20vw;
      width: 70vw;
      height: 70vw;
      opacity: .7;
      animation: animate-morph 15s linear infinite alternate, animate-spin 20s linear infinite;
      will-change: border-radius,transform;
      transform-origin: 55% 55%;
    }

    &.borderCircleRight {
      bottom: 0;
      right: -10vw;
      width: 70vw;
      height: 70vw;
      animation: animate-morph 10s linear infinite alternate, animate-spin 26s linear infinite reverse;
      transform-origin: 20% 20%;
    }
  }

  .card {
    position: relative;
    min-width: 700px;
    z-index: 1;
    cursor: pointer;

    + .card {
      margin-left: 8vw;
    }

    &:hover {
      > figure {
        box-shadow: 10px 30px 30px 0 rgba(#000000, .3);

        > img {
          width: 105%;
          height: 105%;
        }
      }
    }

    &:nth-of-type(odd) {
      margin-top: -12vh;
    }

    &:nth-of-type(even) {
      margin-top: 12vh;
    }

    > figure {
      position: relative;
      overflow: hidden;
      padding-top: 56.25%;
      border-radius: 10px;
      box-shadow: 28px 40px 40px 0 rgba(#000000, .2);
      transition: all .8s cubic-bezier(.445, .05, .55, .95);

      > img {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        transition: all 1.5s cubic-bezier(.445, .05, .55, .95);
        transform: translate3d(-50%, -50%, 0);
      }
    }

    .text {
      position: absolute;
      bottom: -20px;
      right: -20px;
      font-size: 60px;
      color: #ffffff;
      letter-spacing: 2px;
    }
  }
}

@keyframes animate-morph {
  0% {
    border-radius: 40% 60% 60% 40%/70% 30%;
  }

  to {
    border-radius: 40% 60%;
  }
}

@keyframes animate-spin {
  to {
    transform: rotate(1turn);
  }
}
</style>