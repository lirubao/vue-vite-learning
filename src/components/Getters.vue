<template>
  <h2>我的信息: {{ data.info }}</h2>
</template>

<script setup>
import { onMounted, reactive } from "vue"
import { useStore } from "vuex"
const data = reactive({
  info: ""
})
const store = useStore()
onMounted(() => {
  data.info = store.getters.getInfo
})
</script>
<style lang="scss" scoped>
/* @import url(); 引入css类 */
</style>
