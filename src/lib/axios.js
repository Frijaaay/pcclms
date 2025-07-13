import axios from 'axios';

// Create an instance of axios
const api = axios.create({
    baseURL: '/api',
    headers: {
        'Content-Type': 'application/json',
    }
});

// Automatically attach JWT Token to requests from LocalStorage
api.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

// Handle responses and errors globally
// Injects token from localstorage
api.interceptors.response.use(
    res => res,
    err => {
        if (err.response && err.response.status === 401) {
            // Auto-logout or redirect if token is invalid
            localStorage.removeItem('token')
            localStorage.removeItem('user')
            window.location.href = '/login'
        }
        return Promise.reject(err)
    }
);

export default api;