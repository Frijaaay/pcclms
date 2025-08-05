<script setup>
import { computed, reactive, ref, onMounted } from 'vue';
import { onClickOutside } from '@vueuse/core';
import { useAuthStore } from '@/stores/auth';

const auth = useAuthStore();
const edit = ref(false);

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

const editableUser = reactive({
  name: '',
  email: '',
  id_number: '',
  department: '',
  role: '',
});

onMounted(() => {
  if (auth.user) {
    editableUser.name = auth.user.name;
    editableUser.email = auth.user.email;
    // editableUser.id_number = auth.user.id_number;
    editableUser.department = auth.user.department;
    editableUser.type = auth.user.type;
  }
});

const handleUpdate = async () => {
  await auth.updateMe(editableUser);

  if (auth.success) {
    edit.value = false;
    emit('close-modal');
  }
};

/** On Click Outside Event */
const closeMe = ref(null);
onClickOutside(closeMe, (event) => {
  if  (props.isOpen) {
    emit('close-modal', event);
    edit.value = false;
  }
});
</script>

<template>
  <div :class="modalClasses">
    <div ref="closeMe" class="card border-base-300 border bg-base-100 shadow-sm p-4 mx-4">
      <form @submit.prevent="handleUpdate">
      <div class="space-y-8">
        <!-- User Profile -->
        <section class="flex gap-6">
          <div class="card-header w-90">
            <h2 class="card-title font-semibold flex items-center gap-2">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" /></svg>
              </span>
              User Profile
            </h2>
            <p class="text-sm">Manage your account information and settings</p>
          </div>
          <div class="flex flex-col sm:flex-row gap-4 py-4 items-center">
            <img src="/src/assets/image/default-avatar.jpg" alt="Avatar" class="w-26 h-26 rounded-full" />
            <div class="space-y-2">
              <label class="block text-sm font-medium">Full Name</label>
              <input v-model="editableUser.name" type="text" class="input input-md bg-base-300 w-50" :disabled="!edit" required/>
      </div>
      <div class="space-y-2">
        <label class="block text-sm font-medium">ID No.</label>
          <input :value="auth.user?.id_number" type="text" class="input input-md bg-base-300 w-50" disabled/>
      </div>
      <div class="space-y-2">
        <label class="block text-sm font-medium">Email</label>
        <input v-model="editableUser.email" type="email" class="input input-md bg-base-300 w-50" :disabled="!edit" required/>
      </div>
    </div>
    </section>
    
    <section>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
        <div class="space-y-2">
          <label class="block text-sm font-medium">Department</label>
          <select v-model="editableUser.department" class="select bg-base-300 px-3 py-2 w-full" :disabled="!edit">
            <option value="IT Faculty">IT Faculty</option>
            <option value="CEAT">CEAT</option>
            <option value="STEM">STEM</option>
          </select>
        </div>
        <div class="space-y-2">
          <label class="block text-sm font-medium">Role</label>
          <select value="auth.user?.user_type.name" class="select bg-base-300 px-3 py-2 w-full" disabled>
            <option value="Admin">Admin</option>
            <option value="Librarian">Librarian</option>
            <option value="Borrower">Borrower</option>
          </select>
        </div>
        <div class="space-y-2">
          <label class="block text-sm font-medium">Type</label>
          <select v-model="editableUser.type" class="select bg-base-300 px-3 py-2 w-full" :disabled="!edit">
            <option value="Employee">Employee</option>
            <option value="JHS">JHS</option>
            <option value="SHS">SHS</option>
            <option value="College">College</option>
          </select>
        </div>
      </div>
    </section>
    
    <div class="flex justify-end gap-2 w-full">
      <button type="button" @click="emit('close-modal'), edit = false" class="btn btn-accent px-4 py-2">Close</button>
      <button v-if="edit" type="submit" class="btn btn-success btn-soft px-4 py-2" :disabled="auth.loading">
        <span v-if="auth.loading" class="loading loading-spinner loading-sm"></span>
        <span v-else>Save</span>
      </button>
      <button v-if="edit" @click="edit = false" type="button" class="btn btn-info btn-soft px-4 py-2" :disabled="auth.loading">Cancel</button>
      <button v-else @click="edit = true" type="button" class="btn btn-info btn-soft px-4 py-2">Edit</button>
    </div>
  </div>
</form>
</div>
</div>
<div v-if="auth.error" class="toast">
  <div class="alert alert-error">
    <span>{{ auth.error }}</span>
  </div>
</div>
<div v-if="auth.success" class="toast transition">
  <div class="alert alert-success">
    <span>{{ auth.success }}</span>
  </div>
</div>
</template>