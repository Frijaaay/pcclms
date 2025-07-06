<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function goBack() {
  if (window.history.length > 1) {
    router.go(-1)
  } else {
    router.push({ name: 'home' }) // or '/' or any safe fallback
  }
}
</script>

<template>
  <main class="font-vt323 bg-[#0414a7] text-[#e0e2f4] min-h-screen flex items-start justify-center pt-[10%] px-4">
    <div class="w-full max-w-[640px]">
      <h1 class="text-center text-[#0414a7] text-[3.75rem] leading-[1.05] mb-[50px]">
        <span class="bg-[#aaaaaa] px-[15px] py-[2px]">Error - 404</span>
      </h1>
      <p class="text-[25px] leading-5 mb-2">An error has occurred, to continue:</p>
      <p class="text-[25px] leading-5">
        * Return to our homepage.<br />
        * Send us an e-mail about this error and try later.
      </p>
      <nav class="mt-[35px] text-center text-[25px]">
        <a @click="goBack" class="px-[9px] py-[2px] hover:bg-[#aaaaaa] hover:text-[#0414a7]">return</a>
        <span>|</span>
        <a href="#" class="px-[9px] py-[2px] hover:bg-[#aaaaaa] hover:text-[#0414a7]">report</a>
      </nav>
    </div>
  </main>
</template>
