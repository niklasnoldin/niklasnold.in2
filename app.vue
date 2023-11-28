<template>
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
</template>

<script setup>
	import "@fontsource/dm-serif-display";
	import "@fontsource-variable/dm-sans";
</script>
<style>
	::selection {
		@apply bg-red text-black;
	}
	.button {
		@apply bg-offwhite  inline-flex items-center gap-2 rounded transition hover:-translate-y-px px-8 py-1 uppercase text-sm font-bold text-black focus-visible:outline-purple focus:outline-none;
		&:hover,
		&:focus-visible {
			@apply bg-gradient-to-l from-red to-purple;
		}
	}
</style>
