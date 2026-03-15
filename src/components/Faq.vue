<script setup>
import { ref } from 'vue';

const faqs = ref([
  {
    question: "What is SKR staking?",
    answer: "SKR staking lets you delegate your tokens to Guardians who help secure the Solana Mobile network. You earn rewards based on network inflation.",
    isOpen: false
  },
  {
    question: "How is the staking APY calculated?",
    answer: "SKR inflation starts at 10% at TGE and decreases by 25% each year until reaching 2%. Your APY depends on current inflation and the total SKR staked.",
    isOpen: false
  },
  {
    question: "Can I stake SKR on my Seeker?",
    answer: "Yes. Stake SKR directly from your Seeker device using Seed Vault Wallet.",
    isOpen: false
  },
  {
    question: "Do I have to choose a Guardian?",
    answer: "At TGE, Solana Mobile is the only active Guardian. In the near future, more Guardians will join the network and you will choose the Guardian that you want to delegate your stake to.",
    isOpen: false
  },
  {
    question: "How long does it take to unstake my SKR?",
    answer: "Unstaking SKR takes 48 hours. During this cooldown period, your SKR is locked and does not earn staking rewards. After 48 hours, you must manually withdraw your SKR for it to appear in your wallet.",
    isOpen: false
  },
  {
    question: "Does SKR earn staking rewards during the cooldown period?",
    answer: "No. Once you unstake SKR, it stops earning staking rewards immediately, including during the 48-hour cooldown.",
    isOpen: false
  },
  {
    question: "If I already have SKR in the cooldown period, can I unstake more?",
    answer: "Yes. You can initiate additional unstaking while another amount is cooling down. However, the two unstake amounts will be combined and the cool down period will be reset to 48 hours.",
    isOpen: false
  },
  {
    question: "Can I cancel an unstake during the cooldown?",
    answer: "Yes, you can cancel an unstake request at any time during the 48-hour cooldown period.",
    isOpen: false
  }
]);

function toggleFaq(index) {
  faqs.value[index].isOpen = !faqs.value[index].isOpen;
}
</script>

<template>
  <section
    class="max-w-[1728px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 py-12 lg:py-24"
  >
    <h2
      class="text-[#95D2E6] text-4xl md:text-5xl lg:text-[64px] leading-[1.1] tracking-[-0.64px] mb-8"
    >
      FAQs
    </h2>
    <div class="flex flex-col gap-2">
      <div
        v-for="(faq, index) in faqs"
        :key="index"
        class="faq-item rounded-2xl bg-[#101618] transition-colors duration-200 overflow-hidden"
      >
        <button
          type="button"
          class="w-full flex items-start justify-between p-[30px] cursor-pointer min-h-[100px]"
          @click="toggleFaq(index)"
          :aria-expanded="faq.isOpen"
        >
          <p
            class="text-[#F6F6F5] text-xl sm:text-2xl lg:text-3xl leading-[1.1] font-normal flex-1 pr-8 text-left"
          >
            {{ faq.question }}
          </p>
          <div class="shrink-0 mt-4">
            <svg
              class="w-5 h-2.5 transition-transform duration-300 ease-in-out"
              :class="{ 'rotate-180': faq.isOpen }"
              viewBox="0 0 27 14"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M1.5 1.5L13.5 12.5L25.5 1.5"
                stroke="#F6F6F5"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </div>
        </button>
        <div
          class="grid transition-all duration-300 ease-in-out"
          :style="{ gridTemplateRows: faq.isOpen ? '1fr' : '0fr' }"
        >
          <div class="overflow-hidden">
            <div class="px-[30px] pb-[30px]">
              <p
                class="text-[#F6F6F5] text-lg leading-[1.3] tracking-[-0.36px] max-w-[600px]"
              >
                {{ faq.answer }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
