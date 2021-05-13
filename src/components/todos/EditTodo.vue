<template>
  <input type="text" :value="todoTitle" @input="onInputChange" v-bind="$attrs" />
</template>

<script setup>
  import { defineProps, getCurrentInstance } from 'vue'
  // 属性定义
  defineProps({
    todoTitle: {
      type: String,
      default: '',
    },
  })
  // getCurrentInstance()能拿到组件实例this,用来执行.emit()
  const instance = getCurrentInstance()
  function onInputChange(e) {
    instance.emit('update:todo-title', e.target.value)
  }
</script>
<style lang="scss" scoped>
  /* @import url(); 引入css类 */
</style>
