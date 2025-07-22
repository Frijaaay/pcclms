import { createRouter, createWebHistory } from "vue-router";

import LoginView from "@/views/auth/LoginView.vue";
import AdminLayout from "@/views/layouts/AdminLayout.vue";
import AdminDashboard from '@/views/admin/Dashboard.vue';
// import TestView from '/TestView.vue';
import ManageLibrarianView from '@/views/admin/ManageLibrarianView.vue';
import ManageBorrowerView from '@/views/admin/ManageBorrowerView.vue';
import ManageBookView from '@/views/admin/ManageBookView.vue';
import BorrowBook from '@/views/admin/BorrowBookView.vue';
import BorrowedBooksView from '@/views/admin/BorrowedBooksView.vue';
import ReturnedBooksView from '@/views/admin/ReturnedBooksView.vue';
import ReportsView from '@/views/admin/ReportsView.vue';

import { useAuthStore } from "@/stores/auth";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/admin",
            name: "admin",
            component: AdminLayout,
            children: [
                {
                    path: '',
                    redirect: 'admin/dashboard'
                },
                {
                    path: 'dashboard',
                    name: 'admin-dashboard',
                    component: AdminDashboard,
                    meta: { 
                        parentPage: 'Dashboard',
                        requiresAuth: true,
                    }
                },
                {
                    path: "/admin/users/librarian",
                    name : "manage-librarian",
                    component: ManageLibrarianView,
                    meta: { 
                        parentPage: 'User Management', 
                        currentPage: 'Librarians',
                        requiresAuth: true,
                    }
                },
                {
                    path: "/admin/users/borrower",
                    name : "manage-borrower",
                    component: ManageBorrowerView,
                    meta: { 
                        parentPage: 'User Management', 
                        currentPage: 'Borrowers',
                        requiresAuth: true,
                    }
                },
                {
                    path: "/admin/books",
                    name: "manage-books",
                    component: ManageBookView,
                    meta: { 
                        parentPage: 'Book Management',
                        requiresAuth: true 
                    }
                },
                {
                    path: "/admin/books/borrow",
                    name: "borrow-book",
                    component: BorrowBook,
                    meta: { 
                        parentPage: 'Book Management',
                        currentPage: 'Borrow Book',
                        requiresAuth: true 
                    }
                },
                {
                    path: "/admin/transactions/borrowed",
                    name: "borrowed-books",
                    component: BorrowedBooksView,
                    meta: { 
                        parentPage: 'Transactions', 
                        currentPage: 'Borrowed Books',
                        requiresAuth: true,
                    }
                },
                {
                    path: "/admin/transactions/returned",
                    name: "returned-books",
                    component: ReturnedBooksView,
                    meta: { 
                        parentPage: 'Transactions',
                        currentPage: 'Returned Books',
                        requiresAuth: true,
                    }
                },
                {
                    path: "/admin/transactions/reports",
                    name: "transaction-reports",
                    component: ReportsView,
                    meta: { 
                        parentPage: 'Transactions',
                        currentPage: 'Reports',
                        requiresAuth: true,
                    }
                }

            ]
        },
        {
            path: "/login",
            name: "login",
            component: LoginView,
            meta: { isNotAuthenticated: true }
        },
        // {
        //     path: "/test",
        //     name: "test",
        //     component: TestView
        // },
        {
            path: "/",
            name: "landing",
            redirect: "/admin"
        },
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
        console.log('User is not authenticated, redirecting to login');
        return next({ name: 'login' });
    }

    // If route is login and user is already authenticated, redirect to dashboard
    if (to.meta.isNotAuthenticated && auth.token) {
        console.log('User is already authenticated, redirecting to dashboard');
        return next({ name: 'admin-dashboard' });
    }
    return next();
})
export default router;