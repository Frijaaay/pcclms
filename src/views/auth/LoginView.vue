<script setup>
import { RouterLink } from 'vue-router';
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

            <form class="mt-4 w-full">
                <fieldset class="fieldset text-">
                    <legend class="fieldset-legend">Email</legend>
                    <input type="email" class="input" placeholder="Email" />
                    <legend class="fieldset-legend">Password</legend>
                    <input type="password" class="input" placeholder="Password" />
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
                    <RouterLink to="admin">
                        <button
                            type="submit"
                            class="btn btn-soft btn-accent w-full"
                        >
                        Sign in
                        </button>
                    </RouterLink> 
                </div>
            </form>
        </div>
    </div>
</template>