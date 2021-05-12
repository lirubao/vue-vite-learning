<template>
  <div @click="$emit('update:modelValue', modelValue + 1)"> counter: {{ modelValue }} </div>
</template>

<script setup>
  import { defineProps } from 'vue'
  // 属性定义
  defineProps({
    modelValue: {
      type: Number,
      default: 0,
    },
  })
</script>
<style lang="scss" scoped>
  /* @import url(); 引入css类 */
</style>
