import { defineStore } from 'pinia';
import api from '@/lib/axios';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: JSON.parse(localStorage.getItem('user')) || null,
        token: localStorage.getItem('token') || null,
        loading: false,
        error: null,
    }),
    // getters: {},
    actions: {
        async login(id_number, password, router) {
            this.loading = true;
            this.error = null;

            try {
                const response = await api.post('/v1/users/login', {
                    id_number,
                    password,
                });

                this.user = response.data.user;
                this.token = response.data.token;

                localStorage.setItem('user', JSON.stringify(this.user));
                localStorage.setItem('token', this.token);
                
                router.push({ name: 'admin-dashboard' });
                
            } catch (error) {
                this.error = error.response?.data?.error || 'Login failed';
            } finally {
                this.loading = false;
            }
        },

        async logout(router) {
            
            try {
                await api.post('/v1/users/logout');
            } catch (error) {
                console.error('Logout failed:', error);
            } finally {
                this.token = null;
                this.user_type = null;
                localStorage.removeItem('token');
                localStorage.removeItem('user_type');

                router.push({ name: 'login' });
            }

        },

        async hydrate() {
            const token = localStorage.getItem('token');

            if (!token) {
                this.token = null;
                this.user = null;
                return;
            }

            this.token = token;

            try {
                const response = await api.get('/v1/users/me');

                this.user = response.data;
                localStorage.setItem('user', JSON.stringify(this.user));

            } catch (error) {
                console.error('Hydration Failed', error);
                this.logout();
            } finally {
                console.log('Hydration Successful');
            }
        }
    },
});