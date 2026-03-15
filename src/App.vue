<script setup>
import { ref, onMounted } from 'vue';
import Navbar from './components/Navbar.vue';
import Sidebar from './components/Sidebar.vue';
import Hero from './components/Hero.vue';
import SupplyInfo from './components/SupplyInfo.vue';
import Faq from './components/Faq.vue';
import WalletModal from './components/WalletModal.vue';

const isDrawerOpen = ref(false);
const isWalletModalOpen = ref(false);

function toggleDrawer() {
  isDrawerOpen.value = !isDrawerOpen.value;
}

function openWalletModal() {
  isWalletModalOpen.value = true;
  isDrawerOpen.value = false;
}

function closeWalletModal() {
  isWalletModalOpen.value = false;
}

onMounted(() => {
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      isDrawerOpen.value = false;
      isWalletModalOpen.value = false;
    }
  });

  // Expose to window for any external links if needed
  window.openWalletModal = openWalletModal;
});
</script>

<template>
  <div class="min-h-screen bg-black text-white font-sans selection:bg-[#95D2E6] selection:text-black">
    <Navbar 
      :is-drawer-open="isDrawerOpen" 
      @toggle-drawer="toggleDrawer" 
      @open-wallet-modal="openWalletModal" 
    />

    <main class="pt-[64px] md:pt-[72px]">
      <Sidebar @open-wallet-modal="openWalletModal" />
      
      <div class="lg:mr-[520px]">
        <Hero @open-wallet-modal="openWalletModal" />
        <SupplyInfo />
        <Faq />
      </div>
    </main>

    <WalletModal 
      :is-open="isWalletModalOpen" 
      @close="closeWalletModal" 
    />
  </div>
</template>

<style>
@import url('https://fonts.cdnfonts.com/css/pp-mori');
@import url('https://fonts.cdnfonts.com/css/rational-tw');

body {
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.font-pp-mori {
  font-family: 'PP Mori', sans-serif;
}

.font-rational-tw {
  font-family: 'Rational TW', sans-serif;
}

/* Custom transitions used in components */
.overlay-enter-active, .overlay-leave-active,
.drawer-enter-active, .drawer-leave-active {
  transition: all 0.3s ease-in-out;
}
</style>