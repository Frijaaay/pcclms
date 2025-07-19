<script setup>
import { onMounted } from 'vue';
import { useUserStore } from '@/stores/userStore';
import { useBookStore } from '@/stores/BookStore';

const users = useUserStore();
const books = useBookStore();

onMounted(() => {
  users.fetchLibrarians();
  users.fetchBorrowers();

  books.fetchBooks();
});
</script>

<template>
<!-- Total Librarians -->
<div class="card bg-base-100 text-base-content w-full shadow-sm border border-base-300 p-4">
  <div class="flex items-start justify-between">
    <div>
      <p class="text-sm text-base-content/80">Total Librarians</p>
      <div class="flex items-center space-x-2 mt-1">
        <p class="text-2xl font-bold text-base-content">
          <span v-if="users.loading" class="loading loading-dots loading-xs"></span>
          <span v-else>
            {{ users.librarian_count }}
          </span>
        </p>
        <span class="badge badge-success badge-sm gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
          10%
        </span>
      </div>
    </div>
    <div class="btn btn-sm btn-circle btn-ghost">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" /></svg>
    </div>
  </div>
  <p class="text-xs text-base-content/60 mt-2">
    vs.
    <span class="font-medium text-base-content">
      90
    </span>
    last period
  </p>
</div>

<!-- Total Borrowers -->
<div class="card bg-base-100 text-base-content w-full shadow-sm border border-base-300 p-4">
  <div class="flex items-start justify-between">
    <div>
      <p class="text-sm text-base-content/80">Total Borrowers</p>
      <div class="flex items-center space-x-2 mt-1">
        <p class="text-2xl font-bold text-base-content">
          <span v-if="users.loading" class="loading loading-dots loading-xs"></span>
          <span v-else>
            {{ users.borrower_count }}
          </span>
          </p>
        <span class="badge badge-success badge-sm gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
          10%
        </span>
      </div>
    </div>
    <div class="btn btn-sm btn-circle btn-ghost">
      <svg xmlns="http://www.w3.org/2000/svg" class="size-7" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><path d="M14 9h4m-4 3.5h3"/><rect width="20" height="18" x="2" y="3" rx="5"/><path d="M5 16c1.208-2.581 5.712-2.75 7 0m-1.5-7a2 2 0 1 1-4 0a2 2 0 0 1 4 0"/></g></svg>
    </div>
  </div>
  <p class="text-xs text-base-content/60 mt-2">
    vs.
    <span class="font-medium text-base-content">
      90
    </span>
    last period
  </p>
</div>

<!-- Total Books -->
<div class="card bg-base-100 text-base-content w-full shadow-sm border border-base-300 p-4">
  <div class="flex items-start justify-between">
    <div>
      <p class="text-sm text-base-cotent/80">Total Books</p>
      <div class="flex items-center space-x-2 mt-1">
        <p class="text-2xl font-bold text-base-content">
          <span v-if="books.loading" class="loading loading-dots loading-xs"></span>
          <span v-else>
            {{ books.book_count }}
          </span>
        </p>
        <span class="badge badge-success badge-sm gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
          10%
        </span>
      </div>
    </div>
    <div class="btn btn-sm btn-circle btn-ghost">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" /></svg>
    </div>
  </div>
  <p class="text-xs text-base-content/60 mt-2">
    vs.
    <span class="font-medium text-base-content">
      90
    </span>
    last period
  </p>
</div>

<!-- Borrowed -->
<div class="card bg-base-100 text-base-content w-full shadow-sm border border-base-300 p-4">
  <div class="flex items-start justify-between">
    <div>
      <p class="text-sm text-base-content/80">Borrowed</p>
      <div class="flex items-center space-x-2 mt-1">
        <p class="text-2xl font-bold text-base-content">100</p>
        <span class="badge badge-success badge-sm gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
          10%
        </span>
      </div>
    </div>
    <div class="btn btn-sm btn-circle btn-ghost">
      <svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 479 511.83" class="size-5"><path d="M219.08 0h197.57v226.67c-.36 6.16-8.32 6.3-16.92 5.92H216.16c-11.88 0-21.6 9.72-21.6 21.62 0 11.89 9.72 21.61 21.6 21.61h191.48v-23h16.91v29.24c0 5.32-4.34 9.66-9.68 9.66H217.01c-27.07 0-38.91-9.57-38.91-30.97V40.98C178.1 18.44 196.53 0 219.08 0zM6.73 300.41h82.33c3.7 0 6.73 3.03 6.73 6.73v159.27c0 3.71-3.03 6.73-6.73 6.73H6.73c-3.7 0-6.73-3.02-6.73-6.73V307.14c0-3.7 3.03-6.73 6.73-6.73zm110.4 158.79V315.82c70.69 1.65 84.62-1.24 147.39 40.35l50.09 1.17c22.64 1.89 33.98 25.15 11.61 39.74-17.88 12.46-41.03 11.19-64.73 8.51-16.36-1.18-17.59 20.81-.49 21.29 5.92.6 12.4-.64 18.04-.52 29.65.66 54.2-4.44 69.69-27.51l7.92-17.35 75.37-35.21c37.57-11.41 63.15 28.21 35.06 54.69-54.88 38.01-110.99 69.04-168.2 93.81-41.69 24.05-82.79 22.24-123.34-2.87l-58.41-32.72z"/></svg>
    </div>
  </div>
  <p class="text-xs text-base-content/60 mt-2">
    vs.
    <span class="font-medium text-base-content">
      90
    </span>
    last period
  </p>
</div>

<!-- Returned -->
<div class="card bg-base-100 text-base-content w-full shadow-sm border border-base-300 p-4">
  <div class="flex items-start justify-between">
    <div>
      <p class="text-sm text-base-content/80">Returned</p>
      <div class="flex items-center space-x-2 mt-1">
        <p class="text-2xl font-bold text-base-content">100</p>
        <span class="badge badge-success badge-sm gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
          10%
        </span>
      </div>
    </div>
    <div class="btn btn-sm btn-circle btn-ghost">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 9.75h4.875a2.625 2.625 0 0 1 0 5.25H12M8.25 9.75 10.5 7.5M8.25 9.75 10.5 12m9-7.243V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0c1.1.128 1.907 1.077 1.907 2.185Z" /></svg>
    </div>
  </div>
  <p class="text-xs text-base-content/60 mt-2">
    vs.
    <span class="font-medium text-base-content">
      90
    </span>
    last period
  </p>
</div>
</template>
