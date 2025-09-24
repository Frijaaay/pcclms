import { defineStore } from 'pinia';
import api from '@/lib/axios';

export const useUserStore = defineStore('users', {
    state: () => ({
        librarians: JSON.parse(localStorage.getItem('librarians')) || null,
        librarian_count: 0,
        borrowers: JSON.parse(localStorage.getItem('borrowers')) || null,
        borrower_count: 0,
        loading: null,
        message: null
    }), 
    actions: {
        async fetchLibrarians() {
            this.loading = true;
            
            const response = await api.get('/users/librarians');
            
            this.librarians = response.data.librarians;
            this.librarian_count = response.data.librarian_count;
            
            localStorage.setItem('librarians', JSON.stringify(this.librarians));
            localStorage.setItem('librarian_count', this.librarian_count.toString());

            this.loading = false;
        },
        async fetchBorrowers() {
            this.loading = true;

            const response = await api.get('/users/borrowers');
            this.borrowers = response.data.borrowers;
            this.borrower_count = response.data.borrower_count;

            localStorage.setItem('borrowers', JSON.stringify(this.borrowers));
            localStorage.setItem('borrower_count', this.borrower_count.toString());
            this.loading = false;
        },
        async createUser(createdUser) {
            this.loading = true;
            this.message = null;

            try {
                const response = await api.post('/users', createdUser);

                try {

                    if (createdUser.user_type_id === 1) {
                        //
                    } else if (createdUser.user_type_id === 2) {
                        this.librarians.push(response.data.librarian);
                        this.librarian_count = response.data.librarian_count;
                        
                        localStorage.setItem('librarians', JSON.stringify(this.librarians));
                        localStorage.setItem('librarian_count', this.librarian_count.toString());
                    } else {
                        this.borrowers.push(response.data.borrower);
                        this.borrower_count = response.data.borrower_count;
                        
                        localStorage.setItem('borrowers', JSON.stringify(this.borrowers));
                        localStorage.setItem('borrower_count', this.borrower_count.toString());
                        // handle other user types if needed
                    }
                } catch (error) {
                    console.log('Something went wrong here');
                }
                this.message = 'User created successfully';

                setTimeout(() => {
                    this.message = null;
                }, 3000);
                

            } catch (error) {
                this.message = error?.response?.data?.message || 'Creating User Failed';

                setTimeout(() => {
                    this.message = null;
                }, 3000);

            } finally {
                this.loading = false;

            }
        },
    }
});