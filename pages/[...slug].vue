<template>
	<ContentDoc v-slot="{ doc }" :path="route.path">
		<NuxtPicture
			sizes="100vw sm:50vw md:33vw"
			placeholder
			v-if="doc.image"
			preload
			:src="doc.image.src"
			:alt="doc.image.alt"
			width="400"
			height="400"
			class="rounded-lg w-full overflow-hidden bg-current"
			:img-attrs="{ class: 'rounded-lg w-full' }" />
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
				class="bg-offwhite text-black text-sm uppercase font-bold rounded-lg px-8 py-1 inline-flex gap-2 items-center justify-center">
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
				Take me home</NuxtLink
			>
		</div>
		<ContentRenderer :value="doc" class="prose col-span-2" />
	</ContentDoc>
	<nav class="sm:col-span-2 md:col-span-3 mt-16">
		<div
			class="p-4 bg-offwhite bg-gradient-to-t from-offwhite-dark to-offwhite bg-opacity-100 rounded-xl">
			<h2 class="text-md text-center text-black font-serif mb-8 mt-4">
				Discover similar projects
			</h2>
			<ul class="grid sm:grid-cols-2 md:grid-cols-3 items-stretch gap-4">
				<li v-for="(project, idx) in similarProjects" :key="project._id">
					<Project
						:class="idx === 2 && 'sm:hidden md:flex'"
						class="h-full shadow-xl"
						:project="project" />
				</li>
			</ul>
		</div>
		<div class="text-center my-32">
			<NuxtLink
				to="/"
				class="bg-offwhite text-black text-sm uppercase font-bold rounded-lg px-8 py-1 inline-flex gap-2 items-center justify-center">
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
				Take me home instead</NuxtLink
			>
		</div>
	</nav>
</template>

<script setup>
	const route = useRoute();
	const { data: surround } = await useAsyncData("surround", () =>
		queryContent().sort().findSurround(route.path, { before: 3, after: 3 })
	);

	const similarProjects = computed(() => {
		return surround.value
			.filter((p) => p !== null)
			.reverse()
			.slice(0, 3);
	});
</script>
<style>
	.prose {
		p {
			@apply font-serif text-md mt-8 max-w-5xl;
			em,
			strong {
				@apply italic;
			}
			a {
				@apply underline text-white decoration-red decoration-dotted decoration-2 underline-offset-4 transition-colors;
				&:hover {
					@apply text-red;
				}
			}
		}
		p:has(img, picture) {
			@apply max-w-full;
		}
		blockquote {
			@apply flex my-16;
			p {
				@apply text-md lg:text-lg max-w-5xl relative border-l-4 italic border-purple pl-4;
			}
		}
		p:first-child {
			@apply mt-0;
		}
		h2 {
			@apply font-serif text-lg mt-8;
			a {
				@apply underline decoration-red;
			}
		}
		ul {
			@apply font-serif grid text-md mt-4 leading-tight list-disc list-inside;
			li {
			}
		}
		@screen sm {
			ul {
				@apply grid-cols-2;
			}
		}

		> p > img {
			@apply bg-current mb-8 mt-8;
		}
	}
</style>
