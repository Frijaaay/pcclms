import { defineStore } from "pinia";
import api from '@/lib/axios';

export const useBookStore = defineStore('books', {
    state: () => ({
        books: JSON.parse(localStorage.getItem('books')) || null,
        book_count: 0,
        book_copy: null,
        loading: null,
        error: null,
        success: null,
    }),
    getters: {},
    actions: {
        async fetchBooks() {
            this.loading = true;
            this.error = null;
        
            try {
                const response = await api.get('/books/all');

                this.books = response.data.books;
                this.book_count = response.data.book_count;

                localStorage.setItem('books', JSON.stringify(this.books));
                localStorage.setItem('book_count', this.book_count.toString());
            } catch (error) {
                console.error('Failed to fetch books', error);
            } finally {
                this.loading = false;
            }
        },
        async fetchBookCopy() {
            this.loading = true;
        },
        async createBook() {
            this.loading = true;

            try {
                
            } catch (error) {
                
            }
        }
    }
});