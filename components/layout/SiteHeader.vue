<script setup>
import { ref } from 'vue';

import LogoImg from '../../public/logo.png'
import DesktopNav from '../nav/DesktopNav.vue';
import HamburgerMenu from '../nav/HamburgerMenu.vue';
import MobileMenu from '../nav/MobileMenu.vue';

// 
 const isOpen = ref(false);
// Functions
const handleMenu = () =>{
    isOpen.value = isOpen.value ? false : true;
    console.log('Menu Open')
}


</script>


<template>
<header class="bg-transparent w-full h-[--header-height] absolute top-0 z-50 flex justify-between px-page-margin-mobile md:px-page-margin-tablet md:items-center pt-page-margin-mobile md:pt-0
xl:px-page-margin-desktop  horizontal-scrolling ">
    <div class="logo-nav flex md:w-full md:justify-between">
        <div class="logo ">
            <img 
            class="w-[--logo-width]  h-[--logo-height] object-cover"
             :src="LogoImg" 
             alt="intellitoggle's logo image"
             >
        </div>
           <DesktopNav/>
            <button class="hidden md:block primary-btn button-text"> Start Sandbox </button>
    </div>
<!-- Hamburger Menu -->
<HamburgerMenu :onMenuClick="handleMenu" :openState="isOpen"/>  
</header>
<MobileMenu  :openState="isOpen"/>
</template>

<style>
    :root{
    --header-height:59px;
    --logo-width:80px;
    --logo-height:23px;
    }

    @media only screen and (min-width:768px) {
       :root{
    --header-height:115px;
    --logo-width:206px;
    --logo-height:51px;
    }
    }
     @media only screen and (min-width:1280px) {
        :root{
    --header-height:133px;
    --logo-width:206px;
    --logo-height:51px;
    
    }}

     a.active{
        font-weight: 700;
    } </style>