<template>
	<swiper-slide>
		<ContentSlot unwrap="p" />
	</swiper-slide>
</template>
<script setup>
	import { register } from "swiper/element/bundle";
	register();
</script>
