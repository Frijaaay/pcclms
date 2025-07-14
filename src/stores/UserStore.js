import { defineStore } from 'pinia';
import api from '@/lib/axios';

export const useUserStore = defineStore('users', {
    state: () => ({
        librarian: JSON.parse(localStorage.getItem('librarian')) || null,
        librarian_count: localStorage.getItem('librarian_count') || 0,
        borrower: JSON.parse(localStorage.getItem('borrower')) || null,
        borrower_count: localStorage.getItem('borrower_count') || 0,
        loading: null,
    }), 
    actions: {
        async fetchLibrarians() {
            this.loading = true;
            const response = await api.get('/v1/users/librarians');
            
            this.librarian = response.data.librarian;
            this.librarian_count = response.data.librarian_count;
            localStorage.setItem('librarian', JSON.stringify(this.librarian));
            localStorage.setItem('librarian_count', this.librarian_count.toString());
            this.loading = false;
        },
        async fetchBorrowers() {
            this.loading = true;

            const response = await api.get('/v1/users/borrowers');
            this.borrower = response.data.borrower;
            this.borrower_count = response.data.borrower_count;

            localStorage.setItem('borrower', JSON.stringify(this.borrower));
            localStorage.setItem('borrower_count', this.borrower_count.toString());
            this.loading = false;

        }
    }
});