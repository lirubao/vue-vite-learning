<template>
  <div :class="{ active: isActive }" @click="navigate">{{ route.name }}</div>
</template>

<script setup>
  import { defineProps } from 'vue'
  import { RouterLink, useLink } from 'vue-router'
  // 属性定义
  const props = defineProps({
    ...RouterLink.props,
    inActiveClass: String,
  })
  // 获取RouterLink内部属性和方法
  const { route, href, isActive, isExactActive, navigate } = useLink(props)
  console.log(route, href, isActive, isExactActive, navigate)
</script>
<style lang="scss" scoped>
  /* @import url(); 引入css类 */
  .active {
    background-color: #3fb983;
  }
</style>
