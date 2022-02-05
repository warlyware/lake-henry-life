import { createApp } from 'vue'
import VueGtag from 'vue-gtag-next'

import App from './App.vue'
import './index.css'

const app = createApp(App)

app.use(VueGtag, {
  config: { 
    id: 'G-9MRSBG5BWV',
  },
})

app.mount('#app')
