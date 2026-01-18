
<script setup>
    const props = defineProps({
        openState: Boolean,
        
    })
    </script>
<template>
 <nav :class="[
  'bg-primary text-accent absolute top-[59px] z-50 w-full h-full md:hidden',
  openState ? 'block' : 'hidden']">
        <menu class="flex h-full  flex-col gap-6 items-center justify-center">
            <NuxtLink to="/" class="active"> Home</NuxtLink>
            <NuxtLink to="/about"> About</NuxtLink>
            <NuxtLink to="/pricing"> Pricing</NuxtLink>  
            <button class="primary-btn"> Start Sandbox </button>
        </menu>
        </nav>
</template>


