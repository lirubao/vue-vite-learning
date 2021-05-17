<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <!-- <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" /> -->
  <!-- <Counter :counter="2" /> -->
  <!-- <ModelButton /> -->
  <!-- <EmitsOption @my-click="onClick" /> -->
  <!-- v-model的使用 -->
  <!-- <VModel v-model="data.counter" /> -->
  <!-- <Lifecycle /> -->
  <!-- <Todos /> -->
  <router-view />
</template>

<script setup>
  import { defineComponent, reactive } from 'vue'
  // import {
  // HelloWorld,
  // Counter ,
  // ModelButton,
  // EmitsOption,
  // VModel,
  // Lifecycle,
  // Todos,
  // } from './components'
  // 动态数据
  const data = reactive({
    counter: 1,
  })

  const onClick = () => {
    console.log('emits click')
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
