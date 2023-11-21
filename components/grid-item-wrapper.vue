<template>
	<div class="relative group">
		<slot></slot>
		<div
			class="absolute inset-0 w-full h-full flex items-center justify-center text-center pointer-events-none"></div>
	</div>
</template>

<script setup>
	const emit = defineEmits(["toggle"]);
	defineProps({ detailsShowing: Boolean });
</script>

<style></style>
