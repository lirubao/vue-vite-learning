import Todos from './Todos.vue'

export { Todos }

export interface Todo {
  id: number
  title: string
  completed: boolean
}
