<script setup>
import Feature from './Feature.vue';

import connectFeatureImg from '@/assets/images/connect-feature-img.png'
import connectFeatureImgLg from '@/assets/images/connect-feature-img-desktop.png'

import flagFeatureImg from '@/assets/images/flag-feature-img.png'
import flagFeatureImgLg from '@/assets/images/flag-feature-img-desktop.png'


import shipFeatureImg from '@/assets/images/ship-feature-img.png'
import shipFeatureImgLg from '@/assets/images/ship-feature-img-desktop.png'

</script>

<template>
    <section class="p-page-margin-mobile py-12 flex flex-col gap-4 md:pe-0 md:px-page-margin-tablet xl:md:px-page-margin-desktop">
<h2 class="heading-1 header-1 text-center mb-8">
    Control & Power-focused
</h2>

<div class="cards flex flex-col gap-2 md:gap-8 xl:gap-12 md:flex-row  md:overflow-x-auto md:justify-between xl:overflow-auto ">
    <Feature :title="'Connect'" :description="'Install SDK in your Dart project in 2 mins.'" :smImg="connectFeatureImg" :lgImg="connectFeatureImgLg"/>

    <Feature :title="'Create Flags'" :description="'Define features in IntelliToggle dashboard.'" :smImg="connectFeatureImg" :lgImg="connectFeatureImgLg"/>

    <Feature :title="'Ship & Control'" :description="'Flip switches anytime, see instant results.'" :smImg="connectFeatureImg" :lgImg="connectFeatureImgLg"/>
</div>

  </section>
</template>