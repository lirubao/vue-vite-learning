import { createStore } from "vuex"
const store = createStore({
  state: {
    curIdx: 0,
    name: "小李",
    age: 18
  },
  // mutations的使用是更改state中的内容
  mutations: {
    setCurIdx(state, index) {
      state.curIdx = index
    }
  },
  getters: {
    getInfo(state) {
      return `我的名字是${state.name},今年${state.age}岁`
    }
  }
})

export default store
