<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <BasicTab :cur-idx="curIdx" @changeTab="changeTab" />
  <BasicPage :cur-idx="curIdx" />
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"
import BasicTab from "comps/Tab/BasicTab.vue"
import BasicPage from "comps/Page/BasicPage.vue"
export default defineComponent({
  name: "App",
  components: {
    BasicTab,
    BasicPage
  },
  setup() {
    const curIdx = ref<number>(0)
    const changeTab = (index: number): void => {
      curIdx.value = index
    }
    return {
      curIdx,
      changeTab
    }
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
