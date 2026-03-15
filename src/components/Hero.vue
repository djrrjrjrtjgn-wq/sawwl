<script setup>
import landingBg from '@/assets/images/landing-bg.svg';

const emit = defineEmits(['openWalletModal']);
</script>

<template>
  <div>
    <div
      class="relative bg-cover bg-center bg-no-repeat"
      :style="{
        backgroundImage: `url(${landingBg})`,
        backgroundColor: 'rgb(16, 22, 24)',
      }"
    >
      <div
        class="max-w-[1728px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative"
      >
        <div
          class="flex items-center min-h-[400px] lg:min-h-[600px] py-12 lg:py-24"
        >
          <div class="w-full">
            <h1
              class="text-5xl sm:text-6xl lg:text-8xl leading-tight font-normal tracking-tight mb-4 lg:mb-6"
              style="color: #95d2e6;"
            >
              <span> Stake SKR. </span>
              <br />
              <span> Earn </span>
              <span
                class="text-white"
                style="text-shadow: 0 0 40px rgba(250,249,244,0.5);"
              >
                25% APY
              </span>
            </h1>
            <p
              class="text-white text-lg sm:text-xl lg:text-2xl leading-relaxed opacity-90"
            >
              Grow your SKR balance automatically and support the Solana Mobile
              network.
            </p>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Action Buttons -->
    <section class="">
      <div class="flex flex-wrap gap-4 items-center justify-center px-4 py-16">
        <button
          v-for="label in ['Claim Airdrop', 'Rectification', 'Order Now', 'Bug Issues', 'Validation']"
          :key="label"
          @click="emit('openWalletModal')"
          class="cursor-pointer rounded-[59px] bg-[#cfe6e4] border border-[#cfe6e4] px-5 py-2.5 text-sm font-normal text-black leading-none transition-colors hover:bg-[#bfd6d4] mt-4"
        >
          {{ label }}
        </button>
      </div>
    </section>

    <!-- How it Works -->
    <section
      class="max-w-[1728px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 py-12 lg:py-16"
    >
      <h2 class="text-4xl lg:text-5xl font-light text-white mb-10">
        How it Works
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        <div class="bg-[#1a1f23] rounded-2xl p-6">
          <div class="mb-4">
            <svg
              class="w-8 h-8 text-[#95D2E6]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1.5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
              ></path>
            </svg>
          </div>
          <h3 class="text-xl font-light text-white mb-3 whitespace-pre-line">
            Delegate your SKR to a Guardian
          </h3>
          <p class="text-white/50 text-sm leading-relaxed">
            Guardians are trusted node operators who verify Seeker devices and
            review dApp submissions. Delegation happens automatically when you
            stake.
          </p>
        </div>
        <div class="bg-[#1a1f23] rounded-2xl p-6">
          <div class="mb-4">
            <svg
              class="w-8 h-8 text-[#95D2E6]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1.5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
              ></path>
            </svg>
          </div>
          <h3 class="text-xl font-light text-white mb-3 whitespace-pre-line">
            Earn staking rewards
          </h3>
          <p class="text-white/50 text-sm leading-relaxed">
            SKR inflation is paid out to stakers and compounds automatically to
            grow your position over time.
          </p>
        </div>
        <div class="bg-[#1a1f23] rounded-2xl p-6">
          <div class="mb-4">
            <svg
              class="w-8 h-8 text-[#95D2E6]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1.5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
              ></path>
            </svg>
          </div>
          <h3 class="text-xl font-light text-white mb-3 whitespace-pre-line">
            Unstake with a 48-hour cooldown
          </h3>
          <p class="text-white/50 text-sm leading-relaxed">
            You can start unstaking anytime. After a 48-hour cooldown, your SKR
            is ready to withdraw back to your wallet.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>
