<template>
  <div>{{ title }}</div>
  <Test @myclick="onmyclick" ref="test" />
</template>

<script setup>
import { defineProps, ref } from "@vue/runtime-core"
import Test from "./Test.vue"

defineProps({
  title: String
})

// 获取Test组件中的expose暴露的属性或方法
const test = ref(null)

const onmyclick = () => {
  console.log("Test vue emit myclick")
  test.value.someMethod()
}
</script>
<style scoped>
/* @import url(); 引入css类 */
</style>
