<script setup>
import { useRouter } from 'vue-router';
import { onMounted, reactive } from 'vue';
import { useAuthStore } from '@/stores/auth';
import Profile from '@/views/admin/ProfileModal.vue';

//Modal Event
const emit = defineEmits(['open-modal']);

const auth = useAuthStore();
const router = useRouter();

const handleLogout = () => {
  auth.logout(router);
}

</script>

<template>
<header>
  <div class="navbar bg-primary text-primary-content">
    <!-- Logo and Title -->
    <div class="flex-1 text-xl font-semibold">
      <RouterLink :to="{ name: 'admin-dashboard'}">
        <img src="/favicon.ico" alt="Logo" class="inline-block size-12 rounded-full">
      </RouterLink>
        Library Management System
    </div>

    <!-- Right Side Elements -->
    <div class="navbar-end space-x-3 pr-2">
      <p class="">{{ auth.user?.name }}</p>
      <!-- Avatar -->
      <div class="dropdown dropdown-end">
        <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar size-auto">
          <div class="w-11 rounded-full">
            <img
              alt="Profile Photo"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>

      <!-- Avatar Dropdown Menu -->
      <ul
        tabindex="0"
        class="mt-3 dropdown-content menu bg-base-100 text-base-content rounded-b-md shadow-sm border border-base-300 w-40">
        <li>
          <button @click="emit('open-modal')">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" /></svg>
            My Profile
          </button>
        </li>
        <li>
          <RouterLink to="admin/settings">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12a7.5 7.5 0 0 0 15 0m-15 0a7.5 7.5 0 1 1 15 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077 1.41-.513m14.095-5.13 1.41-.513M5.106 17.785l1.15-.964m11.49-9.642 1.149-.964M7.501 19.795l.75-1.3m7.5-12.99.75-1.3m-6.063 16.658.26-1.477m2.605-14.772.26-1.477m0 17.726-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205 12 12m6.894 5.785-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" /></svg>
            Settings
          </RouterLink>
        </li>
        <li>
          <button @click="handleLogout" class="w-full text-left">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" /></svg>
            Logout
          </button>
        </li>
      </ul>
      </div>
    </div>
  </div>
</header>

<Profile />
</template>