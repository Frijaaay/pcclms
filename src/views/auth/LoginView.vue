<script setup>
import { RouterLink, useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth';
import { ref } from 'vue';

const router = useRouter();

const auth = useAuthStore();
const id_number = ref('');
const password = ref('');

const handleLogin = () => {
    // e.preventDefault();
    auth.login(id_number.value, password.value, router)
}
</script>

<template>
    <div class="flex items-center justify-center h-screen bg-[url('/src/assets/image/authbg.jpg')] bg-cover bg-center">
        <div class="items-center card card-border shadow-xl w-96 p-6 bg-base-100 text-base-content">
            <img
                class="size-44 mx-auto mb-3"
                src="/favicon.ico"
                alt="Logo"
            />
            <span class="text-2xl font-semibold text-base-content">Sign In</span>

            <form @submit.prevent="handleLogin" class="mt-4 w-full">
                <fieldset class="fieldset text-">
                    <legend class="fieldset-legend">ID Number</legend>
                    <input v-model="id_number" class="input" placeholder="ID Number" />
                    <legend class="fieldset-legend">Password</legend>
                    <input v-model="password" type="password" class="input" placeholder="Password" />
                </fieldset>
                
                <div class="flex items-center justify-between mt-4">
                    <div>
                        <label class="inline-flex items-center">
                            <input type="checkbox" class="checkbox checkbox-xs checkbox-neutral" />
                            <span class="pl-2 text-sm text-secondary-content">Remember me</span>
                        </label>
                    </div>
                    
                    <div>
                        <RouterLink
                            class="pb-1 block text-sm text-accent hover:underline"
                            to="#">
                            Forgot your password?
                            </RouterLink>
                    </div>
                </div>
            
                <div class="mt-6">
                        <button
                            type="submit"
                            :disabled="auth.loading"
                            class="btn btn-soft btn-accent w-full"
                        >
                        <span v-if="auth.loading" class="loading loading-spinner loading-sm"></span>
                        <span>Sign in</span>
                        </button>
                        <div v-if="auth.error" class="toast">
                            <div class="alert alert-error">
                                <span>{{ auth.error }}</span>
                            </div>
                        </div>
                </div>
            </form>
        </div>
    </div>
</template>