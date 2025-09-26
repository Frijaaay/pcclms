<script setup>
import { ref, onMounted, onBeforeUnmount, provide } from 'vue';
import { RouterView } from 'vue-router';

// Global event listener for Search Field Focus Shortcut
const searchBarFocus = ref(null);
const handleSearchShortcut = (e) => {
  const isCtrlOrCmd = e.ctrlKey || e.metaKey;
  if (isCtrlOrCmd && e.key.toLowerCase() === 'k' ) {
    e.preventDefault()
    searchBarFocus.value?.focus()
  }
}
onMounted(() => {
  window.addEventListener('keydown', handleSearchShortcut)
});
onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleSearchShortcut)
});
provide('searchBarFocus', searchBarFocus);

</script>

<template>
  <RouterView />
</template>