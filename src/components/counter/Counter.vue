<template>
  <div>{{ counter }} | {{ doubleCounter }}</div>
  <p ref="desc">desc</p>
</template>

<script setup>
import { defineProps, onMounted, onUnmounted, ref, watch } from "vue"
import { useContent } from "./"
// 属性定义
const props = defineProps({
  counter: {
    type: Number,
    default: 0
  }
})

const { counter, doubleCounter } = useContent(props)

// 使用界面中的元素引用
const desc = ref(null)
// 直接侦听ref
watch(counter, (val, oldVal) => {
  const p = desc.value
  p.textContent = `counter change from ${oldVal} to ${val}`
})
</script>
