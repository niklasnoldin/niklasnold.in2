<template>
	<div
		class="md-grid-wrapper mt-8"
		:class="{
			'grid-cols-6': size === 'tiny',
			'grid-cols-4': size === 'small',
			'grid-cols-2': size === 'large',
		}">
		<ContentSlot unwrap="p" />
	</div>
</template>
<script setup>
	defineProps({
		size: { type: String, default: "large" },
	});
</script>
<style>
	.md-grid-wrapper {
		@apply grid gap-4;
	}
</style>
