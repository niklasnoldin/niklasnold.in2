<template>
	<NuxtPicture
		placeholder
		sizes="100vw md:66vw"
		loading="lazy"
		:class="{ 'bg-white': withBackground }"
		:img-attrs="{ class: { 'bg-white': withBackground, 'w-full': true } }" />
</template>

<script setup>
	defineProps({ withBackground: Boolean, default: false });
</script>
