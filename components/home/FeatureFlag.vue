<script setup>
import FeatureFlagImg from '@/assets/images/feature-flag-img.png'
import FeatureFlagImgTablet from '@/assets/images/feature-flag-img-tablet.png'
import FeatureFlagImgDesktop from '@/assets/images/feature-flag-img-desktop.png'
</script>

<template>
<section id="feature-flag-section" class="py-6">
    <div class="horizontal-padding md:pb-0 flex flex-col xl:items-center  xl:justify-center">
 <h2 class="heading-1 text-center gradient-text">
Dart-Powered Feature Flag
    </h2>

    <div class="feature-flag-content md:w-[88%] xl:w-[45%]">
 <h3 class="heading-2 mt-2">
Not Another Generic Feature Flag Tool
    </h3>

    <p class="body-text text-body-2 mt-2">Most tools are built for every language, which means extra layers and slower toggles. IntelliToggle is built in Dart, for Dart — so it’s faster, safer, and built for your stack.</p>
    </div>
    </div>
   
   
    <div class="feature-img w-full overflow-x-auto no-scrollbar p-page-margin-mobile md:px-page-margin-tablet xl:md:px-page-margin-desktop">
         <picture class="">
                <source media="(min-width: 1200px)" :srcset="FeatureFlagImgDesktop">
                <source media="(min-width: 768px)" :srcset="FeatureFlagImgTablet">
                <img 
                class="w-[800px]md:w-full block xl:mx-auto" 
                :src="FeatureFlagImg"  
                 alt='an white backgrond image with a centered youtube icon'>
            </picture>
    </div>

    <div class="flex items-center justify-center mt-8 lg:hidden">
    <div class="dot-pagination flex gap-1 ">
        <span class="dot inline-block w-[43px] h-[8px] rounded-full gradient-bg">  </span>
        <span class="dot inline-block w-[8px] h-[8px] rounded-full bg-[#C5C8E7]">  </span>
        <span class="dot inline-block w-[8px] h-[8px] rounded-full bg-[#C5C8E7] ">  </span>
    </div>
     </div>
</section>
</template>

<style>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

.no-scrollbar {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
</style>