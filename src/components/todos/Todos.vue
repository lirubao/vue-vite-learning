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
      <TodoItem
        v-for="todo in data.filterdTodos"
        :key="todo.id"
        :todo="todo"
        v-model:edited-todo="data.editedTodo"
        @remove-todo="removeTodo"
      >
      </TodoItem>
    </ul>
    <!-- 过滤 -->
    <Filter :items="data.filterItems" v-model="data.visibility" />
  </div>
</template>

<script setup lang="ts">
  import { computed, reactive, watchEffect } from 'vue'
  import type { Todo } from './'
  import EditTodo from './EditTodo.vue'
  import Filter from './Filter.vue'
  import TodoItem from './TodoItem.vue'
  import { filters, todoStorage } from './'

  const nullTodo: Todo = {
    id: 0,
    title: '',
    completed: false,
  }

  const data = reactive({
    newTodo: '',
    todos: todoStorage.fetch(),

    editedTodo: nullTodo, // 正在编辑的todo
    filterItems: [
      { label: 'All', value: 'all' },
      { label: 'Active', value: 'active' },
      { label: 'Completed', value: 'completed' },
    ],
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
  watchEffect(() => {
    todoStorage.save(data.todos)
  })
</script>

<style lang="scss" scoped></style>
