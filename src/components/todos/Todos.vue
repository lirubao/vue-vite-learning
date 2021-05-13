<template>
  <div class="todo">
    <!-- 新增 -->
    <EditTodo
      v-model:todo-title="data.newTodo"
      @keyup.enter="addTodo"
      autofocus
      placeholder="新增今日待办"
      autocomplete="off"
    />
    <!-- 列表 -->
    <ul>
      <li
        v-for="todo in data.filterdTodos"
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
        <EditTodo
          class="edit"
          v-model:todo-title="todo.title"
          v-todo-focus="todo === data.editedTodo"
          @blur="doneEdit()"
          @keyup.enter="doneEdit()"
          @keyup.escape="cancelTodo(todo)"
        />
      </li>
    </ul>
    <!-- 过滤 -->
    <p class="filters">
      <span @click="data.visibility = 'all'" :class="{ selected: data.visibility === 'all' }"
        >All</span
      >
      <span @click="data.visibility = 'active'" :class="{ selected: data.visibility === 'active' }"
        >Active</span
      >
      <span
        @click="data.visibility = 'completed'"
        :class="{ selected: data.visibility === 'completed' }"
        >Completed</span
      >
    </p>
  </div>
</template>

<script setup lang="ts">
  import { computed, reactive, watchEffect } from 'vue'
  import type { Todo } from './'
  import EditTodo from './EditTodo.vue'
  import { filters, todoStorage } from './'

  const nullTodo: Todo = {
    id: 0,
    title: '',
    completed: false,
  }

  const data = reactive({
    newTodo: '',
    todos: todoStorage.fetch(),
    beforEditCache: '',
    editedTodo: nullTodo, // 正在编辑的todo
    visibility: 'all',
    filterdTodos: computed(() => {
      return filters[data.visibility](data.todos)
    }),
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

  watchEffect(() => {
    todoStorage.save(data.todos)
  })
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
