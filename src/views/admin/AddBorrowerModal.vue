<script setup>
import { reactive, computed } from 'vue';
import { useUserStore } from '@/stores/users';

const user = useUserStore();

const props = defineProps({
    isOpen: {
        type: Boolean,
        required: true
    }
});

const emit = defineEmits(['close-modal']);

const modalClasses = computed(() => [
    'modal overflow-hidden',
    props.isOpen ? 'modal-open' : ''
]);

const createdBorrower = reactive({
    id_number: '',
    name: '',
    email: '',
    type: '',
    department: '',
});

const handleCreate = async () => {
    await user.createBorrower(createdBorrower);

    if (user.success){
        emit('close-modal')
    }
};
</script>

<template>
    <dialog :class="modalClasses">
        <form @submit.prevent="handleCreate" class="modal-box fieldset bg-base-200 border-base-300 w-md border p-4">
            <legend class="fieldset-legend">Add Borrower</legend>
            <label class="label">Name</label>
            <input v-model="createdBorrower.name" type="text" class="input" placeholder="Full Name" required/>
            <label class="label">ID Number</label>
            <input v-model="createdBorrower.id_number" type="text" class="input" placeholder="20**-******" required/>
            <label class="label">Email</label>
            <input v-model="createdBorrower.email" type="email" class="input" placeholder="Email" required/>
            <label class="label">Type</label>
            <select v-model="createdBorrower.type" class="select" required>
                <option value="JHS">JHS</option>
                <option value="SHS">SHS</option>
                <option value="College">College</option>
                <option value="Employee">Employee</option>
            </select>
            <label class="label">Department</label>
            <select v-model="createdBorrower.department" class="select" required>
                <option value="Faculty">Faculty</option>
                <option value="STEM">STEM</option>
                <option value="CEAT">CEAT</option>
                <option value="Grade 10">Grade 10</option>
            </select>

            <div class="flex justify-end gap-4 mt-2">
                <button @click="emit('close-modal')" type="reset" class="btn btn-accent btn-sm">
                    <span>Cancel</span>
                </button>
                <button class="btn btn-success btn-sm">
                    <span v-if="user.loading" class="loading loading-spinner loading-sm"></span>
                    <span v-else>Create</span>
                </button>
            </div>
        </form>
        <form method="dialog" class="modal-backdrop">
            <button @click="emit('close-modal')" />
        </form>
    </dialog>
<div v-if="user.error" class="toast">
  <div class="alert alert-error">
    <span>{{ user.error }}</span>
  </div>
</div>
<div v-if="user.success" class="toast transition">
  <div class="alert alert-success">
    <span>{{ user.success }}</span>
  </div>
</div>
</template>