<template>
  <div>{{ state.counter }}</div>
</template>

<script setup>
import {
  computed,
  defineProps,
  onMounted,
  onUnmounted,
  reactive
} from "@vue/runtime-core"
// 属性定义
const props = defineProps({
  counter: {
    type: Number,
    default: 0
  }
})

const state = reactive({
  counter: props.counter,
  doubleCounter: computed(() => state.counter * 2)
})

let timer
onMounted(() => {
  timer = setInterval(() => {
    state.counter++
  }, 2000)
})

onUnmounted(() => {
  clearInterval(timer)
})
</script>
