<script setup>
import { RouterLink } from 'vue-router';
import { useAuthStore } from '@/stores/auth';
import { reactive, ref } from 'vue';
import ShowSensitiveButton from '@/components/ShowSensitiveButton.vue';

const auth = useAuthStore();

const showPassword = ref(false);

const formData = reactive({
	id_number: '',
	password: ''
});

const handleLogin = () => {
	auth.login(formData);
};
</script>

<template>
	<main class="min-h-screen flex items-center justify-center bg-[url('/src/assets/image/authbg.jpg')] bg-cover bg-center">
		<div class="items-center card shadow-xl w-102 p-10 bg-base-100 text-base-content space-y-4">
			<RouterLink :to="{ name: 'home' }">
				<img class="size-40 mx-auto" src="/favicon.ico" alt="Logo"/>
			</RouterLink>
			<h2 class="text-3xl font-bold text-center">Login to your account</h2>
			<p class="text-center text-sm text-gray-600">
				Come and start exploring books.
			</p>

			<form @submit.prevent="handleLogin" class="w-full text-sm">
				<label class="fieldset-legend">Username</label>
				<input v-model="formData.id_number" name="username" class="input" placeholder="ID Number (e.g. 2025-123456)" title="ID number (e.g. 2025-123456)" required/>
				
				<label class="fieldset-legend">Password</label>
				<div class="relative">
					<input v-model="formData.password" :type="showPassword ? 'text' : 'password'" name="password" class="input pr-12" placeholder="Password" required/>
					<ShowSensitiveButton v-model="showPassword"/>
				</div>
				
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
				
				<div class="mt-2">
					<button type="submit" :disabled="auth.loading" class="btn btn-soft btn-accent w-full">
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

			<div class="divider">or</div>
			<p class="text-center text-sm">
				Don't have an account yet?
				<RouterLink :to="{ name: 'register' }" class="link link-primary">Register here</RouterLink>.
			</p>
		</div>
	</main>
</template>