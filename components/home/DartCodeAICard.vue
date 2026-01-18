<script setup>
const props = defineProps({
    icon : String,
    title : String,
    description : String,
})
</script>


<template>

<div class="card flex flex-col items-center justify-center text-center gap- text-accent new-glass-effect p-8 rounded-lg" >
    <div class="card-icon mb-4 ">
        <img :src=icon :alt=title>
    </div>

   <h4 class="heading-3">
    {{ title }}
   </h4>

    <p class="body-text">
{{ description }}
    </p>
</div>
</template>


