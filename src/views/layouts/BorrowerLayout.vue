<script setup>
import { ref } from "vue";

const categories = ref([
  {
    title: "New Arrivals",
    books: [
      { id: 1, title: "The Silent Patient", cover: "/images/books/silent.jpg" },
      { id: 2, title: "Atomic Habits", cover: "/images/books/atomic.jpg" },
      { id: 3, title: "Educated", cover: "/images/books/educated.jpg" },
      { id: 4, title: "The Alchemist", cover: "/images/books/alchemist.jpg" },
    ],
  },
  {
    title: "Trending Now",
    books: [
      { id: 5, title: "Project Hail Mary", cover: "/images/books/hailmary.jpg" },
      { id: 6, title: "Dune", cover: "/images/books/dune.jpg" },
      { id: 7, title: "1984", cover: "/images/books/1984.jpg" },
      { id: 8, title: "The Hobbit", cover: "/images/books/hobbit.jpg" },
    ],
  },
  {
    title: "Recommended for You",
    books: [
      { id: 9, title: "The Midnight Library", cover: "/images/books/midnight.jpg" },
      { id: 10, title: "Sapiens", cover: "/images/books/sapiens.jpg" },
      { id: 11, title: "The Subtle Art of Not Giving a F*ck", cover: "/images/books/subtleart.jpg" },
      { id: 12, title: "Becoming", cover: "/images/books/becoming.jpg" },
    ],
  },
]);

const handleView = (book) => {
  console.log("Viewing:", book.title);
};

import { useAuthStore } from "@/stores/auth";
const { logout } = useAuthStore();
</script>

<template>
  <div class="min-h-screen bg-base-100 text-base-content">
    <!-- Header -->
    <header class="flex justify-between items-center px-8 py-4 bg-primary text-primary-content shadow-md">
      <h1 class="text-2xl font-bold">PCC Library</h1>
      <nav class="space-x-4">
        <button class="btn btn-sm btn-outline">My Borrowed</button>
        <button @click="logout()" class="btn btn-sm btn-accent">Logout</button>
      </nav>
    </header>

    <!-- Hero Banner -->
    <section
      class="relative h-[60vh] bg-cover bg-center flex flex-col justify-end px-12 pb-16 text-white"
      style="background-image: url('/images/hero-books.jpg')"
    >
      <div class="bg-black/50 absolute inset-0"></div>
      <div class="relative z-10">
        <h2 class="text-4xl font-bold mb-2">Explore New Stories</h2>
        <p class="text-sm mb-4 max-w-xl">
          Discover your next great read from our ever-growing library collection.
        </p>
        <button class="btn btn-accent">Start Browsing</button>
      </div>
    </section>

    <!-- Category Sections -->
    <section class="px-8 py-10 space-y-12">
      <div
        v-for="category in categories"
        :key="category.title"
        class="space-y-4"
      >
        <h3 class="text-2xl font-semibold">{{ category.title }}</h3>
        <div class="flex space-x-4 overflow-x-auto scrollbar-hide pb-2">
          <div
            v-for="book in category.books"
            :key="book.id"
            class="relative flex-none w-48 cursor-pointer group"
            @click="handleView(book)"
          >
            <img
              :src="book.cover"
              :alt="book.title"
              class="rounded-xl w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div
              class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-end p-3 rounded-xl transition-opacity"
            >
              <h4 class="text-white text-sm font-medium truncate">{{ book.title }}</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
