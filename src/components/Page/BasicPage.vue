<template>
  <div>{{ data.content[data.curIdx] }}</div>
</template>

<script setup>
import { reactive, defineProps, computed } from "vue"
import { useStore } from "vuex"

const store = useStore()
const data = reactive({
  content: ["页面1", "页面2", "页面3", "页面4"],
  // 获取state中的值
  curIdx: computed(() => store.state.curIdx)
})
</script>
<style lang="scss" scoped>
/* @import url(); 引入css类 */
</style>
