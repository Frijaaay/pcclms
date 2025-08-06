import { defineStore } from 'pinia';
import api from '@/lib/axios';
import { stringify } from 'postcss';

export const useUserStore = defineStore('users', {
    state: () => ({
        librarians: JSON.parse(localStorage.getItem('librarians')) || null,
        librarian_count: 0,
        borrowers: JSON.parse(localStorage.getItem('borrowers')) || null,
        borrower_count: 0,
        loading: null,
        error: null,
        success: null
    }), 
    actions: {
        async fetchLibrarians() {
            this.loading = true;
            const response = await api.get('/v1/users/librarians');
            
            this.librarians = response.data.librarians;
            this.librarian_count = response.data.librarian_count;
            localStorage.setItem('librarians', JSON.stringify(this.librarians));
            localStorage.setItem('librarian_count', this.librarian_count.toString());
            this.loading = false;
        },
        async fetchBorrowers() {
            this.loading = true;

            const response = await api.get('/v1/users/borrowers');
            this.borrowers = response.data.borrowers;
            this.borrower_count = response.data.borrower_count;

            localStorage.setItem('borrowers', JSON.stringify(this.borrowers));
            localStorage.setItem('borrower_count', this.borrower_count.toString());
            this.loading = false;
        },
        async createUser(createdUser) {
            this.loading = true;
            this.error = null;

            try {
                const response = await api.post('v1/users/librarians', createdUser);

                this.librarians.push(response.data.librarian);
                this.librarian_count = response.data.librarian_count;

                localStorage.setItem('librarians', JSON.stringify(this.librarians));
                localStorage.setItem('librarian_count', this.librarian_count.toString());

                this.success = 'User Created Successfully';

                setTimeout(() => {
                    this.success = null;
                }, 3000);
            } catch (error) {
                this.error = error.response?.data?.message || 'Creating User Failed';

                setTimeout(() => {
                    this.error = null;
                }, 5000);
            } finally {
                this.loading = false;
            }
        },
        async createBorrower(createdBorrower) {
            this.loading = true
            
            try {
                const response = await api.post('v1/users/borrowers', createdBorrower);

                this.borrowers.push(response.data.borrower);
                this.borrower_count = response.data.borrower_count;

                localStorage.setItem('borrowers', JSON.stringify(this.borrowers));
                localStorage.setItem('borrower_count', this.borrower_count.toString());

                this.success = 'User Created Successfully';

                setTimeout(() => {
                    this.success = null;
                }, 3000);
            } catch (error) {
                this.error = error.response?.data?.message || 'Creating User Failed';

                setTimeout(() => {
                    this.error = null;
                }, 5000);
            } finally {
                this.loading = false
            }
        },
    }
});