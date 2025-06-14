import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router/defs';

createApp({ ...App, name: 'FancyThingy' })
    .use(router)
    .mount('#app')
