import {createStore} from "vuex"
import {App} from "vue";

const store = createStore({})

export function setupStore(app: App<Element>) {
    app.use(store)
}


export {store}
