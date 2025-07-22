<script setup>
import { onMounted } from 'vue';
import { useBookStore } from '@/stores/book';

import Search from '@/components/Search.vue';
import Button from '@/components/Button.vue';

const books = useBookStore();

onMounted(() => {
    books.fetchBooks();
});
</script>

<template>
  <div class="card border-base-300 border bg-base-100 shadow-sm p-4 mx-4">
        <div class="card-header pb-4">
            <h2 class="card-title">Book Information</h2>
            <p class="text-sm pb-4">Manage list of books</p>
            <div class="flex justify-between items-center">
                <div>
                    <h2 class="ml-1 font-semibold text-[15px]">All Books: <span class="text-secondary font-bold">{{ books.book?.book_count }}</span></h2>
                </div>
                <div class="flex flex-cols justify-end gap-2">
                    <Search />
                    <Button>
                        <svg xmlns="http://www.w3.org/2000/svg" class="size-4" viewBox="0 0 20 20"><path fill="currentColor" d="m8.398 14.605l1.323 1.143c.29.251.323.691.075.984a.688.688 0 0 1-.976.075l-1.565-1.352a.7.7 0 0 1-.242-.53V7.938L1.171 1.155C.78.703 1.1 0 1.694 0h16.612c.594 0 .912.704.523 1.155l-5.85 6.784v11.363c0 .386-.31.698-.692.698a.695.695 0 0 1-.692-.698V7.678a.7.7 0 0 1 .17-.458l5.023-5.825H3.21L8.228 7.22a.7.7 0 0 1 .17.458v6.927Z"/></svg>
                        Filter
                    </Button>
                    <Button>
                        <svg xmlns="http://www.w3.org/2000/svg" class="size-6" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M16 12h4m-2 2v-4M4 18v-1a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1c0 .6-.4 1-1 1H5a1 1 0 0 1-1-1m8-10a3 3 0 1 1-6 0a3 3 0 0 1 6 0"/></svg>
                        Add Book
                    </Button>
                </div>
            </div>
        </div>

    <!-- Books Table -->
        <div class="overflow-x-auto overflow-y-scroll h-145 rounded-lg">
            <table class="table table-zebra table-pin-rows">
    <!-- Table Head -->
                <thead class="table-pin-rows">
                    <tr class="bg-base-200 text-center">
                        <th class="text-left">
                            <label>
                                <input type="checkbox" class="checkbox checkbox-xs checkbox-accent" />
                            </label>
                        </th>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Author/s</th>
                        <th>ISBN</th>
                        <th>Category</th>
                        <th>Copies</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
    <!-- Table Body -->
                <tbody>
                <!-- row 1 -->
                    <tr v-for="book in books.book" :key="book.id" class="text-center">
                        <th class="text-left">
                            <label>
                                <input type="checkbox" class="checkbox checkbox-xs checkbox-accent" />
                            </label>
                        </th>
                        <td>
                            <img src="/src/assets/image/books/to_kill_a_mocking_bird.jpg" alt="To kill a Mocking Bird"
                              class="mask mask-square w-14 h-20" />
                        </td>
                        <td>
                          <div class="font-bold">{{ book.title }}</div>
                          <div class="text-sm opacity-50">{{ book.author }}</div>
                        </td>
                        <td>{{ book.author }}</td>
                        <td>{{ book.isbn }}</td>
                        <td>{{ book.category }}</td>
                        <td>{{ book.book_copies_count }}</td>
                        <td><span :class="['badge badge-soft badge-sm', book.status == 'Available' ? 'badge-success' : 'badge-error']">{{ book.status }}</span></td>
                        <th>
                            <div class="dropdown dropdown-end">
                                <div role="button" class="btn btn-ghost btn-xs" tabindex="0">
                                    <svg class="size-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="currentColor" d="M3 9.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3z"/></svg>
                                </div>
                                <ul class="dropdown-content menu bg-base-100 rounded-box z-1 w-32 p-2 shadow-sm" tabindex="0">
                                    <li><RouterLink to="#">View Details</RouterLink></li>
                                    <li><RouterLink to="#">Edit</RouterLink></li>
                                    <li><RouterLink to="#">Delete</RouterLink></li>
                                </ul>
                            </div>
                        </th>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
