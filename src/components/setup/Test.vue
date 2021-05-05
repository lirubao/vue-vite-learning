<template>
  <button @click="state.count++">count is: {{ state.count }}</button>
  <button @click="onclick">myclick</button>
</template>

<script setup>
import {
  defineEmit,
  defineProps,
  reactive,
  useContext
} from "@vue/runtime-core"
// 1.属性定义
const props = defineProps({
  count: Number
})
// 2.响应数据 state
const state = reactive({
  count: 0
})
// 3.获取上下文
const ctx = useContext()

ctx.expose({
  // 向外暴露someMethod()方法
  someMethod() {
    console.log("向外暴露someMethod()方法")
  }
})

// 4.事件派发定义
const emit = defineEmit(["myclick"])
const onclick = () => {
  // 方式1:
  // emit("myclick")
  // 方式2:
  ctx.emit("myclick")
}
</script>
<style lang="scss" scoped>
/* @import url(); 引入css类 */
</style>
