<template>
	<TransitionGroup name="list">
		<Logo key="logo" class="lg:col-span-2 p-4" />
		<div
			key="description"
			class="md:col-span-2 lg:col-span-1 flex flex-col justify-between">
			<p
				class="text-md sm:text-base md:text-md mb-4 font-serif py-4 px-6 bg-black rounded-lg">
				I'm a designer and creative coder from the Austrian alps 🏔️. I live in
				Barcelona, Spain 🏝️ and I'm available to work. Following my education 🎓
				in both design and IT, I spent many years developing web apps on a
				global scale 🌍. Now, I aim to apply my know-how 🧠 in both fields
				creatively 👩‍🎨.
			</p>
			<nav aria-label="Contact Links">
				<ul
					class="rounded-lg font-medium p-4 bg-black grid md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3 gap-4">
					<li>
						<a
							class="hover:bg-white bg-orange transition-colors h-full text-black rounded flex items-center justify-center px-8 py-4"
							href="https://instagram.com/nippiofficial"
							target="_blank">
							Instagram
						</a>
					</li>
					<li>
						<a
							class="hover:bg-white bg-purple transition-colors h-full text-black rounded flex items-center justify-center px-8 py-4"
							href="https://linkedin.com/in/niklasnoldin"
							target="_blank">
							Linkedin
						</a>
					</li>
					<li>
						<a
							class="hover:bg-white bg-green transition-colors h-full text-black rounded flex items-center justify-center px-8 py-4"
							href="mailto:info@niklasnold.in">
							E-Mail
						</a>
					</li>
				</ul>
			</nav>
		</div>
		<div class="md:col-span-2 rounded-lg relative trippy" key="hireMe">
			<svg
				class="w-full h-full blur-sm opacity-25 mix-blend-luminosity"
				width="200"
				height="100"
				viewBox="0 0 200 100"
				fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<text
					class="fill-purple text-lg font-serif"
					alignment-baseline="middle"
					text-anchor="middle"
					x="100"
					y="33">
					hire me
				</text>
				<text
					class="fill-purple text-lg font-serif"
					alignment-baseline="middle"
					text-anchor="middle"
					x="100"
					y="66">
					today
				</text>
			</svg>
		</div>
		<div key="time" class="bg-white bg-opacity-10 rounded-lg p-4">
			<div
				class="bg-offwhite shadow-lg bg-gradient-to-b from-offwhite to-offwhite-muted p-4 md:p-4 xl:p-8 rounded border-t border-b-4 border-t-white border-b-offwhite-dark aspect-square">
				<Clock />
			</div>
			<p class="grow font-serif text-md leading-tight mt-3">
				Just in case you need the time.
			</p>
			<p class="mt-2 text-sm">It's also a stop watch. Try it out!</p>
		</div>
		<Project v-for="project in latest" :key="project._id" :project="project" />
		<div key="map">
			<ClientOnly>
				<Map />
			</ClientOnly>
		</div>

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
	const { data: latest } = await useAsyncData("latestProjects", () =>
		queryContent("projects").limit(4).find()
	);
	const { data: rest } = await useAsyncData("rest", () =>
		queryContent("projects").skip(4).find()
	);
</script>

