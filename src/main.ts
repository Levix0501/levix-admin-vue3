import { createApp } from 'vue'

import 'virtual:uno.css'
import './assets/main.css'

import App from './App.vue'
import { setupPlugins } from './_core/utils/plugins'

const app = createApp(App)

setupPlugins(app)

app.mount('#app')
