import { createApp } from 'vue'
import './style.css'
import router from './router';
import { createPinia } from 'pinia';
import { createPersistedState } from 'pinia-plugin-persistedstate'
import VOtpInput from "vue3-otp-input";
import App from './App.vue'
import { register } from 'swiper/element/bundle';
register();

const pinia = createPinia()
pinia.use(createPersistedState())

const app = createApp(App);
app.use(pinia);

app.use(router)

app.component('v-otp-input', VOtpInput)


app.mount('#app')
