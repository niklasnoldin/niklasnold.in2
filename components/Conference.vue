<template>
	<div class="rounded-lg bg-black p-4">
		<iframe
			v-if="allowed"
			src="https://niklasnoldin.whereby.com/1609b765-c697-4ced-9d3c-e6956028cb50"
			allow="camera; microphone; fullscreen; speaker; display-capture; compute-pressure"
			style="width: 100%; height: 100%"
			class="rounded overflow-hidden min-h-[500px]"></iframe>
		<div
			v-else
			class="flex min-h-[500px] flex-col items-center text-center h-full justify-center">
			<p class="font-serif text-lg mb-4 leading-none">
				Want to talk to some people?
			</p>
			<p class="mb-4 max-w-xs">
				Maybe the love of your life is waiting behind this button.
			</p>
			<button class="button" @click="allowed = true">
				enter the public video call
			</button>
			<p class="text-xs tracking-wide uppercase opacity-50 mt-4">
				Completely end-to-end encrypted
			</p>
		</div>
	</div>
</template>

<script setup>
	const allowed = ref(false);
</script>

<style lang="scss" scoped></style>
