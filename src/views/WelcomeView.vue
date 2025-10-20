<script setup>
import { onMounted } from 'vue';
import { RouterLink, useRouter } from 'vue-router';

const router = useRouter();

onMounted(() => {
  setTimeout(() => {
    router.push({name: 'login'})
  }, 8000);
});
</script>


<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-[url('/src/assets/image/authbg.jpg')] bg-cover bg-center px-6">
    <div class="card w-full max-w-md bg-base-100 shadow-xl p-8 text-center">
      <div class="flex justify-center mb-4">
        <div class="rounded-full bg-success/15 p-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="#009400" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-badge-check-icon lucide-badge-check"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><path d="m9 12 2 2 4-4"/></svg>
        </div>
      </div>

      <h2 class="text-2xl font-semibold text-base-content mb-2">Account Created Successfully!</h2>
      <p class="text-base-content/70 mb-6">
        Please check your email inbox for a verification link to activate your account.
      </p>

      <div class="space-y-2">
        <RouterLink :to="{name: 'login'}" class="btn btn-primary w-full">Go to Login</RouterLink>
        <!-- <button @click="console.log('No function yet')" class="btn btn-soft w-full">Resend Verification Email</button> -->
      </div>
    </div>
  </div>
</template>