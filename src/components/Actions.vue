<template>
  <div></div>
</template>

<script setup>
import { defineProps, onMounted } from "vue"
import { useStore } from "vuex"
// 属性定义
defineProps({})
const store = useStore()
// 组件挂载完毕
onMounted(() => {
  store.dispatch("getData", {
    key: "ae8a077b30fc33c2b0a3903250836011",
    type: "xijia"
  })
})
</script>
<style lang="scss" scoped>
/* @import url(); 引入css类 */
</style>
