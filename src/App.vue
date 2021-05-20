<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <BasicTab />
  <BasicPage />
  <Getters />
  <Actions />
</template>

<script lang="ts">
import { defineComponent } from "vue"
import BasicTab from "comps/Tab/BasicTab.vue"
import BasicPage from "comps/Page/BasicPage.vue"
import Getters from "comps/Getters.vue"
import Actions from "comps/Actions.vue"
export default defineComponent({
  name: "App",
  components: {
    BasicTab,
    BasicPage,
    Getters,
    Actions
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
