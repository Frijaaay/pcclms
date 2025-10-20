import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "@/stores/auth";

import authRoutes from "./modules/authRoutes";
import adminRoutes from "./modules/adminRoutes";
import borrowerRoutes from "./modules/borrowerRoutes";
import librarianRoutes from "./modules/librarianRoutes";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('@/views/HomeView.vue'),
        },
        // Routes seperated in modules
        ...authRoutes,
        ...adminRoutes,
        ...borrowerRoutes,
        ...librarianRoutes,

        // Fallback routes
        {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: () => import('@/views/404View.vue')
        }
    ]
});

// Navigation guard to check for authentication
router.beforeEach((to, from, next) => {
    const auth = useAuthStore();

    // If route requiresAuth and no valid token, redirects to login
    if (to.meta.requiresAuth && !auth.token) {
        console.log('Unauthorized Request, redirecting to login');
        return next({ name: 'login' });
    }

    // If route is login and user is already authenticated, redirect to dashboard
    if (auth.token && auth.expiry && to.meta.authPages) {
        console.log('User is already authenticated, redirecting in a moment');
        return next({ name: `${auth.user?.user_type?.name}`});
    }

    if (to.meta.role && auth.user?.user_type?.name !== to.meta.role) {
    return next({ name: `${auth.user.user_type.name}` });
    }

    return next();
})
export default router;