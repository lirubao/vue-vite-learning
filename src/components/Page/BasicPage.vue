<template>
  <div>{{ data.content[curIdx] }}</div>
</template>

<script setup>
import { reactive, defineProps } from "vue"
defineProps({
  curIdx: {
    type: Number,
    default: 0
  }
})
const data = reactive({
  content: ["页面1", "页面2", "页面3", "页面4"]
})
</script>
<style lang="scss" scoped>
/* @import url(); 引入css类 */
</style>
