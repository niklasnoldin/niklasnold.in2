<template>
	<div
		class="rounded-full font-bold px-2 uppercase border-2 text-black backdrop-blur-sm text-center">
		<slot />
	</div>
</template>

<script setup>
	defineProps({
		color: { type: String, default: "red" },
	});
</script>
