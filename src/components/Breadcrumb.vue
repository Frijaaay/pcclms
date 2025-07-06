<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="breadcrumbs text-base-content">
  <ul>
    <li>
      <slot name="firstBreadcrumb" />
    </li>
    <li v-if="$slots.secondBreadcrumb">
        <slot name="secondBreadcrumb" />
    </li>
    <li v-if="$slots.thirdBreadcrumb">
      <slot name="thirdBreadcrumb" />
    </li>
  </ul>
</div>
</template>