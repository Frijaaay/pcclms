import './assets/main.css';
import 'primeicons/primeicons.css';
import 'cally';

import { createApp, markRaw } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import { useAuthStore } from '@/stores/auth';
import echo from '@/lib/echo';

const app = createApp(App);
const pinia = createPinia();

pinia.use(({ store }) => {
    store.router = markRaw(router);
});

app.use(pinia);

const { hydrate } = useAuthStore();
await hydrate(); // Hydrate the auth store with user and token from localStorageauth

app.use(router);

app.config.globalProperties.$echo = echo;

app.mount('#app');
