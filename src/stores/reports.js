import { defineStore } from "pinia";
import api from '@/lib/axios';

export const useReportStore = defineStore('reports', {
    state: () => ({
        reports: null,
        borrowed_books: null,
        borrowed_books_count: 0,
        returned_books: null,
        returned_books_count: 0,
        loading: false,
        error: false,
        success: false,
    }),
    getters: {},
    actions: {
        async fetchBorrowedBooks() {
            this.loading = true;
            this.error = null;

            this.borrowed_books = JSON.parse(localStorage.getItem('borrowed_books'));

            if (this.borrowed_books) {
                this.borrowed_books_count = this.borrowed_books.length;
                console.log('hydrated borrowed reports');
                this.loading = false;
                return true;
            }

            try {
                const response = await api.get('/reports/borrowed/all');

                this.borrowed_books = response.data.data;
                this.borrowed_books_count = this.borrowed_books.length;

                localStorage.setItem('borrowed_books', JSON.stringify(this.borrowed_books));
                localStorage.setItem('borrowed_books_count', this.borrowed_books_count.toString());

                this.loading = false;
            } catch (error) {
                console.error(response.data.error.message, error);
            }
        },
        async fetchReturnedBooks() {
            this.loading = true;
            this.error = null;

            this.returned_books = JSON.parse(localStorage.getItem('returned_books'));

            if (this.returned_books) {
                this.returned_books_count = this.returned_books.length;
                console.log('hydrated returned reports');
                this.loading = false;
                return true;
            }

            try {
                const response = await api.get('/reports/returned/all');

                this.returned_books = response.data.data;
                this.returned_books_count = this.returned_books.length;

                localStorage.setItem('returned_books', JSON.stringify(this.returned_books));
                localStorage.setItem('returned_books_count', this.returned_books_count.toString());

                this.loading = false;
            } catch (error) {
                console.error(response.data.error.message, error);
            }
        },
        async fetchReports() {
            this.loading = true;
            this.error = null;

            const cached = localStorage.getItem('reports');
            this.reports = cached ? JSON.parse(cached) : null;

            if (this.reports) {
                console.log('hydrated reports');
                this.loading = false;
                return true;
            }

            try {
                const response = await api.get('/reports/all');

                this.reports = response.data.data;
                localStorage.setItem('reports', JSON.stringify(this.reports));
                this.loading = false;
            } catch (error) {
                console.error(response.data.error.message, error);
            }
        },
        
    }
});