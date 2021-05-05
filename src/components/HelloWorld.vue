<template>
  <h1>{{ msg }}</h1>
  <SetupLearn title="setup learn" />

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Docs
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
  </p>

  <button @click="data.count++">count is: {{ data.count }}</button>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue"
import SetupLearn from "./setup/SetupLearn.vue"
export default defineComponent({
  name: "HelloWorld",
  components: { SetupLearn },
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  setup: () => {
    const data = reactive({
      count: 0
    })
    return { data }
  }
})
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
