<script setup>
import { ref, watch } from 'vue';
import logoUrl from '@/assets/images/solanamobile-svg.svg';

const props = defineProps({
  isDrawerOpen: Boolean
});

const emit = defineEmits(['toggleDrawer', 'openWalletModal']);

watch(() => props.isDrawerOpen, (open) => {
  document.body.style.overflow = open ? "hidden" : "visible";
});
</script>

<template>
  <nav
    class="fixed top-0 left-0 right-0 z-40 w-full h-[64px] md:h-[72px] bg-black"
    dir="ltr"
    lang="en"
  >
    <div
      class="h-full flex items-center justify-between w-full px-4 md:px-6 lg:px-8 max-w-[1728px] mx-auto"
    >
      <a href="#" class="shrink-0">
        <img :src="logoUrl" alt="Solana Mobile" />
      </a>

      <!-- Desktop Menu -->
      <div class="hidden lg:flex items-center gap-6">
        <a
          href="#"
          class="text-[#CFE6E4] font-normal text-base leading-6 tracking-[-0.32px] hover:opacity-80 transition-opacity"
        >
          Home
        </a>
        <a
          href="#"
          class="text-[#CFE6E4] font-normal text-base leading-6 tracking-[-0.32px] hover:opacity-80 transition-opacity"
        >
          Seeker
        </a>
        <a
          href="#"
          class="text-[#CFE6E4] font-normal text-base leading-6 tracking-[-0.32px] hover:opacity-80 transition-opacity"
        >
          SKR
        </a>
        <a
          href="#"
          class="text-[#CFE6E4] font-normal text-base leading-6 tracking-[-0.32px] hover:opacity-80 transition-opacity"
        >
          Developers
        </a>
        <a
          href="#"
          class="text-[#CFE6E4] font-normal text-base leading-6 tracking-[-0.32px] hover:opacity-80 transition-opacity"
        >
          Grants
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          class="text-[#CFE6E4] font-normal text-base leading-6 tracking-[-0.32px] hover:opacity-80 transition-opacity"
        >
          Blog
        </a>
        <button
          @click="emit('openWalletModal')"
          type="button"
          class="cursor-pointer rounded-[59px] bg-[#cfe6e4] border border-[#cfe6e4] px-5 py-2.5 text-sm font-normal text-black leading-none transition-colors hover:bg-[#bfd6d4]"
        >
          Connect Wallet
        </button>
      </div>

      <!-- Mobile Menu Button -->
      <div class="lg:hidden">
        <button
          @click="emit('toggleDrawer')"
          type="button"
          class="relative z-50 flex h-11 w-11 cursor-pointer select-none items-center justify-center rounded-xl bg-white/10 transition-colors hover:bg-white/15 active:bg-white/20"
          :class="{ 'hamburger-active': isDrawerOpen }"
          :aria-expanded="isDrawerOpen"
        >
          <span class="relative h-4 w-6">
            <span
              class="top-line absolute left-0 top-0 h-0.5 w-6 bg-white transition-transform duration-300"
              :class="{ 'rotate-45 translate-y-[7px]': isDrawerOpen }"
            ></span>
            <span
              class="bottom-line absolute left-0 bottom-0 h-0.5 w-6 bg-white transition-transform duration-300"
              :class="{ '-rotate-45 -translate-y-[7px]': isDrawerOpen }"
            ></span>
          </span>
        </button>
      </div>
    </div>
  </nav>

  <!-- Overlay -->
  <transition
    enter-active-class="overlay-enter-active"
    leave-active-class="overlay-leave-active"
    enter-from-class="overlay-enter-from"
    leave-to-class="overlay-leave-to"
  >
    <div
      v-if="isDrawerOpen"
      @click="emit('toggleDrawer')"
      class="fixed inset-0 bg-black/50 z-30 lg:hidden"
    ></div>
  </transition>

  <!-- Drawer -->
  <transition
    enter-active-class="drawer-enter-active"
    leave-active-class="drawer-leave-active"
    enter-from-class="drawer-enter-from"
    leave-to-class="drawer-leave-to"
  >
    <div
      v-if="isDrawerOpen"
      class="fixed top-0 right-0 h-screen w-64 bg-black border-l border-white/10 z-40 pt-20 px-4 lg:hidden overflow-y-auto"
    >
      <div class="flex flex-col gap-4 pb-6">
        <button
          type="button"
          @click="emit('toggleDrawer')"
          class="absolute top-4 right-4 h-8 w-8 rounded-full bg-white/10 transition-colors hover:bg-white/20 flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="h-6 w-6 text-white"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <a
          v-for="item in ['Home', 'Seeker', 'SKR', 'Developers', 'Grants', 'Blog']"
          :key="item"
          href="#"
          @click="emit('toggleDrawer')"
          class="text-[#CFE6E4] font-normal text-base leading-6 py-3 hover:opacity-80 transition-opacity"
        >
          {{ item }}
        </a>
        <button
          @click="emit('openWalletModal')"
          type="button"
          class="w-full cursor-pointer rounded-[59px] bg-[#cfe6e4] border border-[#cfe6e4] px-5 py-2.5 text-sm font-normal text-black leading-none transition-colors hover:bg-[#bfd6d4] mt-2"
        >
          Connect Wallet
        </button>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.overlay-enter-active, .overlay-leave-active {
  transition: opacity 0.3s ease;
}
.overlay-enter-from, .overlay-leave-to {
  opacity: 0;
}

.drawer-enter-active, .drawer-leave-active {
  transition: transform 0.3s ease;
}
.drawer-enter-from, .drawer-leave-to {
  transform: translateX(100%);
}
</style>
