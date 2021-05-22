<template>
  <a-button type="primary">Primary</a-button>
  <a-button>Default</a-button>
  <a-button type="dashed">Dashed</a-button>
  <a-button type="danger">Danger</a-button>
  <a-config-provider :auto-insert-space-in-button="false">
    <a-button type="primary">按钮</a-button>
  </a-config-provider>
  <a-button type="primary">按钮</a-button>
  <a-button type="link">Link</a-button>
</template>

<script setup>
import { defineProps } from "vue"
// 属性定义
defineProps({})
</script>
<style lang="scss" scoped>
/* @import url(); 引入css类 */
</style>
