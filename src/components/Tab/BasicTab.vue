<template>
  <div>
    <a
      href="JavaScript:;"
      :class="[{ current: data.curIdx === 0 }]"
      @click="setCurIdx(0)"
      >选项1</a
    >
    <a
      href="JavaScript:;"
      :class="[{ current: data.curIdx === 1 }]"
      @click="setCurIdx(1)"
      >选项2</a
    >
    <a
      href="JavaScript:;"
      :class="[{ current: data.curIdx === 2 }]"
      @click="setCurIdx(2)"
      >选项3</a
    >
    <a
      href="JavaScript:;"
      :class="[{ current: data.curIdx === 3 }]"
      @click="setCurIdx(3)"
      >选项4</a
    >
  </div>
</template>

<script setup>
import { defineProps, useContext, reactive, computed } from "vue"
import { mapMutations, mapState, useStore } from "vuex"

const ctx = useContext()
const store = useStore()
//
const data = reactive({
  // 获取state中的值
  curIdx: computed(() => store.state.curIdx)
})
// 获取mutations中的方法
const setCurIdx = (index) => store.commit("setCurIdx", index)
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
