import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vWow from 'v-wow'
// Vue.use(vWow);
import './assets/scss/black.css'
import './assets/scss/style.css'
import 'animate.css'

createApp(App).use(vWow).use(store).use(router).mount('#app')
