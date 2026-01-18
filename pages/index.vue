<script setup lang="ts">
import FeatureCards from '~/components/home/FeatureCards.vue';
import FeatureFlag from '~/components/home/FeatureFlag.vue';
import HeroSection from '~/components/home/HeroSection.vue';
import OpenFeature from '~/components/home/OpenFeature.vue';
import Overview from '~/components/home/Overview.vue';
import SocialProof from '~/components/home/SocialProof.vue';

</script>

<template>
    <HeroSection/>
    <SocialProof/>
    <Overview/>
    <OpenFeature/>
    <FeatureCards/>
    <FeatureFlag/>
   
</template>