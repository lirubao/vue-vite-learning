<template>
  <div class="todo">
    <!-- 新增 -->
    <input
      type="text"
      v-model="data.newTodo"
      @keyup.enter="addTodo"
      autofocus
      placeholder="新增今日待办"
      autocomplete="off"
    />
    <!-- 列表 -->
    <ul>
      <li
        v-for="todo in data.todos"
        :key="todo.id"
        :class="{ completed: todo.completed, editing: todo === data.editedTodo }"
      >
        <!-- 绑定完成状态 -->
        <div class="view">
          <input type="checkbox" v-model="todo.completed" />
          <label @dblclick="editTodo(todo)">{{ todo.title }}</label>
          <button @click="removeTodo(todo)">X</button>
        </div>
        <!-- 编辑待办 -->
        <input
          type="text"
          class="edit"
          v-model="todo.title"
          v-todo-focus="todo === editedTodo"
          @blur="doneEdit()"
          @keyup.enter="doneEdit()"
          @keyup.escape="cancelTodo(todo)"
        />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
  import { defineProps, reactive } from 'vue'
  import type { Todo } from './'

  const todos: Todo[] = []
  const nullTodo: Todo = {
    id: 0,
    title: '',
    completed: false,
  }
  // 属性定义
  defineProps({})
  const data = reactive({
    newTodo: '',
    todos: todos,
    beforEditCache: '',
    editedTodo: nullTodo, // 正在编辑的todo
  })

  const addTodo = () => {
    data.todos.push({
      id: data.todos.length + 1,
      title: data.newTodo,
      completed: false,
    })
    data.newTodo = ''
  }

  const removeTodo = (todo: Todo) => {
    data.todos.splice(data.todos.indexOf(todo), 1)
  }

  const editTodo = (todo: Todo) => {
    data.beforEditCache = todo.title
    data.editedTodo = todo
  }
  const cancelTodo = (todo: Todo) => {
    todo.title = data.beforEditCache
    data.editedTodo = nullTodo
  }

  const doneEdit = () => {
    data.editedTodo = nullTodo
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

  .filters > span {
    padding: 2px 4px;
    margin-right: 4px;
    border: 1px solid transparent;
  }
  .filters > span.selected {
    border-color: rgba(173, 47, 47, 0.2);
  }
</style>
