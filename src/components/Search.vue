<script setup>
import { inject } from 'vue';

// Injects the global function for keyboard shortcut to focus on search bar.
const searchBarFocus = inject('searchBarFocus');

// search input
const emit = defineEmits(['search']);
const search = (e) => {
    emit('search', e.target.value);
};

</script>


<template>
    <label class="input input-sm bg-base-300 shadow-inner">
        <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g
                stroke-linejoin="round"
                stroke-linecap="round"
                stroke-width="2.5"
                fill="none"
                stroke="currentColor"
            >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
            </g>
        </svg>
        <input @input="search" ref="searchBarFocus" type="search" class="grow" placeholder="Search" />
        <kbd class="kbd kbd-sm">⌘</kbd>
        <kbd class="kbd kbd-sm">K</kbd>
    </label>
</template>