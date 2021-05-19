import { createStore } from "vuex"
const store = createStore({
  state: {
    curIdx: 0
  },
  mutations: {
    setCurIdx(state, index) {
      state.curIdx = index
    }
  }
})

export default store
