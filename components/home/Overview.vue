<script setup>
import OverviewImg from '@/assets/images/overview-img-mobile.png'
import OverviewImgTablet from '@/assets/images/overview-img-tablet.png'
import OverviewImgDesktop from '@/assets/images/overview-img-desktop.png'
</script>

<template>
    <section id="overview-section" class="py-10 horizontal-padding ">
        <h2 class="hidden md:block heading-2 gradient-text text-center mb-4 ">
            What Is IntelliToggle
        </h2>
        <!-- Left hand Side-->
        <div class="lg:flex items-center gap-6">
        <div class="lhs lg:w-[50%]">
            <h3 class="heading-3 text-header-1 ">
                Your AI Dart App’s Control Panel For Feature Releases
            </h3>

            <p class="body-text text-body-2 mt-4">
                IntelliToggle is a “Dart-Powered” feature flag that lets you turn features on/off instantly in your application without redeploying code. It allows you control roll-outs, run experiments, and fix bugs faster.
            </p>

            <h4 class="heading-3">
                Benefits
            </h4>
<ul class="body-text text-body-2 list-disc list-inside">
    <li> Toggle new features without app updates</li>
    <li> Roll out to specific users or regions</li>
    <li> Instantly rollback when needed</li>
</ul>
        </div>
        <!-- Right hand Side -->
        <div class="rhs mt-4 w-[100%] lg:w-[50%]">
            <picture class="w-full object-cover">
                <source media="(min-width: 1200px)" :srcset="OverviewImgDesktop">
                <source media="(min-width: 768px)" :srcset="OverviewImgTablet">
                <img 
                class="w-full h-full object-cover"
                :src="OverviewImg" alt="Dart App's Control Panel img">
            </picture>
        </div>
        </div>
    </section>
</template>