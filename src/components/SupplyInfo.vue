<script setup>
import SupplyChart from './SupplyChart.vue';
</script>

<template>
  <section
    class="max-w-[1728px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 py-12 lg:py-20"
  >
    <div class="flex flex-col gap-4 mb-10">
      <h2 class="text-white text-4xl lg:text-5xl font-light leading-[1.1]">
        About the Supply
      </h2>
    </div>
    <div class="flex flex-col gap-10">
      <div class="flex flex-col gap-5">
        <h3
          class="text-[#CFE6E4] text-lg uppercase tracking-[1.08px] font-normal font-rational-tw"
        >
          Details
        </h3>
        <div class="flex flex-wrap gap-5">
          <div class="flex flex-col gap-2 w-[200px]">
            <span class="text-[#95D2E6] text-base leading-[1.2] tracking-[-0.32px]">
              Total supply
            </span>
            <span class="text-white text-[28px] leading-[1.2] tracking-[-0.56px]">
              10.0B SKR
            </span>
          </div>
          <div class="flex flex-col gap-2 w-[200px]">
            <span class="text-[#95D2E6] text-base leading-[1.2] tracking-[-0.32px]">
              Circulating supply
            </span>
            <span class="text-white text-[28px] leading-[1.2] tracking-[-0.56px]">
              0 SKR
            </span>
          </div>
          <div class="flex flex-col gap-2 w-[200px]">
            <span class="text-[#95D2E6] text-base leading-[1.2] tracking-[-0.32px]">
              SKR staked
            </span>
            <span class="text-white text-[28px] leading-[1.2] tracking-[-0.56px]">
              0 SKR
            </span>
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-5">
        <h3
          class="text-[#CFE6E4] text-lg uppercase tracking-[1.08px] font-normal font-rational-tw"
        >
          Staking
        </h3>
        <div class="flex flex-wrap gap-5">
          <div class="flex flex-col gap-2 w-[200px]">
            <span class="text-[#95D2E6] text-base leading-[1.2] tracking-[-0.32px]">
              Inflation Rate
            </span>
            <span class="text-white text-[28px] leading-[1.2] tracking-[-0.56px]">
              10.0%
            </span>
          </div>
          <div class="flex flex-col gap-2 w-[200px]">
            <span class="text-[#95D2E6] text-base leading-[1.2] tracking-[-0.32px]">
              APY (current)
            </span>
            <span class="text-white text-[28px] leading-[1.2] tracking-[-0.56px]">
              25.0%
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col gap-5 mt-12 lg:mt-20">
      <h3
        class="text-[#CFE6E4] text-lg uppercase tracking-[1.08px] font-normal font-rational-tw"
      >
        Circulating Supply
      </h3>
      <SupplyChart />
    </div>
  </section>
</template>

<style scoped>
.font-rational-tw {
  font-family: 'Rational TW', sans-serif;
}
</style>
