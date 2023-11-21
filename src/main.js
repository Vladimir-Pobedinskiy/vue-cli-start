import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import { store } from './store'

import './assets/scss/main.scss'

const app = createApp(App)
app.use(router)
app.use(store)

if (app.config.globalProperties.$store) {
  app.config.globalProperties.$store.dispatch('getNavLinks')
}

app.mount('#app')
