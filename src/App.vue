<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
  <div
    class="fw100 animate-bounce-alt animate-count-infinite animate-duration-1s text-5xl"
  >
    UnoCSS
  </div>
  <button
    class="mt-4 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
  >
    执行脚本
  </button>
  <!-- {scriptRes &&
  <div className="mt-4">脚本结果：{scriptRes}</div>
  } -->
  <button
    class="mt-4 flex rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
  >
    getMaterialPath
  </button>
  <!-- {materialPath &&
  <div className="mt-4">materialPath：{materialPath}</div> -->
  }
</template>

<style lang="scss" scoped>
.logo {
  will-change: filter;
  height: 6em;
  padding: 1.5em;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
