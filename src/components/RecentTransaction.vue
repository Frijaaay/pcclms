<template>
<div class="card bg-base-100 shadow-sm border border-base-300 rounded-xl w-full">
    <div class="card-body">
        <div class="items-start flex gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="size-8" viewBox="0 0 14 14"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m2.75 7l2 1.5l3.5-4"/><path d="M12 .5H2.5a2 2 0 0 0-2 2v11L3 12l2.5 1.5L8 12l2.5 1.5V2a1.5 1.5 0 1 1 3 0v3.5h-3"/></g></svg>
            <h2 class="text-xl font-semibold mb-2">Recent Transactions</h2>
        </div>
        <div class="overflow-x-auto">
            <table class="table table-zebra w-full">
                <thead class="text-sm text-base-content/60">
                    <tr>
                        <th>#</th>
                        <th>Librarian</th>
                        <th>Borrower</th>
                        <th>Book</th>
                        <th>Action</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="i in 3">
                        <td>4216</td>
                        <td>asd</td>
                        <td>asd</td>
                        <td class="truncate max-w-[160px]">asdasd</td>
                        <td>
                            <span :class="['badge badge-sm font-medium']">
                                asdf
                            </span>
                        </td>
                        <td class="text-sm text-base-content/70">
                            Dateee
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
</template>