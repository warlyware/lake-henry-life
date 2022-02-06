import { createApp } from 'vue'
import VueGtag from 'vue-gtag'

import App from './App.vue'
import './index.css'
import router from './router/index.js'

const app = createApp(App)

app.use(VueGtag, {
  config: { 
    id: 'G-9MRSBG5BWV',
  },
}, router)

app.use(router).mount('#app')
