<script setup>

</script>

<template>
  <div class="BaseHeader">
    <h1>Logo</h1>
    <nav>
      <ul>
        <li
          v-for="n in 5"
          :key="`item${n}`"
        >
          <a href="javascript:;">
            Item{{ n }}
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style lang="scss">
.BaseHeader {
  position: fixed;
  top: 40px;
  left: 0;
  display: flex;
  padding: 0 100px 0 50px;
  width: 100%;
  height: 50px;
  mix-blend-mode: difference;
  z-index: 100;

  h1 {
    width: 100px;
    color: #5c388f;
  }

  nav {
    flex: 1 1 auto;
    width: 100%;

    ul {
      display: flex;
      height: 100%;
    }

    li {
      display: flex;
      align-items: center;
      padding: 0 20px;
    }

    a {
      display: block;
      font-size: 18px;
      font-weight: bold;
      color: transparent;
      -webkit-background-clip: text;
      transition: transform .3s;
      line-height: 50px;
      background-image: linear-gradient(45deg, #a18cd1 0%, #fbc2eb 100%);

      &:hover {
        color: #724da7;
        transform: translateX(3px);
      }
    }
  }
}
</style>