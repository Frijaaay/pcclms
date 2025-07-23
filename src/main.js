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
    const app = createApp();
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
    const app = createApp(App);
>>>>>>> build
>>>>>>> 5c3fbc48759e9139b215e0b0c6ab49d0254b2e0d
    app.use(pinia);
    
    const auth = useAuthStore();
    await auth.hydrate(); // Hydrate the auth store with user and token from localStorage
<<<<<<< HEAD
=======
<<<<<<<<< Temporary merge branch 1
>>>>>>> 5c3fbc48759e9139b215e0b0c6ab49d0254b2e0d
    
    app.use(router);
    app.mount('#app');
})();
<<<<<<< HEAD
=======
=========

    app.use(router);
    app.mount('#app');
})();

>>>>>>>>> Temporary merge branch 2

>>>>>>> 5c3fbc48759e9139b215e0b0c6ab49d0254b2e0d
