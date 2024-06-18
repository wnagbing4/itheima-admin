import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { useAllPlugins } from './plugins'
import App from './App.vue'
import router from './router'

const app = createApp(App)
useAllPlugins(app)

app.mount('#app')