<style>
	.trippy {
		background-image: radial-gradient(
				closest-side at center,
				theme(colors.black),
				theme(colors.black) 50%,
				transparent calc(50% + 1px)
			),
			radial-gradient(
				circle at center,
				theme(colors.transparent) 0,
				theme(colors.transparent)
					calc(
						100% * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 *
							0.75 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 - 1px
					),
				theme(colors.offwhite.DEFAULT)
					calc(
						100% * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 *
							0.75 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75
					),
				theme(colors.offwhite.DEFAULT)
					calc(
						100% * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 *
							0.75 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 - 1px
					),
				theme(colors.transparent)
					calc(
						100% * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 *
							0.75 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75
					),
				theme(colors.transparent)
					calc(
						100% * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 *
							0.75 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 - 1px
					),
				theme(colors.offwhite.DEFAULT)
					calc(
						100% * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 *
							0.75 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75
					),
				theme(colors.offwhite.DEFAULT)
					calc(
						100% * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 *
							0.75 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 - 1px
					),
				theme(colors.transparent)
					calc(
						100% * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 *
							0.75 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75
					),
				theme(colors.transparent)
					calc(
						100% * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 *
							0.75 * 0.75 * 0.75 * 0.75 * 0.75 - 1px
					),
				theme(colors.offwhite.DEFAULT)
					calc(
						100% * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 *
							0.75 * 0.75 * 0.75 * 0.75 * 0.75
					),
				theme(colors.offwhite.DEFAULT)
					calc(
						100% * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 *
							0.75 * 0.75 * 0.75 * 0.75 - 1px
					),
				theme(colors.transparent)
					calc(
						100% * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 *
							0.75 * 0.75 * 0.75 * 0.75
					),
				theme(colors.transparent)
					calc(
						100% * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 *
							0.75 * 0.75 * 0.75 - 1px
					),
				theme(colors.offwhite.DEFAULT)
					calc(
						100% * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 *
							0.75 * 0.75 * 0.75
					),
				theme(colors.offwhite.DEFAULT)
					calc(
						100% * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 *
							0.75 * 0.75 - 1px
					),
				theme(colors.transparent)
					calc(
						100% * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 *
							0.75 * 0.75
					),
				theme(colors.transparent)
					calc(
						100% * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 *
							0.75 - 1px
					),
				theme(colors.offwhite.DEFAULT)
					calc(
						100% * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 *
							0.75
					),
				theme(colors.offwhite.DEFAULT)
					calc(
						100% * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 -
							1px
					),
				theme(colors.transparent)
					calc(
						100% * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75
					),
				theme(colors.transparent)
					calc(
						100% * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 - 1px
					),
				theme(colors.offwhite.DEFAULT)
					calc(100% * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75),
				theme(colors.offwhite.DEFAULT)
					calc(100% * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 - 1px),
				theme(colors.transparent)
					calc(100% * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75),
				theme(colors.transparent)
					calc(100% * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 - 1px),
				theme(colors.offwhite.DEFAULT)
					calc(100% * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 * 0.75),
				theme(colors.offwhite.DEFAULT)
					calc(100% * 0.75 * 0.75 * 0.75 * 0.75 * 0.75 - 1px),
				theme(colors.transparent) calc(100% * 0.75 * 0.75 * 0.75 * 0.75 * 0.75),
				theme(colors.transparent) calc(100% * 0.75 * 0.75 * 0.75 * 0.75 - 1px),
				theme(colors.offwhite.DEFAULT) calc(100% * 0.75 * 0.75 * 0.75 * 0.75),
				theme(colors.offwhite.DEFAULT) calc(100% * 0.75 * 0.75 * 0.75 - 1px),
				theme(colors.transparent) calc(100% * 0.75 * 0.75 * 0.75),
				theme(colors.transparent) calc(100% * 0.75 * 0.75 - 1px),
				theme(colors.offwhite.DEFAULT) calc(100% * 0.75 * 0.75),
				theme(colors.offwhite.DEFAULT) calc(100% * 0.75 - 1px),
				theme(colors.transparent) calc(100% * 0.75),
				theme(colors.transparent) 100%
			);
		background-position: center center;
		background-size: 25px 25px, 100% 100%;
		background-repeat: no-repeat;

		/* transition: all 2s; */
		animation: trippy-keyframes 2s infinite linear;
	}
	@keyframes trippy-keyframes {
		from {
			background-size: 25px 25px, 100% 100%;
		}
		to {
			background-size: 25px 25px,
				calc(100% / calc(0.75 * 0.75)) calc(100% / calc(0.75 * 0.75));
		}
	}
	.trippy:hover {
		background-size: 123.4567% 123.4567%;
	}
</style>
