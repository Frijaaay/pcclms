<script setup>
import { ref, onMounted, onBeforeUnmount, provide } from 'vue';
import { RouterView } from 'vue-router';

// Global event listener for Search Field Focus Shortcut
const searchInput = ref(null);
const handleSearchShortcut = (e) => {
  const isCtrlOrCmd = e.ctrlKey || e.metaKey;
  if (isCtrlOrCmd && e.key.toLowerCase() === 'k' ) {
    e.preventDefault()
    searchInput.value?.focus()
  }
}
onMounted(() => {
  window.addEventListener('keydown', handleSearchShortcut)
});
onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleSearchShortcut)
});
provide('searchInput', searchInput);

</script>

<template>
  <RouterView />
</template>