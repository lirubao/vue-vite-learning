<template>
  <!-- <div @click="$emit('click')"> -->
  <div @click="emit('myClick')">
    <h3>自定义事件</h3>
  </div>
</template>

<script setup>
  import { defineEmit, defineProps } from 'vue'
  // 属性定义
  defineProps({})
  //
  const emit = defineEmit(['myClick'])
  console.log(emit)
</script>
<style lang="scss" scoped>
  /* @import url(); 引入css类 */
</style>
