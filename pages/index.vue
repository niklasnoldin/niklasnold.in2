<template>
	<TransitionGroup name="list">
		<Logo key="logo" class="sm:col-span-2 p-4" />
		<div key="description">
			<p class="text-md mb-4 font-serif py-4 px-6 bg-black rounded-lg">
				I'm a designer and creative coder from the Austrian alps 🏔️. I live in
				Barcelona, Spain 🏝️ and I'm available to work. Following my education 🎓
				in both design and IT, I spent many years developing web apps on a
				global scale 🌍. Now, I aim to apply my know-how 🧠 in both fields
				creatively 👩‍🎨.
			</p>
			<nav aria-label="Contact Links">
				<ul class="rounded-lg p-4 bg-black grid grid-cols-3 gap-4">
					<li>
						<a
							class="social-media hover:bg-orange transition-colors h-full text-black rounded flex items-center justify-center px-8 py-4"
							href="https://instagram.com/nippiofficial">
							Instagram
						</a>
					</li>
					<li>
						<a
							class="social-media hover:bg-purple transition-colors h-full text-black rounded flex items-center justify-center px-8 py-4"
							href="https://linkedin.com/niklasnoldin">
							Linkedin
						</a>
					</li>
					<li>
						<a
							class="social-media hover:bg-green transition-colors h-full text-black rounded flex items-center justify-center px-8 py-4"
							href="mailto:info@niklasnold.in">
							E-Mail
						</a>
					</li>
				</ul>
			</nav>
		</div>
		<div class="md:col-span-2 rounded-lg relative trippy" key="image"></div>
		<div key="time" class="bg-white bg-opacity-10 rounded-lg p-4">
			<div
				class="bg-primary shadow-lg bg-gradient-to-t from-primary to-primary-muted p-8 rounded border-t border-b-4 border-t-white border-b-black aspect-square">
				<Clock />
			</div>
			<p class="grow font-serif text-md leading-tight mt-3">
				Just in case you need the time.
			</p>
			<p class="mt-2 text-sm">It's also a stop watch. Try it out!</p>
		</div>
		<Project v-for="project in latest" :key="project._id" :project="project" />
		<MyMap key="map" />
		<Project v-for="project in rest" :key="project._id" :project="project" />
		<div
			key="imprint"
			class="flex flex-col justify-between bg-black rounded-lg py-4 px-6">
			<h2 class="text-lg font-serif italic">Imprint</h2>
			<div class="mt-4">
				<p class="">
					Copyright {{ new Date().getFullYear() }} by Niklas Noldin
				</p>
				<address class="not-italic font-semibold my-4">
					<p>Niklas Noldin</p>
					<p>Carrer de les Carretes 6/3/2</p>
					<p>08001 Barcelona</p>
				</address>
				<p>
					Love letters are accepted at
					<a
						class="underline decoration-orange"
						href="mailto:info@niklasnold.in"
						>info@niklasnold.in</a
					>
					and per post.
				</p>
				<p>
					For money laundering you can send money to
					<a
						class="underline decoration-orange"
						href="https://paypal.me/niklasnoldin"
						>my paypal</a
					>.
				</p>
				<p>
					This website is built with Vue.js, Nuxt, Nuxt Content and Tailwind
					CSS.
				</p>
				<p>
					The font used is "DM Sans" as well as "DM Serif" by the wonderful
					Colophon Foundry.
				</p>
			</div>
		</div>
	</TransitionGroup>
</template>

<script setup>
	import { Map as MyMap, Logo, Clock } from "#components";

	const { data: latest } = await useAsyncData("latestProjects", () =>
		queryContent("projects").limit(4).find()
	);
	const { data: rest } = await useAsyncData("rest", () =>
		queryContent("projects").skip(4).find()
	);
</script>

<style>
	.social-media {
		@apply bg-white bg-opacity-20 text-white;
	}

	.trippy {
		background-image: radial-gradient(
			circle at center,
			theme(colors.offwhite) 0,
			theme(colors.offwhite) 10%,
			theme(colors.transparent) calc(10% + 1px),
			theme(colors.transparent) 20%,
			theme(colors.offwhite) calc(20% + 1px),
			theme(colors.offwhite) 30%,
			theme(colors.transparent) calc(30% + 1px),
			theme(colors.transparent) 40%,
			theme(colors.offwhite) calc(40% + 1px),
			theme(colors.offwhite) 50%,
			theme(colors.transparent) calc(50% + 1px),
			theme(colors.transparent) 60%,
			theme(colors.offwhite) calc(60% + 1px),
			theme(colors.offwhite) 70%,
			theme(colors.transparent) calc(70% + 1px),
			theme(colors.transparent) 80%,
			theme(colors.offwhite) calc(80% + 1px),
			theme(colors.offwhite) 90%,
			theme(colors.transparent) calc(90% + 1px),
			theme(colors.transparent) 100%
		);
		background-position: center center;
		background-size: 100% 100%;

		transition: all 2s;
	}
	.trippy:hover {
		background-size: 110% 110%;
	}
</style>
