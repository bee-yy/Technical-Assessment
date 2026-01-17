<script setup>
import OpenFeatureImg from '@/assets/images/open-feature-img.png'
import OpenFeatureImgTablet from '@/assets/images/open-feature-img-tablet.png'
import OpenFeatureImgDesktop from '@/assets/images/open-feature-img-desktop.png'
</script>

<template>
    <section id="open-feature-section" class="horizontal-padding py-10 bg-">
    <div class="open-feature-img mb-4">
    <picture>
                <source media="(min-width: 1200px)" :srcset="OpenFeatureImgDesktop">
                <source media="(min-width: 768px)" :srcset="OpenFeatureImgTablet">
                <img :src="OpenFeatureImg" alt="a text saying 'open feature.'">
            </picture>
    </div>
    <div class="open-feature-text mt-3 flex flex-col gap-4">
        <h3 class="heading-3 text-header-1">
            Seamless Feature Management with OpenFeature
        </h3>
        <p> Aortem now integrates with OpenFeature to provide developers with a powerful, standardized approach to feature flagging and dynamic configuration. Ship features faster, test safely, and optimize user experiences effortlessly.</p>
        <button type="button" class="flex button-text items-center justify-center gap-2 bg- text-accent w-full p-2 rounded-md gradient-bg ">
            Learn more 
            <span class="right-arrow-icon"> <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.75 5.75L0.75 5.75" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.75 10.75C11.75 10.75 16.75 7.06756 16.75 5.74996C16.75 4.43237 11.75 0.75 11.75 0.75" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</span>
        </button>
    </div>
    </section>
</template>