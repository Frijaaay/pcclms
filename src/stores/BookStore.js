import { defineStore } from "pinia";
import api from '@/lib/axios';

export const useBookStore = defineStore('books', {
    state: () => ({
        book: null,
        book_count: 0,
        book_copy: null,
        loading: null,
        error: null
    }),
    getters: {},
    actions: {
        async fetchBooks() {
            this.loading = true;
            this.error = null;
        
            try {
                const response = await api.get('/v1/books/all');

                this.book = response.data.book;
                this.book_count = response.data.book_count;
                this.loading = false;
            } catch (error) {
                console.error('Failed to fetch books', error);
            } 
        },
        async fetchBookCopy() {

        }
    }
});