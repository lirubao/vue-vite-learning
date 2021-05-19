<template>
  <div>
    <a
      href="JavaScript:;"
      :class="[{ current: curIdx === 0 }]"
      @click="changeTab(0)"
      >选项1</a
    >
    <a
      href="JavaScript:;"
      :class="[{ current: curIdx === 1 }]"
      @click="changeTab(1)"
      >选项2</a
    >
    <a
      href="JavaScript:;"
      :class="[{ current: curIdx === 2 }]"
      @click="changeTab(2)"
      >选项3</a
    >
    <a
      href="JavaScript:;"
      :class="[{ current: curIdx === 3 }]"
      @click="changeTab(3)"
      >选项4</a
    >
  </div>
</template>

<script setup>
import { defineProps, useContext } from "vue"
// 属性定义
defineProps({
  curIdx: {
    type: Number,
    default: 0
  }
})
const ctx = useContext()
const changeTab = (index) => {
  ctx.emit("changeTab", index)
}
</script>
<style lang="scss" scoped>
/* @import url(); 引入css类 */
a {
  margin-right: 10px;
}
.current {
  text-decoration: none;
  color: #000;
}
</style>
