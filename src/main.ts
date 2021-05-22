import {createApp} from "vue"
import App from "./App.vue"
import router, {setupRouter} from "./router"
import {setupStore} from "./store"
import {setupI18n} from "./i18n";

(async () => {
    const app = createApp(App)

    setupStore(app)
    setupRouter(app)
    await setupI18n(app)
    // mount when the route is ready
    await router.isReady()

    app.mount("#app", true)
})()
