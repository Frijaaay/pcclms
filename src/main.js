import './assets/main.css';
import 'primeicons/primeicons.css';
import 'cally';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import { useAuthStore } from '@/stores/auth';

const pinia = createPinia();

(async () => {
<<<<<<< HEAD
=======
    const app = createApp(App);
>>>>>>> build
    app.use(pinia);
    
    const auth = useAuthStore();
    await auth.hydrate(); // Hydrate the auth store with user and token from localStorage
<<<<<<< HEAD

    app.use(router);
    app.mount('#app');
})();

=======
    
    app.use(router);
    app.mount('#app');
})();
>>>>>>> build

