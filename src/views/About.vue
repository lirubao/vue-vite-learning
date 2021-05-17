<template>
  <div>
    About page
    <router-view />
    <button @click="backToDash">Dashboard</button>
  </div>
</template>

<script setup>
  import { defineProps, watch } from 'vue'
  import { onBeforeRouteLeave, useRoute, useRouter } from 'vue-router'
  // 属性定义
  defineProps({})
  // 获取路由的实例
  const router = useRouter()
  function backToDash() {
    router.push('/')
  }
  // route是响应式对象, 可监控变化
  // http://localhost:3000/#/about?foo=ff
  const route = useRoute()
  watch(
    () => route.query,
    (query) => console.log(query)
  )
  // 路由守卫
  onBeforeRouteLeave((to, from) => {
    const answer = window.confirm('你确定离开当前页面码?')
    if (!answer) {
      return false
    }
  })
</script>
<style lang="scss" scoped>
  /* @import url(); 引入css类 */
</style>
