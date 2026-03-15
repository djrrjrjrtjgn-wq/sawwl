<script setup>
import skrLogo from '@/assets/images/skr-logo.svg';

const emit = defineEmits(['openWalletModal']);
</script>

<template>
  <div>
    <!-- Desktop Sidebar -->
    <aside
      class="hidden lg:flex lg:fixed lg:right-0 lg:top-[72px] lg:h-[calc(100vh-72px)] lg:w-[520px] lg:flex-col lg:bg-[#1D2323] lg:border-l lg:border-white/5 lg:z-40"
    >
      <div class="flex items-end justify-between lg:px-6 pt-4 pb-4">
        <h2
          class="text-[1.75rem] font-normal text-white leading-none font-pp-mori"
        >
          SKR Staking
        </h2>
        <div class="text-right">
          <span
            class="block text-sm uppercase tracking-[1.5px] text-[#95D2E6] mb-1 font-rational-tw"
          >
            Current Yield
          </span>
          <div class="flex items-center justify-end">
            <span
              class="text-[2.5rem] font-light text-[#faf9f4] leading-none [text-shadow:0_0_40px_rgba(250,249,244,0.5)] font-pp-mori"
            >
              25%
            </span>
          </div>
        </div>
      </div>
      <div class="flex-1 overflow-y-auto px-6 pb-6">
        <div class="w-full flex-1 flex flex-col">
          <div
            class="rounded-3xl bg-[#0D1615] overflow-hidden"
            style="height: 340px"
          >
            <div
              class="relative border border-white/10 rounded-2xl bg-[#0D1615] h-full flex flex-col p-6 items-center justify-center text-center"
            >
              <img
                alt="SKR"
                class="size-20 mb-6"
                :src="skrLogo"
              />
              <p class="text-xl font-medium text-white leading-relaxed max-w-[380px] font-pp-mori">
                SKR will be available to stake on <br /> January 21, 2AM UTC.
              </p>
              <button
                @click="emit('openWalletModal')"
                type="button"
                class="mt-12 flex cursor-pointer items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-base font-medium text-black transition-colors hover:bg-white/90"
              >
                <svg
                  aria-hidden="true"
                  class="size-5 text-black"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3"
                  ></path>
                </svg>
                Connect Wallet
              </button>
            </div>
          </div>
        </div>
      </div>
    </aside>

    <!-- Mobile Sidebar Section -->
    <div class="lg:hidden bg-[#1D2323]">
      <div
        class="max-w-[1728px] mx-auto px-4 sm:px-8 pt-6 pb-6"
      >
        <div
          class="flex items-end justify-between pt-4 pb-4"
        >
          <h2
            class="text-[1.75rem] font-normal text-white leading-none font-pp-mori"
          >
            SKR Staking
          </h2>
          <div class="text-right">
            <span
              class="block text-sm uppercase tracking-[1.5px] text-[#95D2E6] mb-1 font-rational-tw"
            >
              Current Yield
            </span>
            <div class="flex items-center justify-end">
              <span
                class="text-[2.5rem] font-light text-[#faf9f4] leading-none [text-shadow:0_0_40px_rgba(250,249,244,0.5)] font-pp-mori"
              >
                25%
              </span>
            </div>
          </div>
        </div>
        <div
          class="w-full flex flex-col space-y-4"
        >
          <div
            class="rounded-3xl bg-[#0D1615] overflow-hidden p-6 flex flex-col items-center justify-center text-center border border-white/10"
          >
            <img
              alt="SKR"
              class="size-20 mb-6"
              :src="skrLogo"
            />
            <p class="text-xl font-medium text-white leading-relaxed max-w-[380px] font-pp-mori">
              SKR will be available to stake on <br /> January 21, 2AM UTC.
            </p>
            <button
              @click="emit('openWalletModal')"
              type="button"
              class="mt-12 flex cursor-pointer items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-base font-medium text-black transition-colors hover:bg-white/90"
            >
              <svg
                aria-hidden="true"
                class="size-5 text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3"
                ></path>
              </svg>
              Connect Wallet
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.font-pp-mori {
  font-family: 'PP Mori', sans-serif;
}
.font-rational-tw {
  font-family: 'Rational TW', sans-serif;
}
</style>
