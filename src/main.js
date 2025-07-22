import './assets/main.css';
import 'primeicons/primeicons.css';
import 'cally';

import router from './router';
import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import { useAuthStore } from '@/stores/auth';

const app = createApp(App);
const pinia = createPinia();

(async () => {
    app.use(pinia);
    
    const auth = useAuthStore();
    await auth.hydrate(); // Hydrate the auth store with user and token from localStorage
    app.use(router);
    app.mount('#app');
});


