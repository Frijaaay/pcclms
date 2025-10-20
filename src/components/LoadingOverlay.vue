<script setup>

defineProps({
  visible: Boolean,
});
</script>

<template>
  <transition name="fade">
    <div
      v-if="visible"
      class="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999] flex items-center justify-center"
    >
      <div class="bg-white p-4 rounded-xl shadow-xl flex items-center">
        <span class="loading loading-bars loading-xl"></span>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
