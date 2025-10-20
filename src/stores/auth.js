import { defineStore } from 'pinia';
import api from '@/lib/axios';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        // user: safeParse('user'),
        user: localStorage.getItem('user') || null,
        token: localStorage.getItem('token') || null,
        expiry: localStorage.getItem('expiry') || null,
        loading: null,
        error: null,
        success: null
    }),
    // getters: {},
    actions: {
        async register(formData) {
            this.loading = true;
            
            try {
                const res = await api.post('/auth/register', formData);

                this.user = res.data.data;
                localStorage.setItem('user', JSON.stringify(this.user));

                this.router.push({ name: 'welcome' });
            } catch (error) {
                this.error = error.response?.data?.error?.message || 'Register failed';
                console.log(this.error);
                setTimeout(() => {
                    this.error = null;
                }, 3000);

            } finally {
                this.loading = false;
            }
        },
        async login(formData) {
            this.loading = true;

            try {
                const res = await api.post('/auth/login', formData);
                const data = res.data.data;
                
                this.user = data.user;
                this.token = data.token.value;
                this.expiry = Date.now() + data.token.expires_in * 1000;

                localStorage.setItem('user', JSON.stringify(this.user));
                localStorage.setItem('token', this.token);
                localStorage.setItem('expiry', this.expiry);

                this.router.push({ name: `${this.user?.user_type?.name}` })
            } catch (error) {
                this.error = error.response?.data?.error?.message || 'Login failed';

                setTimeout(() => {
                    this.error = null;
                }, 3000);
            } finally {
                this.loading = false;
            }
        },

        async logout() {
            
            try {
                const { data } = await api.post('/auth/logout');
                console.log('Logout success');
                console.log(`${data.message} from API`);

                this.router.push({ name: 'login' });
            } catch (error) {
                console.error('Logout failed:', error);
            } finally {
                this.token = null;
                this.user = null;
                localStorage.clear();
                this.router.push({ name: 'login' });
            }

        },
        async refresh() {
            try {
                const { data } = await api.post('/auth/refresh');

                const echoMe = data.data;
                console.log('success refresh', echoMe);
            } catch (error) {
                console.error('Error', error?.response.data.error.message);
            }
        },
        async hydrate() {
            const token = localStorage.getItem('token');
            const user = localStorage.getItem('user');
            const expiry = localStorage.getItem('expiry');

            if (token && expiry) {
                const now = Date.now();
                
                if (Number(expiry) > now && user) {
                    this.user = JSON.parse(user);
                    this.token = token;
                    this.expiry = Number(expiry);
                    console.log('Hydrated from memory');
                    return;
                } else {
                    console.log('Token is expired. Attempting to rehydrate...');
                }
                
                try {
                    const { data } = await api.get('/auth/hydrate');
                    
                    this.user = data.data?.user;
                    this.token = data.data?.token?.value;
                    this.expiry = Date.now() + data.data?.token?.expires_in * 1000;
                    
                    localStorage.setItem('user', JSON.stringify(this.user));
                    localStorage.setItem('token', this.token);
                    localStorage.setItem('expiry', this.expiry);
                    
                    console.log(`${data.message} from API`);
                } catch (error) {
                    console.error('Hydration Failed', error);
                    localStorage.removeItem('token');
                    localStorage.removeItem('user');
                    localStorage.removeItem('expiry');
                }
            }
            console.log('User is not logged in, skipping hydration')
        },

        async updateMe(updatedMe) {
            this.loading = true;
            this.error = null;
            this.success = null;

            try {
                const response = await api.post(`/users/update/${this.user.id}`, updatedMe);

                this.user = response.data.data;
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