import { components } from 'daisyui/imports';

export default [
  {
    path: '/librarian',
    name: 'librarian',
    redirect: '/librarian/dashboard',
    component: () => import('@/views/layouts/LibrarianLayout.vue'),
    meta: {
      requiresAuth: true,
      role: 'librarian'
    },
    children: [
      {
        path: 'dashboard',
        name: 'librarian-dashboard',
        components: () => import('@/views/librarian/LibrarianDashboard.vue'),
        meta: { parentPage: 'Dashboard' }
      },
    ]
  }
];