<script setup>
import { useBorrowStore } from '@/stores/borrow';
import { reactive } from 'vue';
import LoadingOverlay from '@/components/LoadingOverlay.vue';
import AlertMessage from '@/components/AlertMessage.vue';

const borrow = useBorrowStore();

const borrower = reactive({
  id_number: null,
});
</script>

<template>
  <LoadingOverlay :visible="borrow.loading"/>

  <AlertMessage :success="!!borrow.success" :message="borrow.success" />
  <AlertMessage :error="!!borrow.error" :message="borrow.error" />

  <div class="card mx-4 bg-base-100 border border-base-300 shadow-sm p-4 gap-2">
    <h2 class="card-title">Book Borrowing and Returning</h2>
    <p class="text-sm mb-2">Manage the borrowing and returning of book</p>

    <fieldset class="fieldset mb-2">
      <div class="w-full flex flex-row">
        <!-- Borrower ID Input -->
        <div class="w-full">
          <form @submit.prevent="borrow.fetchTransactions(borrower.id_number)">
            <legend class="fieldset-legend">Enter Borrower ID</legend>
            <input name="id_number" v-model="borrower.id_number" type="text" class="input input-soft input-sm" placeholder="Type here" required />
            <button type="submit" class="btn btn-accent btn-soft btn-sm ml-2">Submit</button>
            <button class="btn btn-soft btn-sm ml-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="size-4" viewBox="0 0 14 14">
                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                d="M6 3H4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1M3 .5H1.5a1 1 0 0 0-1 1V3M11 .5h1.5a1 1 0 0 1 1 1V3M3 13.5H1.5a1 1 0 0 1-1-1V11M11 13.5h1.5a1 1 0 0 0 1-1V11M3 9.5V11h1.5M7 11V9.5H5.5m5.5-5H9.5V3M11 8V6.5H9.5m0 3V11H11" />
              </svg>
              QR Scanner
            </button>
          </form>
        </div>
        <!-- Book ID Input -->
        <div class="w-full">
          <legend class="fieldset-legend">Enter Book ID</legend>
          <input type="text" class="input input-soft input-sm" placeholder="Type here" required />
          <button class="btn btn-accent btn-soft btn-sm ml-2">Submit</button>
          <button class="btn btn-soft btn-sm ml-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="size-4" viewBox="0 0 14 14">
              <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
              d="M6 3H4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1M3 .5H1.5a1 1 0 0 0-1 1V3M11 .5h1.5a1 1 0 0 1 1 1V3M3 13.5H1.5a1 1 0 0 1-1-1V11M11 13.5h1.5a1 1 0 0 0 1-1V11M3 9.5V11h1.5M7 11V9.5H5.5m5.5-5H9.5V3M11 8V6.5H9.5m0 3V11H11" />
            </svg>
            QR Scanner
          </button>
        </div>
      </div>
    </fieldset>

    <div v-if="borrow.borrower" class="flex flex-row gap-15 items-center px-6 mb-2 text-[16px] text-secondary">
      <h2 class="font-semibold">Borrower Name: <span class="text-base-content font-bold">{{ borrow.borrower.name }}</span></h2>
      <h2 class="font-semibold">Type: <span class="text-base-content font-bold">{{ borrow.borrower.type }}</span></h2>
      <h2 class="font-semibold">Department: <span class="text-base-content font-bold">{{ borrow.borrower.department }}</span></h2>
      <h2 class="font-semibold">Balance: <span class="text-base-content font-bold">{{ borrow.balance }}</span></h2>
      <h2 class="font-semibold ml-auto">Currently borrowing: <span class="text-base-content font-bold">{{ borrow.currently_borrowing }}</span></h2>
    </div>

    <!-- Table -->
    <div class="overflow-x-auto overflow-y-scroll h-100 rounded-lg">
      <table class="table table-zebra table-sm table-pin-rows">
      <!-- Table Head -->
      <thead class="table-pin-rows">
        <tr class="bg-base-200 text-center">
          <th>Book ID</th>
          <th>Title</th>
          <th>Date Borrowed</th>
          <th>Date Returned</th>
          <th>Due Date</th>
          <th>Condition</th>
          <th>Penalty</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <!-- Table Body -->
      <tbody>
        <!-- row 1 -->
        <tr v-for="transaction in borrow.transactions" :key="transaction.id" class="text-center">
        <td>
          {{ transaction.book_id }}
        </td>
        <td>
          <div class="font-bold">{{ transaction.title }}</div>
          <div class="text-sm opacity-50">{{ transaction.author }}</div>
        </td>
        <td>
            {{ transaction.borrowed_at }}
          <!-- <br /> -->
        </td>
        <td>
          {{ transaction.returned_at }}
        </td>
        <td>
          {{ transaction.due_at }}
        </td>
        <td>
          <span v-if="transaction.returned_condition"
            :class="[ 
            'badge badge-soft badge-sm',
            {
              'badge-success' : transaction.returned_condition === 'Good',
              'badge-warning' : transaction.returned_condition === 'Slightly Damaged',
              'badge-error' : transaction.returned_condition === 'Severely Damaged' || transaction.returned_condition === 'Lost'
            }
            ]">{{ transaction.returned_condition }}</span>
          </td>
        <td 
            :class="{ 
              'text-red-600' : transaction.penalty_fee_status === 'Unpaid',
              'text-green-600' : transaction.penalty_fee_status === 'Paid'
              }">
            {{ transaction.penalty }}
          </td>
        <td>{{ transaction.penalty_fee_status }}</td>
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
