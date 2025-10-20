export default [
  {
    path: '/borrower',
    name: 'borrower',
    component: () => import('@/views/layouts/BorrowerLayout.vue'),
    meta: { 
      requiresAuth: true,
      role: 'borrower' 
    },
    children: [
      {
        path: '/',
        name: 'borrower-dashboard',
        // component: () => import('@/views/')
      }
    ]
  }
];