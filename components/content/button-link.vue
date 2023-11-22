<template>
	<a
		:href="href"
		target="_blank"
		class="bg-[#dde0de] my-16 sm:text-md text-black uppercase font-bold rounded-lg px-8 py-1 inline-flex gap-2 items-center justify-center">
		<ContentSlot unwrap="p" />
	</a>
</template>

<script setup>
	defineProps({ href: String });
</script>

<style lang="scss" scoped></style>
