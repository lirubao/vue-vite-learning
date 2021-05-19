<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <BasicTab />
  <BasicPage />
</template>

<script lang="ts">
import { defineComponent } from "vue"
import BasicTab from "comps/Tab/BasicTab.vue"
import BasicPage from "comps/Page/BasicPage.vue"
export default defineComponent({
  name: "App",
  components: {
    BasicTab,
    BasicPage
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
