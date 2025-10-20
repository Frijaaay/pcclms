import axios from 'axios';
import { useAuthStore } from '@/stores/auth';

// Create an instance of axios
const api = axios.create({
    baseURL: '/api',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
    withCredentials: true
});

// Syncs token across tabs
let cachedToken = localStorage.getItem('token');
window.addEventListener('storage', () => {
    cachedToken = localStorage.getItem('token');
});

// Automatically attach JWT Token to requests from LocalStorage
api.interceptors.request.use(config => {
    if (!cachedToken) {
        cachedToken = localStorage.getItem('token');
    }
    if (cachedToken) {
        config.headers.Authorization = `Bearer ${cachedToken}`;
    }
    return config;
}, (error) => Promise.reject(error)
);

let isRefreshing = false;
let failedQueue = [];

function processQueue(error, token = null) 
{
    failedQueue.forEach((prom) => {
        if (error) {
            prom.reject(error);
        }
        else {
            prom.resolve(token);
        }
    });
    failedQueue = [];
}

// Handle responses and errors globally
api.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        if (error.response?.status === 401 && !originalRequest._retry) {
            if (isRefreshing) {
                return new Promise((resolve, reject) => {
                    failedQueue.push({ resolve, reject });
                }).then((token) => {
                    originalRequest.headers.Authorization = 'Bearer ' + token;
                    return api(originalRequest);
                }).catch((err) => Promise.reject(err));
            }

            originalRequest._retry = true;
            isRefreshing = true;

            try {
                const res = await api.post('/auth/refresh');
                const data = res.data?.data;

                const newToken = data?.token?.value;
                cachedToken = newToken;
                localStorage.setItem('token', newToken);

                processQueue(null, newToken);
                isRefreshing = false;

                originalRequest.headers.Authorization = 'Bearer ' + newToken;
                return api(originalRequest);
            } catch (refreshError) {
                processQueue(refreshError, null);
                isRefreshing = false;

                const { logout } = useAuthStore();
                logout();

                return Promise.reject(refreshError);
            }
        }

        return Promise.reject(error);
    }
);

// Helper to set and remove token
export function setToken(token) {
    cachedToken = token;
    if (token) {
        localStorage.setItem("token", token);
    } else {
        localStorage.removeItem("token");
    }
}

export default api;