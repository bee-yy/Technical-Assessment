<script setup lang="ts">
import SiteFooter from './components/layout/SiteFooter.vue';
import SiteHeader from './components/layout/SiteHeader.vue';

</script>

<template>
  <div class="site-container relative w-full h-screen body-text">
  <SiteHeader/>
  <NuxtPage/>
  <SiteFooter/>
  </div>
</template>


<style>
/* Satoshi Font */
@font-face {
  font-family: 'Satoshi';
  src: url('~/assets/fonts/satoshi/Satoshi-Variable.ttf') format('truetype');
  font-weight: 300 900;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Satoshi';
  src: url('~/assets/fonts/satoshi/Satoshi-VariableItalic.ttf') format('truetype');
  font-weight: 300 900;
  font-style: italic;
  font-display: swap;
}

/* Inter Font */
@font-face {
  font-family: 'Inter';
  src: url('~/assets/fonts/inter/Inter-VariableFont_opsz,wght.ttf') format('truetype');
  font-weight: 100 900;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Inter';
  src: url('~/assets/fonts/inter/Inter-Italic-VariableFont_opsz,wght.ttf') format('truetype');
  font-weight: 100 900;
  font-style: italic;
  font-display: swap;
}



</style>