<template>
	<div class="p-4 bg-black flex flex-col items-start rounded-lg">
		<NuxtLink
			v-if="project.video || project.image"
			:to="project.url || project._path"
			:target="project.url ? '_blank' : '_self'"
			class="group w-full relative bg-[#808080] focus-visible:outline-purple focus:outline-none rounded transition-opacity">
			<div
				class="mix-blend-overlay inset-0 absolute rounded pointer-events-none opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity bg-gradient-to-br from-purple to-red"></div>
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
				:img-attrs="{
					class: 'rounded bg-current w-full',
				}" />
		</NuxtLink>
		<p
			v-if="project.title"
			class="font-serif text-md leading-tight mt-3 headline">
			<NuxtLink
				:data-content="project.title"
				:to="project.url || project._path"
				:target="project.url ? '_blank' : '_self'">
				<span>{{ project.title }}</span>
			</NuxtLink>
		</p>
		<p v-if="project.description" class="text-sm mt-2 grow mb-4">
			{{ project.description }}
		</p>
		<a
			v-if="project.url"
			:href="project.url"
			target="_blank"
			class="mt-3 button">
			Go to app
		</a>
		<NuxtLink v-else :to="project._path" class="mt-3 button">
			Show details
		</NuxtLink>
	</div>
</template>

<script setup>
	defineProps({
		project: Object,
	});
</script>

<style>
	.headline {
		a {
			@apply block relative underline decoration-dotted underline-offset-4 decoration-transparent hover:decoration-purple focus-visible:decoration-purple focus:outline-none transition;

			&::before {
				@apply w-full pointer-events-none inline bg-gradient-to-l from-red to-purple text-transparent opacity-0 transition-opacity;
				content: attr(data-content);
				position: absolute;
				background-clip: text;
			}
			&:focus::before,
			&:hover::before {
				@apply opacity-100;
			}
			span {
				@apply transition-colors text-opacity-100;
			}
			&:hover span {
				@apply text-opacity-100;
			}
		}
	}
</style>
