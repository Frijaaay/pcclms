<script setup>
import Search from '@/components/Search.vue';
import Button from '@/components/Button.vue';
</script>

<template>
    <div class="card border-base-300 border bg-base-100 shadow-sm p-4 mx-4">
        <div class="card-header pb-4">
            <h2 class="card-title pb-2">Borrower Information Management</h2>
            <div class="flex flex-cols justify-end gap-4">
                <Button>+ Add Borrower</Button>
                <Search />
            </div>
        </div>
        
        <div class="overflow-x-auto overflow-y-scroll h-145 rounded-lg">
            <table class="table table-zebra table-pin-rows">
    <!-- head -->
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