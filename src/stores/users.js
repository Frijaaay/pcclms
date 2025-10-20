import { defineStore } from 'pinia';
import api from '@/lib/axios';

export const useUserStore = defineStore('users', {
    state: () => ({
        admins: null,
        admin_count: 0,
        librarians: null,
        librarian_count: 0,
        borrowers: null,
        borrower_count: 0,
        loading: null,
        message: null,
        status: null,
    }), 
    actions: {
        async fetchAdmins(){
            this.loading = true;

            const cached = localStorage.getItem('admins');
            this.admins = cached ? JSON.parse(cached) : null;

            if (this.admins) {
                this.admin_count = this.admins.length;
                console.log('hydrated admins');
                this.loading = true;
                return true;
            }

            const response = await api.get('/users/admins');
            this.admins = response.data.data;
            this.admin_count = this.admins.length;
            
            localStorage.setItem('admins', JSON.stringify(this.admins));
            localStorage.setItem('admin_count', this.admin_count.toString());
            
            this.loading = false;
            },
        async fetchLibrarians() {
            this.loading = true;
            
            this.librarians = JSON.parse(localStorage.getItem('librarians'));

            if (this.librarians) {
                this.librarian_count = this.librarians.length;
                console.log('Hydrated Librarians');
                this.loading = false;
                return true;
            }

            const response = await api.get('/users/librarians');
            this.librarians = response.data.data;
            this.librarian_count = this.librarians.length;
            
            localStorage.setItem('librarians', JSON.stringify(this.librarians));
            localStorage.setItem('librarian_count', this.librarian_count.toString());

            this.loading = false;
        },
        async fetchBorrowers() {
            this.loading = true;

            this.borrowers = JSON.parse(localStorage.getItem('borrowers'));

            if (this.borrowers) {
                this.borrower_count = this.borrowers.length;
                console.log('Hydrated borrowers');
                this.loading = false;
                return true;
            }

            const response = await api.get('/users/borrowers');
            this.borrowers = response.data.data;
            this.borrower_count = this.borrowers.length;

            localStorage.setItem('borrowers', JSON.stringify(this.borrowers));
            localStorage.setItem('borrower_count', this.borrower_count.toString());
            this.loading = false;
        },

        async createUser(createdUser) {
            this.loading = true;

            try {
                const response = await api.post('/users', createdUser);

                if (createdUser.user_type_id === 2) {
                    this.librarians.push(response.data.data);
                    this.librarian_count = this.librarians.length;
                    
                    localStorage.setItem('librarians', JSON.stringify(this.librarians));
                    localStorage.setItem('librarian_count', this.librarian_count.toString());
                } 
                if (createdUser.user_type_id === 3) {
                    this.borrowers.push(response.data.data);
                    this.borrower_count = this.borrowers.length;
                    
                    localStorage.setItem('borrowers', JSON.stringify(this.borrowers));
                    localStorage.setItem('borrower_count', this.borrower_count.toString());
                }

                this.message = response.data.message;
                
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
                this.message = null;
            }
        },
    }
});