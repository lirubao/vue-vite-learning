import { App } from '@vue/runtime-core'
import Todos from './Todos.vue'

export { Todos }

export interface Todo {
  id: number
  title: string
  completed: boolean
}

export function useDirective(app: App<Element>) {
  app.directive('todo-focus', (el, { value }) => {
    if (value) {
      el.focus()
    }
  })
}
