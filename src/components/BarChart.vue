<script setup>
import { ref, onMounted } from 'vue'
import { Chart, registerables } from 'chart.js'
Chart.register(...registerables)

const chartRef = ref(null)

onMounted(() => {
  new Chart(chartRef.value, {
    type: 'bar',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [
        {
          label: 'Borrowed',
          data: [120, 135, 150, 110, 170, 190],
          backgroundColor: 'oklch(55% 0.195 38.402)' // red
        },
        {
          label: 'Returned',
          data: [100, 115, 130, 90, 150, 160],
          backgroundColor: 'oklch(54% 0.245 262.881)' // blue
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { position: 'top' }
      },
      scales: {
        y: {
          beginAtZero: true,
        }
      }
    }
  })
})
</script>

<template>
<div class="card bg-base-100 shadow-sm border border-base-300 p-4 w-auto h-76">
    <h2 class="text-lg font-semibold mb-2">Monthly Transactions</h2>
    <div class="relative w-full h-full">
        <canvas ref="chartRef" class="absolute inset-0" />
    </div>
</div>
</template>
