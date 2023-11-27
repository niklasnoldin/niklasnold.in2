<template>
	<swiper-container
		class="mt-8"
		:slides-per-view="slidePerView"
		:space-between="32"
		grab-cursor="true"
		ref="swiperEl">
		<ContentSlot unwrap="p" />
		<div slot="container-end" class="flex items-center justify-between py-4">
			<button
				class="bg-offwhite text-black text-sm uppercase font-bold rounded-lg px-8 py-1 inline-flex gap-2 items-center justify-center"
				@click="() => swiperEl.swiper.slidePrev()">
				<svg
					width="1.5em"
					height="1.5em"
					viewBox="0 0 20 20"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d="M18 10h-16m5 -5l-5 5l5 5"
						stroke="currentcolor"
						stroke-width="2"
						stroke-linejoin="round"
						stroke-linecap="round" />
				</svg>
				previous <span class="sr-only sm:not-sr-only">slide</span>
			</button>
			<button
				class="bg-offwhite text-black text-sm uppercase font-bold rounded-lg px-8 py-1 inline-flex gap-2 items-center justify-center"
				@click="() => swiperEl.swiper.slideNext()">
				next <span class="sr-only sm:not-sr-only">slide</span>
				<svg
					width="1.5em"
					height="1.5em"
					viewBox="0 0 20 20"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d="M2 10h16m-5 -5l5 5l-5 5"
						stroke="currentcolor"
						stroke-width="2"
						stroke-linejoin="round"
						stroke-linecap="round" />
				</svg>
			</button>
		</div>
	</swiper-container>
</template>
<script setup>
	import { register } from "swiper/element/bundle";
	register();

	defineProps({
		slidePerView: { type: Number, default: 2 },
	});

	const swiperEl = ref(null);
</script>
