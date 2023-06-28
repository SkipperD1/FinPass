import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Toaster from '@meforma/vue-toaster';


createApp(App)
.use(router)
.use(Toaster, {
    position: 'center'
})
.mount('#app')
 