<script setup>
const props = defineProps({
    title:String,
    description:String,
    smImg:String,
    lgImg:String,
})
</script>

<template>
    <div class="feature-card flex  flex-col gap-2 md:w-[40%]">
        <div class="feature-img-wrapper ">
            <picture>
                <source media="(min-width: 1200px)" :srcset="lgImg">
               
                <img :src="smImg" :alt=title>
            </picture>
        </div>
        <h4 class="heading-3 header-2 font-semibold">
        {{props.title}}
        </h4>
        <p class="body-text text-body-2">{{props.description}}</p>

        <button type="button" class="text-secondary border-2 border-secondary py-2 px-4 rounded-md w-[243px] ">
            View Documentation
        </button>
    </div>
</template>