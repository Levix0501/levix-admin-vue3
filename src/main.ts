import 'virtual:uno.css'
import 'element-plus/theme-chalk/dark/css-vars.css'

import { createApp } from 'vue'

import App from './App.vue'
import { setupPlugins } from './@core/utils/plugins'

const app = createApp(App)

setupPlugins(app)

app.mount('#app')
