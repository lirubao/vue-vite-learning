import { reactive, computed, toRefs, ToRefs, onMounted, onUnmounted } from "vue"
import Counter from "./Counter.vue"

export interface CounterAttributes {
  counter: number
  doubleCounter: number
}

export function useContent(props: Readonly<any>): ToRefs<CounterAttributes> {
  const state: CounterAttributes = reactive({
    counter: props.counter,
    doubleCounter: computed(() => state.counter * 2)
  })
  let timer: NodeJS.Timeout
  onMounted(() => {
    timer = setInterval(() => {
      state.counter++
    }, 2000)
  })

  onUnmounted(() => {
    clearInterval(timer)
  })
  return toRefs(state)
}

export { Counter }
