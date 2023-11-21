<template>
	<div
		class="md-grid-wrapper mt-8"
		:class="size === 'small' ? 'grid-cols-4' : 'grid-cols-2'">
		<ContentSlot unwrap="p" />
	</div>
</template>
<script setup>
	defineProps({
		size: String,
	});
</script>
<style>
	.md-grid-wrapper {
		@apply grid gap-4;
	}
</style>
