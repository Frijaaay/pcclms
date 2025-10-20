import { defineStore } from "pinia";
import api from '@/lib/axios';

export const useBookStore = defineStore('books', {
    state: () => ({
        books: null,
        book_count: 0,
        book_copy: null,
        loading: null,
        error: null,
        success: null,
    }),
    getters: {},
    actions: {
        async fetchBooks() {
            this.books = JSON.parse(localStorage.getItem('books'));
            
            if (this.books) {
                this.book_count = this.books.length;
                console.log('hydrated books');
                return true;
            }

            this.loading = true;
            try {
                const response = await api.get('/books');

                this.books = response.data.data;
                this.book_count = this.books.length;

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