<script setup>
import { computed, onMounted, reactive } from 'vue';
import { useAuthStore } from '@/stores/auth';

const auth = useAuthStore();

// Form register data
const formData = reactive({
  name: '',
  id_number: '',
  email: '',
  type: '',
  department: ''
});

const departmentOptions = {
  Student: {
    JHS: ['Grade 7', 'Grade 8', 'Grade 9', 'Grade 10'],
    SHS: ['Grade 11', 'Grade 12'],
    College: ['CBEA', 'CEAT', 'ICS', 'CAS'],
  },
  Employee: {
    Employees: ['Teaching', 'Non-Teaching', 'Maintenance', 'Administrative']
  }
};
</script>

<template>
	<div class="min-h-screen flex items-center justify-center bg-[url('/src/assets/image/authbg.jpg')] bg-cover bg-center">
		<div class="items-center card shadow-xl w-110 p-8 bg-base-100 text-base-content">
      <RouterLink :to="{ name: 'home' }">
				<img class="size-40 mx-auto" src="/favicon.ico" alt="Logo"/>
			</RouterLink>
      <h2 class="text-3xl font-bold text-center">Create an account</h2>
			<p class="text-center text-sm text-gray-600">
				Join the PCC Library and start exploring our collection.
      </p>

        <!-- Register Form -->
        <form @submit.prevent="auth.register(formData)" class="text-sm">
            <label class="fieldset-legend">Full Name</label>
            <input v-model="formData.name" name="full_name" class="input w-full" placeholder="Full Name" required/>

            <label class="fieldset-legend">ID Number</label>
            <input v-model="formData.id_number" name="username" class="input w-full" placeholder="e.g. 2025-123456" required />

            <label class="fieldset-legend">Email</label>
            <input v-model="formData.email" name="email" type="email" class="input w-full" placeholder="e.g. 2025-123456@pcc.edu.ph" required />
            
            <div class="space-y-4 mt-4 mb-2">
              <select v-model="formData.type" class="select w-full" required>
                <option disabled selected hidden value="">What are you?</option>
                <option value="Student">Student</option>
                <option value="Employee">Employee</option>
              </select>

              <select v-model="formData.department" class="select w-full" :disabled="!formData.type" required>
                <option disabled selected hidden value="">Which department are you?</option>
                <optgroup 
                v-for="(levels, groupName) in departmentOptions[formData.type]" 
                :label="groupName"
                :key="groupName"
                >
                  <option v-for="level in levels" :key="level" :value="level">{{ level }}</option>
                </optgroup>
              </select>
            </div>
          
          <p class="text-sm text-gray-600">
              <input type="checkbox" class="checkbox checkbox-neutral checkbox-sm m-1" required/>
              I have read the 
              <a href="#" class="link link-primary">
                Terms of Service
              </a> 
              and 
              <a href="#" class="link link-primary">
                Privacy Policy
              </a>
              .
            </p>

          <div>
            <button
              type="submit"
              :disabled="auth.loading"
              class="btn btn-soft btn-accent w-full"
            >
              <span v-if="auth.loading" class="loading loading-spinner loading-sm"></span>
              <span>Sign up</span>
            </button>
            <div v-if="auth.error" class="toast">
              <div class="alert alert-error">
                <span>{{ auth.error }}</span>
              </div>
            </div>
          </div>
        </form>

        <div class="divider my-2">or</div>

        <p class="text-center text-sm">
          Already have an account?
          <RouterLink :to="{ name: 'login' }" class="link link-primary">Login here</RouterLink>.
        </p>
    </div>
  </div>
</template>
