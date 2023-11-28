<template>
	<div class="relative quiet">
		<button
			class="absolute bottom-2 left-2 w-8 h-8 rounded-full bg-purple hover:scale-105 focus:outline-none focus-visible:outline-black transition-transform"
			@click="toggleMode">
			<span class="sr-only">Toggle Mode</span>
		</button>
		<div class="absolute flex gap-4 top-0 right-0 stopwatch-controls">
			<button
				:disabled="!isStopwatch"
				class="w-8 h-8 rounded-full bg-purple hover:scale-105 transition disabled:opacity-50"
				@click="running ? pauseStopwatch() : startStopwatch()">
				<span class="sr-only">{{ running ? "start" : "pause" }} stopwatch</span>
			</button>
			<button
				:disabled="!isStopwatch"
				class="w-6 h-6 rounded-full bg-purple hover:scale-105 transition disabled:opacity-50"
				@click="resetStopwatch">
				<span class="sr-only">reset stopwatch</span>
			</button>
		</div>
		<div class="flex flex-col items-center gap-1 absolute bottom-0 right-0">
			<svg
				class="w-4 h-4 stroke-purple"
				width="20"
				height="20"
				viewBox="0 0 20 20"
				fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<circle cx="10" cy="10" r="9" stroke-width="2" />
				<ellipse cx="10" cy="10" rx="4" ry="10" stroke-width="2" />
				<path d="M1 7h18" stroke-width="2" />
				<path d="M1 13h18" stroke-width="2" />
			</svg>
			<p class="text-purple text-xs font-extrabold">UTC+1</p>
		</div>
		<svg
			width="400"
			height="400"
			viewBox="0 0 401 401"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			class="w-full h-full inset-0">
			<circle
				cx="200"
				cy="200"
				r="195"
				stroke-width="10"
				class="stroke-purple" />

			<g>
				<path
					d="M0 0l-4 -25l10 15l8 -20l8 20l8 -30l8 30l8 -20l8 20 l10 -15l-4 25z"
					class="stroke-orange"
					stroke-width="5"
					stroke-linejoin="round"
					transform="translate(180 120) scale(0.66)" />
				<text
					x="200"
					y="140"
					style="font-weight: bold"
					class="fill-orange"
					fill="black"
					text-anchor="middle"
					dominant-baseline="middle">
					NIPPI
				</text>
			</g>
			<path
				:transform="`rotate(${degrees.minutes} 200 200)`"
				d="M200 200v-150"
				class="stroke-purple"
				:class="transitioning && 'transition duration-500'"
				stroke-width="10" />
			<path
				:transform="`rotate(${degrees.seconds} 200 200)`"
				d="M200 200v-155"
				class="stroke-purple"
				:class="transitioning && 'transition duration-500'"
				stroke-width="2" />
			<path
				:transform="`rotate(${degrees.hours} 200 200)`"
				d="M200 200v-75"
				class="stroke-purple"
				:class="transitioning && 'transition duration-500'"
				stroke-width="10" />
			<circle cx="200" cy="200" r="10" class="fill-purple" />
			<g v-for="i in 12" :transform="`rotate(${(i / 12) * 360} 200 200)`">
				<text
					x="200"
					y="30"
					style="font-weight: bold"
					:transform="i > 3 && i < 9 ? 'rotate(180 200 30)' : ''"
					class="fill-purple"
					fill="black"
					text-anchor="middle"
					dominant-baseline="middle">
					{{ i }}
				</text>
			</g>
		</svg>
	</div>
</template>

<script setup>
	const isStopwatch = ref(false);
	const running = ref(false);
	const singleRotation = ref(false);
	const transitioning = ref(false);
	const stopwatchTime = ref(0);
	const timestamp = useTimestamp({ offset: 0 });
	const animationTimestamp = ref(null);

	function toggleMode() {
		const wasStopwatch = isStopwatch.value;
		if (wasStopwatch) {
			singleRotation.value = true;
			setTimeout(() => {
				animationTimestamp.value = (timestamp.value % 86_400_000) + 500;
				transitioning.value = true;
				setTimeout(() => {
					isStopwatch.value = !isStopwatch.value;
				}, 5);
			});
		}
		if (!wasStopwatch) {
			singleRotation.value = true;
			setTimeout(() => {
				animationTimestamp.value =
					(stopwatchTime.value % 86_400_000) + (running.value ? 500 : 0);
				isStopwatch.value = !isStopwatch.value;
				transitioning.value = true;
			}, 5);
		}

		setTimeout(() => {
			singleRotation.value = false;
			transitioning.value = false;
			animationTimestamp.value = null;
		}, 500);
	}

	watch(timestamp, (newValue, oldValue) => {
		if (!running.value) return;
		stopwatchTime.value += newValue - oldValue;
	});

	function startStopwatch() {
		running.value = true;
	}

	function pauseStopwatch() {
		running.value = false;
	}

	function resetStopwatch() {
		singleRotation.value = true;
		setTimeout(() => {
			stopwatchTime.value = 0;
			animationTimestamp.value = running.value ? 500 : 0;
			transitioning.value = true;
		});
		setTimeout(() => {
			singleRotation.value = false;
			transitioning.value = false;
			animationTimestamp.value = null;
		}, 500);
	}

	const degrees = computed(() => {
		if (animationTimestamp.value !== null) {
			const millisecondsToday = animationTimestamp.value % 86_400_000;
			const hoursToday =
				millisecondsToday / (60 * 60 * 1000) + (isStopwatch.value ? 0 : 1);
			const minutesToday = millisecondsToday / (60 * 1000);
			const secondsToday = millisecondsToday / 1000;
			return isStopwatch.value
				? {
						hours: (minutesToday * (360 / 60)) % 360,
						minutes: (secondsToday * (360 / 60)) % 360,
						seconds: (millisecondsToday * (360 / 1000)) % 360,
				  }
				: {
						hours: ((hoursToday % 12) * (360 / 12)) % 360,
						minutes: (minutesToday * (360 / 60)) % 360,
						seconds: (secondsToday * (360 / 60)) % 360,
				  };
		}
		if (isStopwatch.value) {
			const millisecondsToday = stopwatchTime.value % 86_400_000;
			const minutesToday = millisecondsToday / (60 * 1000);
			const secondsToday = millisecondsToday / 1000;
			return {
				hours:
					(minutesToday * (360 / 60)) % (singleRotation.value ? 360 : Infinity),
				minutes:
					(secondsToday * (360 / 60)) % (singleRotation.value ? 360 : Infinity),
				seconds:
					(millisecondsToday * (360 / 1000)) %
					(singleRotation.value ? 360 : Infinity),
			};
		}
		const millisecondsToday = timestamp.value % 86_400_000;
		const hoursToday = millisecondsToday / (60 * 60 * 1000) + 1;
		const minutesToday = millisecondsToday / (60 * 1000);
		const secondsToday = millisecondsToday / 1000;
		return {
			hours:
				((hoursToday % 12) * (360 / 12)) %
				(singleRotation.value ? 360 : Infinity),
			minutes:
				(minutesToday * (360 / 60)) % (singleRotation.value ? 360 : Infinity),
			seconds:
				(secondsToday * (360 / 60)) % (singleRotation.value ? 360 : Infinity),
		};
	});
</script>

<style>
	.stopwatch-controls {
		transform-origin: center;
		transform: translate(-1.7rem, 1.7rem) translate(50%, -50%) rotate(55deg);
	}

	.digit-enter-active,
	.digit-leave-active {
		@apply transition;
	}
</style>
