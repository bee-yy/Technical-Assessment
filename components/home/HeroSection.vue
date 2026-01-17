<script setup>
import HeroImg from '@/assets/images/hero-img.png'
import HeroImgTablet from '@/assets/images/hero-img-tablet.png'
import HeroImgDesktop from '@/assets/images/hero-img-desktop.png'

</script>


<template>
    <section id=" bg-primary hero-section" class="hero-bg relative w-full  p-page-margin-mobile text-center body-text md:p-page-margin-tablet xl:p-page-margin-desktop">
        <div class="mt-[80px] flex flex-col gap-[24px] md:mt-[120px] md:gap-[32px] ">
        <div class="texts text-accent flex flex-col items-center justify-center ">
            <h1 class="hero-text">The First <span class="bg-secondary text-primary py-[5px] px-[5px] rounded-lg">Dart-Native</span> Feature Flag With DartCodeAI</h1>

            <p class="md:w-[716px]">
                Ship faster, control rollouts, and get ready for AI-powered delivery, <br>
               <span class="md:text-secondary">
                starting at just $1/month for a limited time
               </span> 
            </p>
        </div>

        <div class="hero-btns w-full button-text md:w-[716px] mx-auto ">
            <p class="hidden  md:block text-accent text-left">Valid till 15th September,2025</p>
            <div class="w-full md: flex md: flex-col gap-[8px] md:flex-row md:gap-[24px]">
                <button type="button" class="bg-secondary text-primary h-[40px] w-full rounded-md md:py-[12px] md:flex md:items-center justify-center">
                Get Access
            </button>

             <button type="button"class=" text-secondary border border-secondary h-[40px] w-full rounded-md">
               Join AI Early Access
            </button>
            </div>
             
        </div>


        <div class="hero-img absolute left-0 right-0  border-red-400 bottom-[-100px] md:bottom-[-160px] lg:bottom-[-360px] p-page-margin-mobile text-center body-text md:p-page-margin-tablet xl:p-page-margin-desktop"">
            <picture>
                <source media="(min-width: 1200px)" :srcset="HeroImgDesktop">
                <source media="(min-width: 768px)" :srcset="HeroImgTablet">
                <img :src="HeroImg" alt='an white backgrond image with a centered youtube icon'>
            </picture>
        </div>
         </div>
    </section>
</template>

<style>

:root{
    --hero-section-height:637px;
}
.hero-bg{
min-height: var(--hero-section-height);
background-image: url('~/assets/images/bg-img-mobile.jpg');
background-size: cover;
background-position: center;
background-repeat: no-repeat;
}

@media only screen and (min-width:768px) {
    
 :root{
    --hero-section-height:942px;
}
.hero-bg{
min-height: var(--hero-section-height);
background-image: url('~/assets/images/bg-img-tablet.jpg');
}   
}

@media only screen and (min-width:1280px) {
    
 :root{
    --hero-section-height:1177px;
}
.hero-bg{
min-height: var(--hero-section-height);
background-image: url('~/assets/images/bg-img-desktop.jpg');
}   
}


</style>