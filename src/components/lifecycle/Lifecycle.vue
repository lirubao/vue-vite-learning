<template>
  <div></div>
</template>

<script setup>
  import { defineProps, onBeforeMount, onMounted, onUnmounted, onUpdated } from 'vue'
  // 属性定义
  defineProps({})
  console.log('setup')

  onBeforeMount(() => {
    console.log('onBeforeMount')
  })
  onMounted(() => {
    console.log('mounted!')
  })
  onUpdated(() => {
    console.log('updated!')
  })
  onUnmounted(() => {
    console.log('unmounted!')
  })
</script>
<style lang="scss" scoped>
  /* @import url(); 引入css类 */
</style>
