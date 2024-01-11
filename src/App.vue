<script setup lang="ts">
import { ref } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import { getMaterialPath, runScript } from "./webview/service";

const scriptRes = ref("");
const materialPath = ref("");

const handleRunScript = () => {
  runScript<string>({
    materialPath: localStorage.getItem("materialPath") || "",
    script: "testScript",
    params: "",
  }).then((res) => {
    scriptRes.value = res;
  });
};

const handleGetMaterialPath = () => {
  getMaterialPath().then((res) => {
    materialPath.value = res;
  });
};
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
    @click="handleRunScript"
  >
    执行脚本
  </button>
  <div className="mt-4" v-if="scriptRes">脚本结果：{{ scriptRes }}</div>
  <button
    class="mt-4 flex rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
    @click="handleGetMaterialPath"
  >
    getMaterialPath
  </button>
  <div className="mt-4" v-if="materialPath">
    materialPath：{{ materialPath }}
  </div>
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
