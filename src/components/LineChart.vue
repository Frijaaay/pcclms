<script setup>
import { ref, onMounted } from 'vue'
import { Chart, registerables } from 'chart.js'
Chart.register(...registerables)

const chartRef = ref(null)

onMounted(() => {
  new Chart(chartRef.value, {
    type: 'line',
    data: {
      labels: [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
      ],
      datasets: [{
        label: 'Books Borrowed',
        data: [105, 130, 118, 145, 162, 179, 134, 110, 122, 156, 170, 185],
        borderColor: 'oklch(55% 0.195 38.402)',
        backgroundColor: 'rgba(201, 52, 0, 0.15)',
        fill: true,
        tension: 0.4,
        pointRadius: 4
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: {
            color: '#6b7280' // text-gray-500
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: { color: '#6b7280' },
          grid: { color: '#e5e7eb' }
        },
        x: {
          ticks: { color: '#6b7280' },
          grid: { display: false }
        }
      }
    }
  })
})
</script>

<template>
  <div class="card bg-base-100 shadow-sm border border-base-300 p-4 w-full h-76">
    <h2 class="text-lg font-semibold mb-2">Borrow Trends (Monthly)</h2>
    <div class="relative w-full h-full">
      <canvas ref="chartRef" class="absolute inset-0" />
    </div>
  </div>
</template>
