export default [
  {
    path: '/admin',
    name: 'admin',
    component: () => import('@/views/layouts/AdminLayout.vue'),
    redirect: '/admin/dashboard',
    meta: {
      requiresAuth: true,
      role: 'admin',
    },
    children: [
      {
        path: 'dashboard',
        name: 'admin-dashboard',
        component: () => import('@/views/admin/Dashboard.vue'),
        meta: { parentPage: 'Dashboard' }
      },
      {
        path: "users/librarian",
        name: "manage-librarian",
        component: () => import('@/views/admin/ManageLibrarianView.vue'),
        meta: { 
          parentPage: 'User Management', 
          currentPage: 'Librarians',
        }
      },
      {
        path: "users/borrower",
        name: "manage-borrower",
        component: () => import('@/views/admin/ManageBorrowerView.vue'),
        meta: { 
          parentPage: 'User Management', 
          currentPage: 'Borrowers',
        }
      },
      {
        path: "books",
        name: "manage-books",
        component: () => import('@/views/admin/ManageBookView.vue'),
        meta: { 
          parentPage: 'Book Management', 
        }
      },
      {
        path: "books/borrow",
        name: "borrow-book",
        component: () => import('@/views/admin/BorrowBookView.vue'),
        meta: { 
          parentPage: 'Book Management',
          currentPage: 'Borrow Book',
        }
      },
      {
        path: "transactions/borrowed",
        name: "borrowed-books",
        component: () => import('@/views/admin/BorrowedBooksView.vue'),
        meta: { 
          parentPage: 'Transactions', 
          currentPage: 'Borrowed Books',
        }
      },
      {
        path: "transactions/returned",
        name: "returned-books",
        component: () => import('@/views/admin/ReturnedBooksView.vue'),
        meta: { 
          parentPage: 'Transactions',
          currentPage: 'Returned Books',
        }
      },
      {
        path: "transactions/reports",
        name: "transaction-reports",
        component: () => import('@/views/admin/ReportsView.vue'),
        meta: { 
          parentPage: 'Transactions',
          currentPage: 'Reports',
        }
      }
    ]
  },
];
