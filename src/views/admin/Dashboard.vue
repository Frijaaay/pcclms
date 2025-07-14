<script setup>
import TotalCard from '@/components/TotalCard.vue';
import TopPatrons from '@/components/TopPatrons.vue';
import LineChart from '@/components/LineChart.vue';
import BarChart from '@/components/BarChart.vue';
import RecentTransaction from '@/components/RecentTransaction.vue';

</script>

<template>
    <!-- Section 1: Metric Cards -->
    <div class="grid grid-cols-2 lg:grid-cols-5 gap-2 mx-4 mb-2">
      <TotalCard />
    </div>

    <!-- Section 2: Charts -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-2 mx-4 mb-2">
      <LineChart />
      <BarChart />
    </div>

  <!-- Section 3: Top Users and Recent Transactions -->
  <div class="flex gap-2 mx-4 mb-2 flex-col md:flex-col lg:flex-row xl:flex-row">
  <!-- Top Patrons Card -->
    <TopPatrons />
  <!-- Recent Transactions Card -->
    <RecentTransaction />
  </div>

</template>
