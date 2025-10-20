import { defineStore } from "pinia";
import api from '@/lib/axios';

// Helpers
function findUuid(id_number) {
  const users = JSON.parse(localStorage.getItem('borrowers'));
  const user = users.find(user => user.id_number === id_number);
  return user ? user : null;
}

export const useBorrowStore = defineStore('borrow', {
  state: () => ({
    borrower: null,
    transactions: null,
    active_borrows: null,
    currently_borrowing: 0,
    balance: 0,

    loading: null,
    success: null,
    error: null,
  }),
  actions: {
    async fetchTransactions(id_number)
    {
      this.loading = true;
      this.borrower = findUuid(id_number);

      if (!this.borrower) {
        this.error = 'Borrower not found.';
        setTimeout(() => this.error = null, 3000);
        this.loading = false;
        return;
      }

      try {
        const response = await api.get(`/transactions/${this.borrower.id}`);
        const { data } = response.data;

        this.balance = data.balance;
        this.transactions = data.transactions;
        this.active_borrows = data.active_borrows;
        this.currently_borrowing = this.active_borrows.length == 0 ? 'None': this.active_borrows.length;

        this.loading = false;
        this.success = response.data.message;

        setTimeout(() => this.success = null, 3000);
      } catch (error) {
        this.error = 'An error occurred.' || error?.response?.data?.message;
        setTimeout(() => this.error = null, 3000);
        console.error(error);
      }
    },

    
  }
});