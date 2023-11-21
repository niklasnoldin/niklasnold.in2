<template>
	<div class="text-left opacity-100 leading-none flex flex-col justify-between">
		<h1
			class="text-lg md:text-xl xl:text-2xl w-full tracking-tighter text-left font-serif">
			n<span class="font-sans -translate-y-2 inline-block">i</span>k<span
				class="font-sans -translate-y-2 inline-block"
				>l</span
			>a<span class="font-sans -translate-y-2 inline-block">s</span><br />n<span
				class="font-sans -translate-y-2 inline-block"
				>o</span
			>l<span class="font-sans -translate-y-2 inline-block">d</span>i<span
				class="font-sans -translate-y-2 inline-block"
				>n</span
			>
		</h1>
		<p class="tracking-wider md:text-md xl:text-lg font-serif">
			I'm a<span
				v-show="'aeiou'.includes(title[0])"
				class="w-0 overflow-visible relative bottom-4 -rotate-6 font-comic text-base inline-block"
				>n</span
			>{{ " " }}<span class="italic text-purple">{{ title }}</span
			>.
		</p>
	</div>
</template>

<script setup>
	const titles = [
		"creative coder",
		"motion designer",
		"graphic designer",
		"web developer",
		"VJ",
		"digital artist",
	];

	let index = 0;
	let direction = "down";
	const PAUSE_TIME = 3500;
	const ANIMATION_DURATION = 500;
	// let perCharDuration = ANIMATION_DURATION / titles[index].length;
	let perCharDuration = 50;

	const title = ref(titles[index]);

	function animate() {
		if (title.value.length === 0) {
			index = (index + 1) % titles.length;
			direction = "up";
			// perCharDuration = ANIMATION_DURATION / titles[index].length;
			perCharDuration = 50;
		}
		if (title.value.length === titles[index].length) {
			direction = "down";
		}
		if (direction === "down") {
			title.value = title.value.substring(0, title.value.length - 1);
		} else {
			title.value += titles[index][title.value.length];
			if (title.value.length === titles[index].length) {
				setTimeout(animate, PAUSE_TIME);
				return;
			}
		}

		setTimeout(animate, perCharDuration);
	}
	onMounted(() => setTimeout(animate, PAUSE_TIME));
</script>
