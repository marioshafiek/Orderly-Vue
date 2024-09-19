import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import store from './store/Store.js'

//Sweet alert
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

const app = createApp(App)

//Use the store
app.use(store)
app.use(VueSweetalert2)
app.mount('#app')
