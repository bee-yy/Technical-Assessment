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
    <section class="horizontal-padding py-12 flex flex-col gap-4 ">
<h2 class="heading-1 header-1 text-center">
    Control & Power-focused
</h2>

<div class="cards flex flex-col gap-8">
    <Feature :title="'Connect'" :description="'Install SDK in your Dart project in 2 mins.'" :smImg="connectFeatureImg" :lgImg="connectFeatureImgLg"/>

    <Feature :title="'Create Flags'" :description="'Define features in IntelliToggle dashboard.'" :smImg="connectFeatureImg" :lgImg="connectFeatureImgLg"/>

    <Feature :title="'Ship & Control'" :description="'Flip switches anytime, see instant results.'" :smImg="connectFeatureImg" :lgImg="connectFeatureImgLg"/>
</div>

  </section>
</template>