<script setup >
    const props = defineProps({
        onMenuClick : Function,
        openState: Boolean,
        
    })

</script>

<template>
    <div :class="['hamburger-menu h-fit md:hidden', { 'open': openState }]"
    v-on:click="onMenuClick"
    >
        <button id="mobile-menu"
        type="button">
        <svg viewBox="0 0 24 24" fill="white" class="hamburger" width="24" height="24">
  <rect class="line top" x="3" y="5" width="18" height="1.5" rx="1"></rect>
  <rect class="line middle"x="3" y="11" width="18" height="1.5" rx="1"></rect>
  <rect class="line bottom"x="3" y="17" width="12" height="1.5" rx="1"></rect>
</svg>
    </button>
    </div>
</template>

<style>
    .hamburger-menu.open{
        /* background: red; */
    }

    .line {
  transition: all 0.3s ease;
  transform-origin: center;
}

.hamburger-menu.open .line.top {
  y: 11;
  transform: rotate(45deg);
}

.hamburger-menu.open .line.middle {
  opacity: 0;
}

.hamburger-menu.open .line.bottom {
  y: 11;
  x: 3;
  transform: rotate(-45deg);
  width: 18px;
}
</style>