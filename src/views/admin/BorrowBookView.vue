<template>
  <div class="card mx-4 bg-base-100 border border-base-300 shadow-sm p-4 gap-2">
    <h2 class="card-title">Book Borrowing and Returning</h2>
    <p class="text-sm mb-2">Manage the borrowing and returning of book</p>

    <fieldset class="fieldset mb-2">
      <div class="w-full flex flex-row">
        <!-- Borrower ID Input -->
        <div class="w-full">
          <legend class="fieldset-legend">Enter Borrower ID</legend>
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

    <div class="flex flex-row gap-15 items-center px-6 mb-2">
      <h2 class="font-semibold text-[15px]">Borrower Name: <span class="text-secondary font-bold">John Doe</span></h2>
      <h2 class="font-semibold text-[15px]">Type: <span class="text-secondary font-bold">College</span></h2>
      <h2 class="font-semibold text-[15px]">Department: <span class="text-secondary font-bold">CBEA</span></h2>
      <h2 class="font-semibold text-[15px]">Balance: <span class="text-secondary font-bold">0</span></h2>
      <h2 class="font-semibold text-[15px] ml-auto">Currently borrowing: <span class="text-secondary font-bold">20</span></h2>
    </div>

    <!-- Table -->
    <div class="overflow-x-auto overflow-y-scroll h-110 rounded-lg">
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
        <tr v-for="i in 20" :key="i" class="text-center">
        <td>
          {{ i * 10 ^ 100 / 5 }}
        </td>
        <td>
          <div class="font-bold">To Kill a Mocking Bird</div>
          <div class="text-sm opacity-50">Novel by Harper Lee</div>
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
