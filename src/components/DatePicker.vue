<script setup>
import { ref } from 'vue';

const selected = ref('');

function onChange(value) {
  selected.value = event.target.value;
}
</script>

<template>
  <div class="dropdown dropdown-start">
    <div tabindex="0" role="button" placeholder="Date" class="btn btn-sm btn-soft shadow-inner w-45 rounded-lg px-2 justify-between">
      <span class="text-md">{{ selected }}</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="size-4" viewBox="0 0 20 20"><path fill="currentColor" d="M5.673 0a.7.7 0 0 1 .7.7v1.309h7.517v-1.3a.7.7 0 0 1 1.4 0v1.3H18a2 2 0 0 1 2 1.999v13.993A2 2 0 0 1 18 20H2a2 2 0 0 1-2-1.999V4.008a2 2 0 0 1 2-1.999h2.973V.699a.7.7 0 0 1 .7-.699ZM1.4 7.742v10.259a.6.6 0 0 0 .6.6h16a.6.6 0 0 0 .6-.6V7.756L1.4 7.742Zm5.267 6.877v1.666H5v-1.666h1.667Zm4.166 0v1.666H9.167v-1.666h1.666Zm4.167 0v1.666h-1.667v-1.666H15Zm-8.333-3.977v1.666H5v-1.666h1.667Zm4.166 0v1.666H9.167v-1.666h1.666Zm4.167 0v1.666h-1.667v-1.666H15ZM4.973 3.408H2a.6.6 0 0 0-.6.6v2.335l17.2.014V4.008a.6.6 0 0 0-.6-.6h-2.71v.929a.7.7 0 0 1-1.4 0v-.929H6.373v.92a.7.7 0 0 1-1.4 0v-.92Z"/></svg>
    </div>
    <!-- Dropdown Content -->
    <div tabindex="0" class="dropdown-content w-140.5 mt-1 card bg-base-100 shadow-lg border border-base-300 p-4">
    <!-- Cally Date Picker Component -->
        <calendar-range :months="2" :value="selected" @change="onChange">
          <svg aria-label="Previous" slot="previous" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.75 19.5 8.25 12l7.5-7.5"></path></svg>
          <svg aria-label="Next" slot="next" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m8.25 4.5 7.5 7.5-7.5 7.5"></path></svg>
          <div class="flex gap-4 flex-wrap justify-center">
            <calendar-month />
            <calendar-month :offset="1" />
          </div>
        </calendar-range>
    </div>
  </div>
</template>

<!-- Cally Web Component Styles -->
<style>
calendar-range {
  svg {
    height: 16px;
    width: 16px;
    fill: none;
    stroke: currentColor;
    stroke-width: 1.5;
  }

  path {
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  &::part(button) {
    border: 0.5px solid #adb5bd;
    background-color: #fff;
    border-radius: 10px;
    width: 20px;
    height: 20px;
  }

  &::part(button):focus-visible {
    outline: 2px solid #C93400;
  }
}

calendar-month {
  --color-accent: oklch(45% 0.195 38.402);
  --color-text-on-accent: oklch(100% 0 0);
  &::part(button) {
    border-radius: 10px;
  }
  &::part(range-inner) {
    border-radius: 0;
    background-color: #b93201d4;
  }
  &::part(range-start) {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }
  &::part(range-end) {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }
  &::part(range-start range-end) {
    border-radius: 5px;
  }
}
</style>
