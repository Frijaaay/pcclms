import { defineStore } from "pinia";
import api from '@/lib/axios';

export const useReportStore = defineStore('reports', {
    state: () => ({
        borrowed_books: JSON.parse(localStorage.getItem('borrowed_books')) | null,
        borrowed_books_count: 0,
        returned_books: JSON.parse(localStorage.getItem('returned_books')) | null,
        returned_books_count: 0,
        loading: null,
        error: null,
        success: null,
    }),
    getters: {},
    actions: {
        async fetchBorrowedBooks() {
            this.loading = true;
            this.error = null;

            try {
                const response = await api.get('/reports/borrowed/all');

                this.borrowed_books = response.data.content;
                this.borrowed_books_count = response.data.content.length;

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

            try {
                const response = await api.get('/reports/returned/all');

                this.returned_books = response.data.content;
                this.returned_books_count = response.data.content.length;

                localStorage.setItem('returned_books', JSON.stringify(this.returned_books));
                localStorage.setItem('returned_books_count', this.returned_books_count.toString());

                this.loading = false;
            } catch (error) {
                console.error(response.data.error.message, error);
            }
        },
    }
});