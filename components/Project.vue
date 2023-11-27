<template>
	<div class="p-4 bg-black flex flex-col items-start rounded-lg">
		<NuxtLink
			v-if="project.video || project.image"
			:to="project.url || project._path"
			:target="project.url ? '_blank' : '_self'"
			class="hover:opacity-75 transition-opacity">
			<video
				v-if="project.video"
				class="rounded w-full h-auto quiet"
				autoplay
				muted
				loop
				playsinline
				width="400"
				height="400">
				<source
					v-for="{ src, type } in project.video"
					:src="src"
					:type="type" />
			</video>
			<NuxtPicture
				v-if="project.image"
				sizes="100vw sm:50vw md:33vw"
				placeholder
				width="400"
				height="400"
				loading="lazy"
				:src="project.image.src"
				:alt="project.image.alt"
				class="rounded overflow-hidden bg-current"
				:img-attrs="{ class: 'rounded bg-current w-full' }" />
		</NuxtLink>
		<p v-if="project.title" class="font-serif text-md leading-tight mt-3">
			{{ project.title }}
		</p>
		<p v-if="project.description" class="text-sm mt-2 grow mb-4">
			{{ project.description }}
		</p>
		<a
			v-if="project.url"
			:href="project.url"
			target="_blank"
			class="mt-3 bg-offwhite inline-block rounded transition hover:-translate-y-px px-8 py-0.5 uppercase text-sm font-bold text-black">
			Go to app
		</a>
		<NuxtLink
			v-else
			:to="project._path"
			class="mt-3 bg-offwhite inline-block rounded transition hover:-translate-y-px px-8 py-0.5 uppercase text-sm font-bold text-black">
			Show details
		</NuxtLink>
	</div>
</template>

<script setup>
	defineProps({
		project: Object,
	});
</script>

<style lang="scss" scoped></style>
