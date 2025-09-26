<script setup>
import Search from '@/components/Search.vue';
import FilterButton from '@/components/FilterButton.vue';
import Button from '@/components/Button.vue';
import DatePicker from '@/components/DatePicker.vue';
import { computed, onMounted, ref } from 'vue';
import { useReportStore } from '@/stores/reports';

const reports = useReportStore();
const items = ref([]);
onMounted(() => {
  reports.fetchReports();
  items.value = reports.reports;
});

// Determines if the record is returned late.
const isReturnedLate = (report) => {
  if (!report.returned_at) return false;
  return new Date(report.returned_at) > new Date(report.due_at);
};

// Search Filter
const searchInput = ref('');

const filteredItems = computed(() => {
  return items.value.filter(item => {
    const matchesSearch = !searchInput.value || (
      item.id.toString().toLowerCase().includes(searchInput.value.toLowerCase()) ||
      item.title.toLowerCase().includes(searchInput.value.toLowerCase()) ||
      item.author.toLowerCase().includes(searchInput.value.toLowerCase()) ||
      item.borrower_name.toLowerCase().includes(searchInput.value.toLowerCase()) ||
      item.borrower_id.toString().toLowerCase().includes(searchInput.value.toLowerCase()) ||
      item.librarian_name.toLowerCase().includes(searchInput.value.toLowerCase()) ||
      item.librarian_id.toString().toLowerCase().includes(searchInput.value.toLowerCase())
    );

    const matchesCondition = !activeFilters.value.condition.length || 
      activeFilters.value.condition.includes(item.returned_condition);

    const matchesPenalty = !activeFilters.value.penalty.length || 
      activeFilters.value.penalty.includes(item.penalty_fee_status);

    return matchesSearch && matchesCondition && matchesPenalty;
  });
});

const handleSearch = (search) => {
  searchInput.value = search;
};

const activeFilters = ref({
  condition: [],
  penalty: []
});

const handleFilters = (filters) => {
  // Handle different filter structures depending on what FilterButton emits
  if (Array.isArray(filters)) {
    // If FilterButton emits a simple array, you might want to categorize them
    activeFilters.value.condition = filters.filter(f => 
      ['Good', 'Slightly Damaged', 'Severely Damaged', 'Lost'].includes(f)
    );
    activeFilters.value.penalty = filters.filter(f => 
      ['No Penalty', 'Paid', 'Unpaid'].includes(f)
    );
  } else if (typeof filters === 'object') {
    // If FilterButton emits an object with categorized filters
    activeFilters.value.condition = filters.condition || [];
    activeFilters.value.penalty = filters.penalty || [];
  }
};


</script>

<template>
    <div class="card mx-4 bg-base-100 border border-base-300 shadow-sm p-4 gap-2">
      <div>
        <h2 class="card-title">Reports</h2>
        <p class="text-sm">List of Reports</p>
      </div>

      <div class="flex flex-col md:flex-row items-center w-full gap-2">
        <!-- <div class="flex-1">
          <DatePicker />
        </div> -->
        <div class="justify-end flex gap-2">
          <Search @search="handleSearch" />
          <Button>
            <svg xmlns="http://www.w3.org/2000/svg" class="size-4" viewBox="0 0 512 512"><path fill="currentColor" d="M420 128.1V16H92v112.1A80.1 80.1 0 0 0 16 208v192h68v-32H48V208a48.054 48.054 0 0 1 48-48h320a48.054 48.054 0 0 1 48 48v160h-44v32h76V208a80.1 80.1 0 0 0-76-79.9Zm-32-.1H124V48h264Z"/><path fill="currentColor" d="M396 200h32v32h-32zm-280 64H76v32h40v200h272V296h40v-32H116Zm240 200H148V296h208Z"/></svg>
            Print
          </Button>
        </div>
      </div>
      <!-- Table Container -->
      <div class="overflow-x-auto overflow-y-scroll h-125 rounded-lg">
        <table class="table table-zebra table-xs table-pin-rows">
        <!-- Table Head -->
        <thead class="table-pin-rows">
          <tr class="bg-base-200 text-center">
            <th>Transaction No.</th>
            <th>Title</th>
            <th>Borrower</th>
            <th>Person In Charge</th>
            <th>Date Borrowed</th>
            <th>Date Returned</th>
            <th>Due Date</th>
            <th>Condition</th>
            <th>Penalty</th>
            <th>Action</th>
          </tr>
        </thead>
        <!-- Table Body -->
        <tbody>
          <!-- row 1 -->
          <tr v-for="report in filteredItems" :key="report.id" class="text-center">
          <td>
            <div>{{ report.id }}</div>
            <div>{{ report.return_id }}</div>
          </td>
          <td>
            <div class="font-bold">{{ report.title }}</div>
            <div class="text-sm opacity-50">{{ report.author }}</div>
          </td>
          <td>
            <div class="font-bold">{{ report.borrower_name }}</div>
            <div class="text-sm opacity-50">{{ report.borrower_id }}</div>
          </td>
          <td>
            <div class="font-bold">{{ report.librarian_name }}</div>
            <div class="text-sm opacity-50">{{ report.librarian_id }}</div>
          </td>
          <td>
              {{ report.borrowed_at }}
            <!-- <br /> -->
          </td>
          <td :class="{ 'text-red-600' : isReturnedLate(report) }">
              {{ report.returned_at }}
            <!-- <br /> -->
          </td>
          <td :class="{ 'text-red-600' : isReturnedLate(report) }">
            {{ report.due_at }}
          </td>
          <td>
            <span v-if="report.returned_condition"
              :class="[ 
                'badge badge-soft badge-sm',
                {
                  'badge-success' : report.returned_condition === 'Good',
                  'badge-warning' : report.returned_condition === 'Slightly Damaged',
                  'badge-error' : report.returned_condition === 'Severely Damaged' || report.returned_condition === 'Lost'
                }
                ]">{{ report.returned_condition }}</span>
          </td>
          <td 
            :class="{ 
              'text-red-600' : report.penalty_fee_status === 'Unpaid',
              'text-green-600' : report.penalty_fee_status === 'Paid'
              }">
            {{ report.penalty }}
          </td>
          <th>
            <div class="dropdown dropdown-end">
            <div role="button" class="btn btn-ghost btn-xs" tabindex="0">
              <svg class="size-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
              <path fill="currentColor" d="M3 9.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3z"/>
              </svg>
            </div>
            <ul class="dropdown-content menu bg-base-100 rounded-box z-1 w-32 p-2 shadow-sm" tabindex="0">
              <li><RouterLink to="#">View Details</RouterLink></li>
              <li><RouterLink to="#">Edit</RouterLink></li>
              <li><RouterLink to="#">Delete</RouterLink></li>
            </ul>
            </div>
          </th>
          </tr>
        </tbody>
        </table>
    </div>
    </div>
</template>
