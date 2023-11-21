<template>
	<ContentDoc v-slot="{ doc }">
		<img
			v-if="doc.image"
			:src="doc.image.src"
			:alt="doc.image.alt"
			class="rounded-lg w-full bg-current" />
		<video
			v-else-if="doc.video"
			class="rounded-lg w-full"
			autoplay
			muted
			loop
			playsinline
			width="400"
			height="400">
			<source v-for="{ src, type } in doc.video" :src="src" :type="type" />
		</video>
		<h1 class="text-xl font-serif col-span-2 leading-tight">{{ doc.title }}</h1>
		<div>
			<NuxtLink
				to="/"
				class="bg-[#dde0de] text-black text-sm uppercase font-bold rounded-lg px-8 py-1 inline-flex gap-2 items-center justify-center">
				<svg
					width="1.5em"
					height="1.5em"
					viewBox="0 0 20 20"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d="M18 10h-16m5 -5l-5 5l5 5"
						stroke="currentcolor"
						stroke-width="2"
						stroke-linejoin="round"
						stroke-linecap="round" />
				</svg>
				Back to index</NuxtLink
			>
		</div>
		<ContentRenderer :value="doc" class="prose col-span-2" />
	</ContentDoc>
</template>

<style>
	.prose {
		p {
			@apply font-serif text-md mb-8;
			em,
			strong {
				@apply italic;
			}
			a {
				@apply underline decoration-red;
			}
		}
		img {
			@apply bg-current rounded-lg mb-8 mt-8;
		}
	}
</style>
