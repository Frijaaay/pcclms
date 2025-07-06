<script setup>
import Search from '@/components/Search.vue';
import Button from '@/components/Button.vue';
</script>

<template>
    <!-- Total Librarians Card -->
<div class="flex flex-wrap justify-center-safe gap-x-20 gap-y-2 px-4 py-2">
        <!-- Total Users Card -->
        <div class="card bg-base-100 text-base-content w-72 shadow-sm border border-base-300 p-4">
            <div class="flex items-start justify-between">
                <div>
                    <p class="text-sm badge badge-ghost">Total Librarians</p>
                    <div class="flex items-center space-x-2 mt-1">
                        <p class="text-2xl font-bold text-base-content">100</p>
                    </div>
                </div>
                <div class="btn btn-sm btn-circle btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="size-12"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 20c0-1.657-2.239-3-5-3s-5 1.343-5 3m14-3c0-1.23-1.234-2.287-3-2.75M3 17c0-1.23 1.234-2.287 3-2.75m12-4.014a3 3 0 1 0-4-4.472m-8 4.472a3 3 0 0 1 4-4.472M12 14a3 3 0 1 1 0-6a3 3 0 0 1 0 6Z"/></svg>                
                </div>
            </div>
        </div>
        <!-- Total Active Cards -->
        <div class="card bg-base-100 text-base-content w-72 shadow-sm border border-base-300 p-4">
            <div class="flex items-start justify-between">
                <div>
                    <p class="text-sm badge badge-success">Active Users</p>
                    <div class="flex items-center space-x-2 mt-1">
                        <p class="text-2xl font-bold text-base-content">100</p>
                    </div>
                </div>
                <div class="btn btn-sm btn-circle btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" class="size-12" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 19c0-2.21-2.686-4-6-4s-6 1.79-6 4m18-9l-4 4l-2-2m-6 0a4 4 0 1 1 0-8a4 4 0 0 1 0 8Z"/></svg>
                </div>
            </div>
        </div>
        <!-- Total Inactive Cards -->
        <div class="card bg-base-100 text-base-content w-72 shadow-sm border border-base-300 p-4">
            <div class="flex items-start justify-between">
                <div>
                    <p class="text-sm badge badge-error badge-soft">Inactive Users</p>
                    <div class="flex items-center space-x-2 mt-1">
                        <p class="text-2xl font-bold text-base-content">100</p>
                    </div>
                </div>
                <div class="btn btn-sm btn-circle btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" class="size-12" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 19c0-2.21-2.686-4-6-4s-6 1.79-6 4m14-5l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M9 12a4 4 0 1 1 0-8a4 4 0 0 1 0 8Z"/></svg>
                </div>
            </div>
        </div>
    </div>

    <!-- Librarian Information Management Card -->
    <div class="card border-base-300 border bg-base-100 shadow-sm p-4 mx-4">
        <div class="card-header pb-4">
            <h2 class="card-title pb-2">Librarian Information Management</h2>
            <div class="flex flex-cols justify-end gap-4">
                <Button>
                    <svg xmlns="http://www.w3.org/2000/svg" class="size-6" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M16 12h4m-2 2v-4M4 18v-1a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1c0 .6-.4 1-1 1H5a1 1 0 0 1-1-1m8-10a3 3 0 1 1-6 0a3 3 0 0 1 6 0"/></svg>
                    Add Librarian</Button>
                <Search />
            </div>
        </div>
    <!-- Librarians Table -->
        <div class="overflow-x-auto overflow-y-scroll h-145 rounded-lg">
            <table class="table table-zebra table-pin-rows">
    <!-- Table Head -->
                <thead class="table-pin-rows">
                    <tr class="bg-base-200">
                        <th>
                            <label>
                                <input type="checkbox" class="checkbox checkbox-xs checkbox-accent" />
                            </label>
                        </th>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
    <!-- Table Body -->
                <tbody>
                <!-- row 1 -->
                    <tr v-for="i in 20" :key="i">
                        <th>
                            <label>
                                <input type="checkbox" class="checkbox checkbox-xs checkbox-accent" />
                            </label>
                        </th>
                        <td>
                            {{ i }}
                        </td>
                        <td>
                            <div class="flex items-center gap-3">
                                <div class="avatar">
                                    <div class="mask mask-square w-12 h-12">
                                        <img
                                            src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                                            alt="Avatar Tailwind CSS Component" />
                                        </div>
                                </div>
                            <div>
                                <div class="font-bold">Hart Hagerty</div>
                                    <div class="text-sm opacity-50">United States</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            Zemlak, Daniel and Leannon
                            <br />
                        </td>
                        <td><span class="badge badge-success badge-soft badge-sm ">Active</span></td>
                        <th>
                            <button class="btn btn-ghost btn-xs">
                                <svg class="size-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="currentColor" d="M3 9.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3z"/></svg>
                            </button>
                        </th>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>