import { createApp } from 'vue'
import './style.css'
import router from './router';
import { createPinia } from 'pinia';
import { createPersistedState } from 'pinia-plugin-persistedstate'
import App from './App.vue'

const pinia = createPinia()
pinia.use(createPersistedState())

const app = createApp(App);
app.use(pinia);

app.use(router)
app.mount('#app')
