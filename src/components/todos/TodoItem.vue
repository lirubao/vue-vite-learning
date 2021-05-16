<template>
  <li :class="{ completed: todo.completed, editing: todo === editedTodo }">
    <!-- 绑定完成状态 -->
    <div class="view">
      <input type="checkbox" v-model="todo.completed" />
      <label @dblclick="editTodo(todo)">{{ todo.title }}</label>
      <button @click="removeTodo(todo)">X</button>
    </div>
    <!-- 编辑待办 -->
    <EditTodo
      class="edit"
      v-model:todo-title="todo.title"
      v-todo-focus="todo === editedTodo"
      @blur="doneEdit()"
      @keyup.enter="doneEdit()"
      @keyup.escape="cancelTodo(todo)"
    />
  </li>
</template>

<script setup lang="ts">
  import { defineProps, reactive, defineEmit } from 'vue'
  import EditTodo from './EditTodo.vue'
  // 属性定义
  defineProps({
    todo: {
      type: Object,
      required: true,
    },
    editedTodo: Object,
    // 缓存编辑前的title
    beforEditCache: {
      type: String,
      default: '',
    },
  })
  const state = reactive({ beforEditCache: '' })
  const emit = defineEmit(['remove-todo', 'update:edited-todo'])

  // 事件派发
  const removeTodo = (todo) => {
    emit('remove-todo', todo)
  }

  const editTodo = (todo) => {
    state.beforEditCache = todo.title
    emit('update:edited-todo', todo)
  }
  const cancelTodo = (todo) => {
    todo.title = state.beforEditCache
    emit('update:edited-todo', null)
  }

  const doneEdit = () => {
    emit('update:edited-todo', null)
  }
</script>
<style lang="scss" scoped>
  /* @import url(); 引入css类 */
  .completed label {
    text-decoration: line-through;
  }
  .edit,
  .editing .view {
    display: none;
  }

  .view,
  .editing .edit {
    display: block;
  }
</style>
