<template>
	<div
		class="fixed top-0 left-0 pointer-events-none"
		:style="{
			transform: `translate(${x}px, ${y}px) translate(-50%, -50%) rotate(${
				115 + (x / width) * -140
			}deg)`,
		}">
		<div
			class="bg-green shadow-xl cursor w-10 h-10 rounded-full transition duration-200 ease-in-out"
			:style="{ transform: `scale(${scale})` }"></div>
	</div>
</template>

<script setup>
	const { x, y } = useMouse({ touch: false, type: "client" });
	const { width, height } = useWindowSize();
	const isClickable = ref(false);
	const isDown = ref(false);

	const scale = computed(() => {
		if (isDown.value) return 0.5;
		if (isClickable.value) return 0.75;
		return 1;
	});

	onMounted(() => {
		document.addEventListener("mousemove", (event) => {
			isClickable.value = !!event.target.closest("a,button");
		});
		document.addEventListener("mousedown", (event) => {
			isDown.value = true;
		});
		document.addEventListener("mouseup", (event) => {
			isDown.value = false;
		});
	});
</script>

<style>
	/* * {
		cursor: none !important;
	} */
	.cursor {
		background: radial-gradient(
				farthest-corner at 25% 25%,
				theme(colors.green),
				#fff0
			),
			radial-gradient(circle at top right, #000a 50%, #0000),
			radial-gradient(farthest-corner at bottom left, #000a 50%, #0000),
			radial-gradient(
				farthest-corner at 45% 45%,
				theme("colors.green"),
				theme("colors.black.DEFAULT") 65%,
				theme("colors.green") 75%
			);
	}
</style>
