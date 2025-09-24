import { defineStore } from 'pinia';
import api from '@/lib/axios';

function safeParse(key) {
    try {
        const raw = localStorage.getItem(key);
        return raw ? JSON.parse(raw) : null;
    } catch {
        return null;
    }
}

export const useAuthStore = defineStore('auth', {
    state: () => ({
        // user: safeParse('user'),
        user: localStorage.getItem('user') || null,
        token: localStorage.getItem('token') || null,
        loading: null,
        error: null,
        success: null
    }),
    // getters: {},
    actions: {
        async login(id_number, password, router) {
            this.loading = true;
            this.error = null;

            try {
                const response = await api.post('/auth/login', {
                    id_number,
                    password,
                });

                this.user = response.data.user;
                this.token = response.data.token.value;

                localStorage.setItem('user', JSON.stringify(this.user));
                localStorage.setItem('token', this.token);
                
                router.push({ name: 'admin-dashboard' });
                
            } catch (error) {
                this.error = error.response?.data?.error?.message || 'Invalid username or password';

                setTimeout(() => {
                    this.error = null;
                }, 3000);
            } finally {
                this.loading = false;
            }
        },

        async logout(router) {
            
            try {
                await api.post('/auth/logout');
                console.log('Logout success');
            } catch (error) {
                console.error('Logout failed:', error);
            } finally {
                this.token = null;
                this.user_type = null;

                localStorage.clear();

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
                const response = await api.get('/auth/hydrate');

                this.user = response.data.user;
                localStorage.setItem('user', JSON.stringify(this.user));
                console.log(response.data.message);

            } catch (error) {
                console.error('Hydration Failed', error);
                await this.logout();
            }
        },
        async updateMe(updatedMe) {
            this.loading = true;
            this.error = null;
            this.success = null;

            try {
                const response = await api.put(`/users/update/${this.user.id}`, updatedMe);

                this.user = response.data.user;
                localStorage.setItem('user', JSON.stringify(this.user));

                this.success = response.data?.message ||'Profile Updated Successfully!';

                setTimeout(() => {
                    this.success = null; 
                }, 3000);
            } catch (error) {
                this.error = error.response?.data?.message || 'Updating Profile Failed';
            } finally {
                this.loading = false;
            }
        }
    },
});