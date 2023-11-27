<template>
	<NuxtPicture
		placeholder
		sizes="100vw md:66vw"
		loading="lazy"
		:class="{ 'bg-white': withBackground }"
		:img-attrs="{ class: 'w-full bg-white' }" />
</template>

<script setup>
	defineProps({ withBackground: Boolean });
</script>

<style lang="scss" scoped></style>
