// import css file
import '../src/assets/css/grid.css'
import '../src/assets/css/base.css'
import '../src/assets/css/main.css'

import { createApp } from 'vue'
import router from './router.js'
import App from './App.vue'


const app = createApp(App);
app.use(router);

app.mount('#app');