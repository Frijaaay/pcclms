<script setup>
import Search from '@/components/Search.vue';
import Button from '@/components/Button.vue';
import DatePicker from '@/components/DatePicker.vue';
</script>

<template>
    <div class="card mx-4 bg-base-100 border border-base-300 shadow-sm p-4 gap-2">
      <div>
        <h2 class="card-title">Borrowed Books</h2>
        <p class="text-sm">List of Borrowed Books</p>
      </div>

      <div class="flex flex-col md:flex-row items-center w-full gap-2">
        <div class="flex-1">
          <DatePicker />
        </div>
        <div class="justify-end flex gap-2">
          <Search />
          <Button>
            <svg xmlns="http://www.w3.org/2000/svg" class="size-4" viewBox="0 0 20 20"><path fill="currentColor" d="m8.398 14.605l1.323 1.143c.29.251.323.691.075.984a.688.688 0 0 1-.976.075l-1.565-1.352a.7.7 0 0 1-.242-.53V7.938L1.171 1.155C.78.703 1.1 0 1.694 0h16.612c.594 0 .912.704.523 1.155l-5.85 6.784v11.363c0 .386-.31.698-.692.698a.695.695 0 0 1-.692-.698V7.678a.7.7 0 0 1 .17-.458l5.023-5.825H3.21L8.228 7.22a.7.7 0 0 1 .17.458v6.927Z"/></svg>
            Filter
          </Button>
          <Button>
            <svg xmlns="http://www.w3.org/2000/svg" class="size-6" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M16 12h4m-2 2v-4M4 18v-1a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1c0 .6-.4 1-1 1H5a1 1 0 0 1-1-1m8-10a3 3 0 1 1-6 0a3 3 0 0 1 6 0"/></svg>
            Add Book
          </Button>
        </div>
      </div>
      <!-- Table Container -->
      <div class="overflow-x-auto overflow-y-scroll h-130d rounded-lg">
        <table class="table table-zebra table-xs table-pin-rows">
        <!-- Table Head -->
        <thead class="table-pin-rows">
          <tr class="bg-base-200 text-center">
            <th>Book ID</th>
            <th>Title</th>
            <th>Borrower</th>
            <th>Person In Charge</th>
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
          <tr v-for="i in 20" :key="i" class="text-center">
          <td>
            {{ i * 10 ^ 100 / 5 }}
          </td>
          <td>
            <div class="font-bold">To Kill a Mocking Bird</div>
            <div class="text-sm opacity-50">Novel by Harper Lee</div>
          </td>
          <td>
            <div class="font-bold">John Doe Borrower</div>
            <div class="text-sm opacity-50">123123</div>
          </td>
          <td>
            <div class="font-bold">John Due</div>
            <div class="text-sm opacity-50">Librarian ID</div>
          </td>
          <td>
              {{ new Date(Date.now() - Math.floor(Math.random() * 30) * 24 * 60 * 60 * 1000).toLocaleDateString() }}
            <!-- <br /> -->
          </td>
          <td>
            {{
              (() => {
                const borrowed = new Date(Date.now() - Math.floor(Math.random() * 30) * 24 * 60 * 60 * 1000);
                const due = new Date(borrowed.getTime() + 3 * 24 * 60 * 60 * 1000);
                return due.toLocaleDateString();
              })()
            }}
          </td>
          <td>
            {{
              (() => {
                const start = new Date(2020, 0, 1).getTime();
                const end = Date.now();
                const randomDate = new Date(start + Math.random() * (end - start));
                return randomDate.toLocaleDateString();
              })()
            }}
          </td>
          <td>
            <span class="badge badge-success badge-soft badge-sm">{{ ['Good', 'Damaged', 'Lost'][Math.floor(Math.random() * 3)] }}</span>
          </td>
          <td>Available</td>
          <td>{{  ['Borrowed', 'Returned'] [Math.floor(Math.random() * 2)] }}</td>
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
