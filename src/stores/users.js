import { defineStore } from 'pinia';
import api from '@/lib/axios';

export const useUserStore = defineStore('users', {
    state: () => ({
        librarian: JSON.parse(localStorage.getItem('librarian')) || null,
        librarian_count: 0,
        borrower: JSON.parse(localStorage.getItem('borrower')) || null,
        borrower_count: 0,
        loading: null,
        error: null,
        success: null
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
            // localStorage.setItem('borrower_count', this.borrower_count.toString());
            this.loading = false;
        },
        async createUser(createdUser) {
            this.loading = true;
            this.error = null;

            try {
                const response = await api.post('v1/users/librarians', createdUser);

                this.librarian.push(response.data.librarian);
                this.librarian_count = response.data.librarian_count;

                localStorage.setItem('librarian', JSON.stringify(this.librarian));
                localStorage.setItem('librarian_count', this.librarian_count.toString());

                this.success = 'User Created Successfully';

                setTimeout(() => {
                    this.success = null;
                }, 3000);
            } catch (error) {
                this.error = error.response?.data?.message || 'Creating User Failed';

                setTimeout(() => {
                    this.error = null;
                }, 5000)
            } finally {
                this.loading = false;
            }
        },
        async editUser() {

        },
    }
});