<script setup>
import { ref, onMounted, computed } from 'vue'
import { RouterView, useRoute } from 'vue-router';

import Header from '@/components/Header.vue';
import Sidebar from '@/components/Sidebar.vue';
import Footer from '@/components/Footer.vue';
import Breadcrumb from '@/components/Breadcrumb.vue';

// Reactive state for sidebar width and right sidebar visibility
const sidebarWidth = ref(48)
const hasRightSidebar = ref(false)

onMounted(() => {
  hasRightSidebar.value = !!document.getElementById('right-sidebar')
});

// Extracting route metadata for breadcrumbs
const route = useRoute();

const parentPage = computed(() => {
  // Finds the name with matched route
  const matchedRoute = route.matched.slice().reverse().find(r => r.meta?.parentPage)
  return matchedRoute?.meta.parentPage || ''
});

const currentPage = computed(() => {
  // Finds the name with matched route
  const matchedRoute = route.matched.slice().reverse().find(r => r.meta?.currentPage)
  return matchedRoute?.meta.currentPage || ''
});
</script>

<template>

  <!-- Fixed Header -->
  <div class="fixed top-0 left-0 right-0 h-[60px] z-30">
    <Header />
  </div>

  <!-- Main Content (below header) -->
  <section class="relative flex pt-[60px] h-screen bg-base-200 shadow-inner">

    <!-- Left Sidebar (fixed) -->
        <div class="h-full fixed top-[60px] left-0 z-20 bg-base-100 text-base-content border-r transition-all duration-300" :style="{ width: `${sidebarWidth}px` }">
                <Sidebar @update:width="sidebarWidth = $event" />
        </div>

    <!-- Center Content -->
        <div
        class="flex flex-col w-full h-full overflow-hidden transition-all duration-300"
        :class="{ 'mr-[300px]': hasRightSidebar }"
        :style="{ marginLeft: `${sidebarWidth}px` }"
        >

      <!-- Breadcrumb or Sub-header -->
      <div class="pl-4 pt-2 text-sm font-semibold text-base-content shrink-0">
        <Breadcrumb>
          <template #firstBreadcrumb>Admin</template>
          <template v-if="parentPage" #secondBreadcrumb>{{ parentPage }}</template>
          <template v-if="currentPage" #thirdBreadcrumb>{{ currentPage }}</template>
        </Breadcrumb>
      </div>

      <!-- Scrollable View -->
      <div class="grow overflow-auto py-1">
        <RouterView />
        <Footer />
      </div>
    </div>
  </section>
</template>
