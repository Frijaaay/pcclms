<script setup>
import { ref, computed, watch } from 'vue'
import { RouterLink, useRoute} from 'vue-router';

const emit = defineEmits(['update:width'])

const isCollapsed = ref(true);
// const toggleLink1 = ref(false);
const toggleLink2 = ref(false);
const toggleLink3 = ref(false);
const toggleLink4 = ref(false);

const isActiveLink = (routePath) => {
  const route = useRoute();
  return route.path === routePath;
}

const isHovered = ref(false);

// const isSidebarVisuallyExtended = computed(() => isHovered.value || !isCollapsed.value)

const isSidebarVisuallyExtended = computed(() => isHovered.value || !isCollapsed.value)

// Only when NOT hovered, emit the new width to parent
watch(() => isCollapsed.value, (collapsed) => {
  emit('update:width', collapsed ? 48 : 208)
})
</script>


<template>
  <nav :class="['text-sm bg-base-100 absolute top-0 left-0 h-full z-30 p-1 flex flex-col transition-all duration-300 ease-in-out shadow-sm border border-base-300 overflow-hidden', isSidebarVisuallyExtended ? 'w-52 shadow-xl' : 'w-12']">

    <!-- Toggle Button -->
    <button class="ml-1" :aria-label="isCollapsed ? 'Open Sidebar' : 'Close Sidebar'">
      <transition class="cursor-pointer" name="icon-fade" mode="out-in">
        <svg @click="isCollapsed = !isCollapsed" v-if="!isSidebarVisuallyExtended" key="collapsed" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="m-1 size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5" /></svg>
        <svg @click="isCollapsed = !isCollapsed" v-else key="expanded" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="m-1 size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </transition>
    </button>

    <!-- Menu div for hover-->
    <div class="overflow-hidden" @mouseenter="isHovered = true" @mouseleave="isHovered = false">

      <!-- Sidebar menu 1 -->
        <RouterLink :to="{ name: 'admin-dashboard' }" :class="['flex items-center rounded-md cursor-pointer p-1 transition', isActiveLink('/admin/dashboard') ? 'bg-base-300 font-semibold' : 'hover:bg-base-300']">
          <div :class="['flex items-center transition-all duration-300', isSidebarVisuallyExtended ? 'gap-0 justify-center' : 'gap-2']">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" :class="[isSidebarVisuallyExtended ? 'size-7 mr-1' : 'size-6', 'transition-all duration-300 ml-1']"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" /><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" /></svg>
              <span class="whitespace-nowrap transition-opacity duration-300" :class="isSidebarVisuallyExtended ? 'opacity-100 visible' : 'opacity-0 invisible'">
                Dashboard
              </span>
          </div>
        </RouterLink>

        <!-- Sidebar menu 2 -->
      <div>
        <div @click="toggleLink2 = !toggleLink2" :class="['flex items-center justify-between rounded-md cursor-pointer p-1 transition', $route.path.startsWith( '/admin/users/') ? 'bg-base-300 font-semibold' : 'hover:bg-base-300']">
          <div :class="['flex items-center transition-all duration-300', isSidebarVisuallyExtended ? 'gap-0 justify-center' : 'gap-2']">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" :class="[isSidebarVisuallyExtended ? 'size-7 mr-1' : 'size-6', 'transition-all duration-300 ml-1']"><path fill="none" stroke="currentColor" stroke-linecap="square" stroke-linejoin="round" stroke-width="1.5" d="M10 19H5a1 1 0 0 1-1-1v-1a3 3 0 0 1 3-3h2m10 1a3 3 0 0 1-3 3m3-3a3 3 0 0 0-3-3m3 3h1m-4 3a3 3 0 0 1-3-3m3 3v1m-3-4a3 3 0 0 1 3-3m-3 3h-1m4-3v-1m-2.1 1.9l-.7-.7m5.6 5.6l-.7-.7m-4.2 0l-.7.7m5.6-5.6l-.7.7M12 8a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z"/></svg>
            <span class="whitespace-nowrap transition-opacity duration-300 mr-2" :class="isSidebarVisuallyExtended ? 'opacity-100 visible' : 'opacity-0 invisible'">
              User Management
            </span>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" :class="['size-3 transition-transform duration-300 origin-center mt-1', { 'rotate-180': toggleLink2 }]"><path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>
        </div>
        <!-- Menu Items -->
        <transition
        enter-active-class="transition-[max-height] duration-300 ease-in-out"
        enter-from-class="max-h-0 opacity-0 overflow-hidden"
        enter-to-class="max-h-40 opacity-100 overflow-hidden"
        leave-active-class="transition-[max-height] duration-200 ease-in-out"
        leave-from-class="max-h-40 opacity-100 overflow-hidden"
        leave-to-class="max-h-0 opacity-0 overflow-hidden"
        >
        <ul v-if="toggleLink2 && isSidebarVisuallyExtended" class="space-y-1 text-sm pl-12 mb-2">
          <li class="flex items-center justify-between gap-0.5"><RouterLink :to="{ name: 'manage-librarian'}" :class="isActiveLink('/admin/users/librarian') ? 'font-semibold text-accent' : 'hover:text-accent'">Librarians</RouterLink></li>
          <li class="flex items-center justify-between gap-0.5"><RouterLink :to="{ name: 'manage-borrower'}" :class="isActiveLink('/admin/users/borrower') ? 'font-semibold text-accent' : 'hover:text-accent'">Borrowers</RouterLink></li>
        </ul>
        </transition>
      </div>

        <!-- Sidebar menu 3 -->
      <div>
        <div @click="toggleLink3 = !toggleLink3" :class="['flex items-center justify-between rounded-md cursor-pointer p-1 transition', $route.path.startsWith('/admin/books') ? 'bg-base-300 font-semibold' : 'hover:bg-base-300']">
          <div :class="['flex items-center transition-all duration-300', isSidebarVisuallyExtended ? 'gap-0 justify-center' : 'gap-2']">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" :class="[isSidebarVisuallyExtended ? 'size-7 mr-1' : 'size-6', 'transition-all duration-300 ml-1']"><path fill="currentColor" d="M18 0H6C4.89 0 4 .895 4 2v16c0 1.11.89 2 2 2h12c1.11 0 2-.89 2-2V2c0-1.105-.89-2-2-2m0 18H6V2h2v8l2.5-2.25L13 10V2h5v16M7 22h2v2H7v-2m4 0h2v2h-2v-2m4 0h2v2h-2v-2Z"/></svg>
            <span class="whitespace-nowrap transition-opacity duration-300 mr-2" :class="isSidebarVisuallyExtended ? 'opacity-100 visible' : 'opacity-0 invisible'">
              Book Management
            </span>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" :class="['size-3 transition-transform duration-300 origin-center mt-1', { 'rotate-180': toggleLink3 }]"><path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>
        </div>
        <!-- Menu Items -->
        <transition
        enter-active-class="transition-[max-height] duration-300 ease-in-out"
        enter-from-class="max-h-0 opacity-0 overflow-hidden"
        enter-to-class="max-h-40 opacity-100 overflow-hidden"
        leave-active-class="transition-[max-height] duration-200 ease-in-out"
        leave-from-class="max-h-40 opacity-100 overflow-hidden"
        leave-to-class="max-h-0 opacity-0 overflow-hidden"
        >
        <ul v-if="toggleLink3 && isSidebarVisuallyExtended" class="space-y-1 text-sm text-nowrap pl-12 mb-2 transition">
          <li class="flex items-center gap-0.5"><RouterLink :to="{ name: 'manage-books'}" :class="isActiveLink('/admin/books') ? 'font-semibold text-accent' : 'hover:text-accent'">Manage Books</RouterLink></li>
          <li class="flex items-center gap-0.5"><RouterLink :to="{ name: 'file-book-replacement'}" :class="isActiveLink('/admin/books/replacement') ? 'font-semibold text-accent' : 'hover:text-accent'">File Book Replacement</RouterLink></li>
        </ul>
        </transition>
      </div>

        <!-- Sidebar menu 4 -->
      <div>
        <div @click="toggleLink4 = !toggleLink4" :class="['flex items-center justify-between rounded-md cursor-pointer p-1 transition', $route.path.startsWith('/admin/transactions') ? 'bg-base-300 font-semibold' : 'hover:bg-base-300' ]">
          <div :class="['flex items-center transition-all duration-300', isSidebarVisuallyExtended ? 'gap-0 justify-center' : 'gap-2']">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" :class="[isSidebarVisuallyExtended ? 'size-7 mr-1' : 'size-6', 'ml-1 transition-all duration-300']"><g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="3.5"><rect width="30" height="36" x="9" y="8" rx="2"/><path stroke-linecap="round" d="M18 4v6m12-6v6m-14 9h16m-16 8h12m-12 8h8"/></g></svg>
            <span class="whitespace-nowrap transition-opacity duration-300 mr-2" :class="isSidebarVisuallyExtended ? 'opacity-100 visible' : 'opacity-0 invisible'">
              Transactions
            </span>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" :class="['size-3 transition-transform duration-300 origin-center mt-1', { 'rotate-180': toggleLink4 }]"><path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>
        </div>
        <!-- Menu Items -->
        <transition
        enter-active-class="transition-[max-height] duration-300 ease-in-out"
        enter-from-class="max-h-0 opacity-0 overflow-hidden"
        enter-to-class="max-h-40 opacity-100 overflow-hidden"
        leave-active-class="transition-[max-height] duration-200 ease-in-out"
        leave-from-class="max-h-40 opacity-100 overflow-hidden"
        leave-to-class="max-h-0 opacity-0 overflow-hidden"
        >
        <ul v-if="toggleLink4 && isSidebarVisuallyExtended" class="space-y-1 text-sm pl-12 mb-2">
          <li class="flex items-center justify-between gap-0.5"><RouterLink :to="{ name: 'borrowed-books' }" :class="isActiveLink('/admin/transactions/borrowed') ? 'text-accent font-semibold' : 'hover:text-accent'">Borrowed Books</RouterLink></li>
          <li class="flex items-center justify-between gap-0.5"><RouterLink :to="{ name: 'returned-books' }" :class="isActiveLink('/admin/transactions/returned') ? 'text-accent font-semibold' : 'hover:text-accent' ">Returned Books</RouterLink></li>
          <li class="flex items-center justify-between gap-0.5"><RouterLink :to="{ name: 'transaction-reports'}" :class="isActiveLink('/admin/transactions/reports') ? 'text-accent font-semibold' : 'hover:text-accent' ">Reports</RouterLink></li>
        </ul>
        </transition>
      </div>

    </div>
  </nav>
</template>
