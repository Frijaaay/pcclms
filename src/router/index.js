import { createRouter, createWebHistory } from "vue-router";

import LoginView from "@/views/auth/LoginView.vue";
import AdminLayout from "@/views/layouts/AdminLayout.vue";
import AdminDashboard from '@/views/admin/Dashboard.vue';
import TestView from '/TestView.vue';
import ManageLibrarianView from '@/views/admin/ManageLibrarianView.vue';
import ManageBorrowerView from '@/views/admin/ManageBorrowerView.vue';
import ManageBookView from '@/views/admin/ManageBookView.vue';
import BookReplacementView from '@/views/admin/BookReplacementView.vue';
import BorrowedBooksView from '@/views/admin/BorrowedBooksView.vue';
import ReturnedBooksView from '@/views/admin/ReturnedBooksView.vue';
import ReportsView from '@/views/admin/ReportsView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/admin",
            name: "admin",
            component: AdminLayout,
            children: [
                {
                    path: 'dashboard',
                    name: 'admin-dashboard',
                    component: AdminDashboard,
                    meta: { parentPage: 'Dashboard'}
                },
                {
                    path: '',
                    redirect: 'admin/dashboard'
                },
                {
                    path: "/admin/users/librarian",
                    name : "manage-librarian",
                    component: ManageLibrarianView,
                    meta: { parentPage: 'User Management', currentPage: 'Librarians' }
                },
                {
                    path: "/admin/users/borrower",
                    name : "manage-borrower",
                    component: ManageBorrowerView,
                    meta: { parentPage: 'User Management', currentPage: 'Borrowers' }
                },
                {
                    path: "/admin/books",
                    name: "manage-books",
                    component: ManageBookView,
                    meta: { parentPage: 'Book Management' }
                },
                {
                    path: "/admin/books/replacement",
                    name: "file-book-replacement",
                    component: BookReplacementView,
                    meta: { parentPage: 'Book Management', currentPage: 'File Book Replacement' }
                },
                {
                    path: "/admin/transactions/borrowed",
                    name: "borrowed-books",
                    component: BorrowedBooksView,
                    meta: { parentPage: 'Transactions', currentPage: 'Borrowed Books'}
                },
                {
                    path: "/admin/transactions/returned",
                    name: "returned-books",
                    component: ReturnedBooksView,
                    meta: { parentPage: 'Transactions', currentPage: 'Returned Books'}
                },
                {
                    path: "/admin/transactions/reports",
                    name: "transaction-reports",
                    component: ReportsView,
                    meta: { parentPage: 'Transactions', currentPage: 'Reports'}
                }

            ]
        },
        {
            path: "/login",
            name: "login",
            component: LoginView
        },
        {
            path: "/test",
            name: "test",
            component: TestView
        },
        {
            path: "/",
            name: "landing",
            redirect: "/login"
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: () => import('@/views/404View.vue')
        }
    ]
});

export default router;