<script setup>
import { ref, onMounted } from 'vue'
import { BookOpen, Search, BookmarkCheck, Users, Clock, Shield } from 'lucide-vue-next'

import echo from '@/lib/echo';

onMounted(() => {
  echo.private('users')
    .listen('.UserUpdated', (e) => {
      console.log('🟢 User updated event received:', e);
    });
});

const features = [
  {
    icon: BookOpen,
    title: 'Browse Books Easily',
    description: 'Search through thousands of books by title, author, or category using smart filters.',
  },
  {
    icon: BookmarkCheck,
    title: 'Reserve & Borrow Online',
    description: 'Reserve available copies instantly and pick them up in the library — no more waiting in line.',
  },
  {
    icon: Users,
    title: 'User-Friendly Dashboard',
    description: 'Manage your borrow history and due dates with a simple, intuitive dashboard.',
  },
  {
    icon: Search,
    title: 'Advanced Book Search',
    description: 'Find exactly what you’re looking for with full-text search and quick filters.',
  },
  {
    icon: Clock,
    title: 'Real-Time Availability',
    description: 'See which books are available or currently borrowed in real time.',
  },
  {
    icon: Shield,
    title: 'Secure Access',
    description: 'Your data and transactions are protected with secure authentication and role-based access.',
  },
]

// Mock data
const newArrivals = ref([
  { id: 1, title: 'Atomic Habits', author: 'James Clear', image: 'https://m.media-amazon.com/images/I/91bYsX41DVL._AC_UF1000,1000_QL80_.jpg' },
  { id: 2, title: 'The Midnight Library', author: 'Matt Haig', image: 'https://m.media-amazon.com/images/I/81a4kCNuH+L.jpg' },
  { id: 3, title: 'Educated', author: 'Tara Westover', image: 'https://m.media-amazon.com/images/I/81WojUxbbFL.jpg' },
  { id: 4, title: 'The Silent Patient', author: 'Alex Michaelides', image: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1668782119i/40097951.jpg' },
  { id: 5, title: 'The Silent Patient', author: 'Alex Michaelides', image: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1668782119i/40097951.jpg' },
  { id: 6, title: 'The Silent Patient', author: 'Alex Michaelides', image: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1668782119i/40097951.jpg' },
  { id: 7, title: 'The Silent Patient', author: 'Alex Michaelides', image: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1668782119i/40097951.jpg' },
  { id: 8, title: 'The Silent Patient', author: 'Alex Michaelides', image: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1668782119i/40097951.jpg' },
  { id: 9, title: 'The Silent Patient', author: 'Alex Michaelides', image: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1668782119i/40097951.jpg' },
  { id: 10, title: 'The Silent Patient', author: 'Alex Michaelides', image: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1668782119i/40097951.jpg' },
])

const categories = ref([
  'Fiction', 'Non-Fiction', 'Science', 'History', 'Biography', 'Technology', 'Philosophy', 'Education'
]);
</script> 

<template>
  <div class="min-h-screen flex flex-col bg-base-100">
    <!-- Hero Section -->
    <section class="hero bg-radial-[at_50%_68%] from-red-900 to-red-600 text-base-100 py-6 pt-2">
      <div class="hero-content text-center p-2">
        <div class="w-full mx-auto justify-items-center">
          <img src="/favicon.ico" alt="logo" class="size-50">
          <h1 class="text-4xl font-bold mb-4">Welcome to PCC Library</h1>
          <p class="text-lg mb-6">
            Discover your next favorite book from our vast collection of knowledge, fiction, and discovery.
          </p>
          <RouterLink :to="{ name: 'register' }" class="btn btn-lg">Explore Now</RouterLink>
        </div>
      </div>
    </section>

    <!-- New Arrivals -->
    <section class="py-10 px- bg-base-200">
      <h2 class="text-3xl font-bold text-center mb-5">New Arrivals</h2>
      <div class="flex gap-6 overflow-x-hidden hover:overflow-x-scroll p-4 bg-base-300 shadow-inner">
        <div
          v-for="book in newArrivals"
          :key="book.id"
          class="card w-60 bg-base-100 shadow-sm border border-base-300 flex-shrink-0 hover:scale-105 transition"
        >
          <figure>
            <img :src="book.image" :alt="book.title" class="h-64 w-full object-cover" />
          </figure>
          <div class="card-body">
            <h3 class="card-title text-base">{{ book.title }}</h3>
            <p class="text-sm text-gray-500">{{ book.author }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- About / Features Section -->
<section class="py-15 px-6 bg-base-200">
  <div class="max-w-5xl mx-auto text-center mb-12 justify-items-center">
    <img src="/favicon.ico" alt="logo" class="size-20">
    <h2 class="text-3xl font-bold mb-4">What is the PCC Library System?</h2>
    <p class="text-content text-lg">
      Our Library Management System helps students and staff easily browse, borrow, and track books —
      all in one intuitive platform. Say goodbye to long queues and manual records!
    </p>
  </div>

  <!-- Feature Highlights -->
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
    <div
      v-for="feature in features"
      :key="feature.title"
      class="card bg-base-100 p-8 shadow-sm border border-base-300 hover:shadow-xl transition"
    >
      <div class="text-4xl mb-4 text-primary">
        <component :is="feature.icon" />
      </div>
      <h3 class="text-xl font-semibold mb-2">{{ feature.title }}</h3>
      <p class="text-gray-600">{{ feature.description }}</p>
    </div>
  </div>

  <!-- Demo Section -->
  <div class="text-center mt-16">
    <h3 class="text-2xl font-bold mb-4">How It Works</h3>
    <p class="text-gray-600 max-w-3xl mx-auto mb-6">
      Simply log in using your student or staff ID to start browsing books, check availability,
      reserve copies, and view your borrow history — all in a few clicks.
    </p>
    <div class="mockup-window border bg-base-300 max-w-3xl mx-auto shadow-lg">
      <div class="flex justify-center px-6 py-8 bg-base-200">
        <img
          src="https://images.preview.ph/preview/resize/images/2025/03/30/iu-dramas-and-movies-1743280222.webp"
          alt="Library demo screenshot"
          class="rounded-lg shadow-md"
        />
      </div>
    </div>
  </div>
</section>


    <!-- Categories -->
    <section class="py-16 px-6 bg-base-200">
      <h2 class="text-3xl font-bold text-center mb-8">Explore by Category</h2>
      <div class="flex flex-wrap justify-center gap-4">
        <div
          v-for="category in categories"
          :key="category"
          class="badge badge-lg badge-outline px-4 py-3 text-lg hover:bg-primary hover:text-white transition"
        >
          {{ category }}
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-neutral text-neutral-content py-10 text-center">
      <p class="text-sm">© 2025 ITISTIC PCC Library Management System — All Rights Reserved</p>
      <div class="mt-3">
        <a href="#" class="link link-hover mx-2">About</a>
        <a href="#" class="link link-hover mx-2">Contact</a>
        <a href="#" class="link link-hover mx-2">Privacy Policy</a>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
