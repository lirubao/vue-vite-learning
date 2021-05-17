<template>
  <ul>
    <li>
      <!-- <router-link to="/">Dashboard</router-link> -->
      <NavLink to="/" />
    </li>
    <li>
      <router-link to="/about">About</router-link>
    </li>
    <li>
      <router-link to="/todos">Todos</router-link>
    </li>
  </ul>
</template>

<script setup>
  import { defineProps } from 'vue'
  import NavLink from './NavLink.vue'
  // 属性定义
  defineProps({})
</script>
<style lang="scss" scoped>
  /* @import url(); 引入css类 */
</style>
