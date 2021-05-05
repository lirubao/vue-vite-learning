<template>
  <div>
    <button @click="modalOpen = true">弹出一个模态窗口</button>

    <teleport to="body">
      <div v-if="modalOpen" class="modal">
        <div>
          这是一个弹窗
          <button @click="modalOpen = false">关闭</button>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script setup>
import { defineProps } from "vue"
// 属性定义
defineProps({
  modalOpen: {
    type: Boolean,
    default: true
  }
})
</script>
<style lang="scss" scoped>
/* @import url(); 引入css类 */
.modal {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    width: 300px;
    height: 300px;
    padding: 5px;
  }
}
</style>
