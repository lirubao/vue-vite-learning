import { App } from '@vue/runtime-core'
import Todos from './Todos.vue'

export { Todos }

export interface Todo {
  id: number
  title: string
  completed: boolean
}

export const filters = {
  all(todos: Todo[]) {
    return todos
  },
  active(todos: Todo[]) {
    return todos.filter((todo) => !todo.completed)
  },
  completed(todos: Todo[]) {
    return todos.filter((todo) => todo.completed)
  },
}

export const todoStorage = {
  fetch(): Todo[] {
    let todos = JSON.parse(localStorage.getItem('vue3-todos') || '[]')
    todos.forEach((todo: Todo, index: number) => {
      todo.id = index + 1
    })
    return todos
  },
  save(todos: Todo[]) {
    localStorage.setItem('vue3-todos', JSON.stringify(todos))
  },
}

export function useDirective(app: App<Element>) {
  app.directive('todo-focus', (el, { value }) => {
    if (value) {
      el.focus()
    }
  })
}
