<script setup>
import { onMounted } from 'vue';
import { useUserStore } from '@/stores/userStore';

import Search from '@/components/Search.vue';
import Button from '@/components/Button.vue';

const users = useUserStore();

onMounted(() => {
    users.fetchBorrowers();
});
</script>

<template>
        <!-- Borrower Information Management Card -->
    <div class="card border-base-300 border bg-base-100 shadow-sm p-4 mx-4">
        <div class="card-header pb-4">
            <h2 class="card-title">Borrower Information</h2>
            <p class="text-sm pb-4">Manage list of registered borrowers</p>
            <div class="flex justify-between items-center">
                <div>
                    <h2 class="ml-1 font-semibold text-[15px]">All Borrowers: <span class="text-secondary font-bold">{{ users.borrower_count }}</span></h2>
                </div>
                <div class="flex flex-cols justify-end gap-2">
                    <Search />
                    <Button>
                        <svg xmlns="http://www.w3.org/2000/svg" class="size-4" viewBox="0 0 20 20"><path fill="currentColor" d="m8.398 14.605l1.323 1.143c.29.251.323.691.075.984a.688.688 0 0 1-.976.075l-1.565-1.352a.7.7 0 0 1-.242-.53V7.938L1.171 1.155C.78.703 1.1 0 1.694 0h16.612c.594 0 .912.704.523 1.155l-5.85 6.784v11.363c0 .386-.31.698-.692.698a.695.695 0 0 1-.692-.698V7.678a.7.7 0 0 1 .17-.458l5.023-5.825H3.21L8.228 7.22a.7.7 0 0 1 .17.458v6.927Z"/></svg>
                        Filter
                    </Button>
                    <Button>
                        <svg xmlns="http://www.w3.org/2000/svg" class="size-6" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M16 12h4m-2 2v-4M4 18v-1a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1c0 .6-.4 1-1 1H5a1 1 0 0 1-1-1m8-10a3 3 0 1 1-6 0a3 3 0 0 1 6 0"/></svg>
                        Add Borrower
                    </Button>
                </div>
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
                        <th>Type</th>
                        <th>Department</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
    <!-- Table Body -->
                <tbody>
                <!-- row 1 -->
                    <tr v-for="user in users.borrower" :key="user.id">
                        <th>
                            <label>
                                <input type="checkbox" class="checkbox checkbox-xs checkbox-accent" />
                            </label>
                        </th>
                        <td>{{ user.id }}</td>
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
                                <div class="font-bold">{{ user.name }}</div>
                                    <div class="text-sm opacity-50">{{ user.id_number }}</div>
                                </div>
                            </div>
                        </td>
                        <td>{{ user.email }}</td>
                        <td>{{ user.type }}</td>
                        <td>{{ user.department }}</td>
                        <td>
                            <span 
                                :class="['badge badge-soft badge-sm',
                                user.status == 'Active' ? 'badge-success' : 'badge-error'
                                ]">
                                {{ user.status }}
                            </span>
                        </td>
                        <th>
                            <div class="dropdown dropdown-end">
                                <div role="button" class="btn btn-ghost btn-xs" tabindex="0">
                                    <svg class="size-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="currentColor" d="M3 9.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3z"/></svg>
                                </div>
                                <ul class="dropdown-content menu bg-base-100 rounded-box z-1 w-32 p-2 shadow-sm" tabindex="0">
                                    <li><RouterLink to="#">View Profile</RouterLink></li>
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
