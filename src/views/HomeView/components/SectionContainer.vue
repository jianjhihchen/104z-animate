<script setup>
defineProps({
  title: {
    type: String,
    default: ''
  },
  name: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <section class="Section">
    <header
      v-if="title && name"
      class="header"
    >
      <span>{{ title }}</span>
      <h2>{{ name }}</h2>
    </header>
    <div class="content">
      <slot name="content"></slot>
    </div>
  </section>
</template>

<style lang="scss">
.Section {
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 350px;
  height: 100%;
  --color: #000000;
  --color-rgb: 0, 0, 0;

  > header {
    position: absolute;
    top: 25%;
    left: 100px;
    z-index: 1;

    > h2 {
      font-size: 70px;
      letter-spacing: 2px;
      writing-mode: vertical-rl;
      color: var(--color);

      &::before {
        content: '';
        position: absolute;
        top: calc(100% + 20px);
        left: calc(50% - 10px);
        width: 1px;
        height: 100vh;
        background-color: rgba(var(--color-rgb), .2);
      }
    }

    > span {
      position: absolute;
      top: -30px;
      left: 50%;
      color: var(--color);
      letter-spacing: 1px;
      transform: translate3d(-50%, 0, 0);
    }
  }

  > .content {
    display: flex;
    align-items: center;
    min-width: 500px;
  }
}
</style>