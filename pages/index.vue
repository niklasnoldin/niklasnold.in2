<template>
	<TransitionGroup name="list">
		<Logo key="logo" class="sm:col-span-2 md:col-span-3 lg:col-span-2 p-4" />
		<div
			key="description"
			class="sm:col-span-2 lg:col-span-1 flex flex-col justify-between">
			<p class="text-md font-serif py-4 px-6 bg-black rounded-lg">
				I'm a designer and creative coder from the Austrian alps 🏔️. I live in
				Barcelona, Spain 🏝️ and I'm available to work. Following my education 🎓
				in both design and IT, I spent many years developing web apps on a
				global scale 🌍. Now, I aim to apply my know-how 🧠 in both fields
				creatively 👩‍🎨.
			</p>
		</div>
		<a
			href="mailto:info@niklasnold.in"
			class="sm:col-span-2 md:col-span-1 lg:col-span-2 rounded-lg relative trippy"
			key="hireMe">
			<svg
				class="w-full h-full"
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
		</a>
		<nav
			key="contact"
			aria-label="Contact Links"
			class="sm:col-span-2 lg:col-span-1 p-4 text-black rounded-lg bg-white bg-gradient-to-t from-offwhite-muted to-offwhite flex flex-col">
			<p class="text-center font-serif mb-4 text-md">Slide in my DMs</p>
			<ul class="font-medium grid grow gap-4">
				<li>
					<a
						class="hover:bg-orange focus-visible:bg-orange focus:outline-none focus-visible:outline-purple focus-visible:text-black hover:text-black bg-black text-md text-orange transition-colors h-full rounded flex items-center justify-center gap-8 px-8 py-4 shadow-lg"
						href="https://instagram.com/nippiofficial"
						target="_blank">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="1.5em"
							height="1.5em"
							viewBox="0 0 24 24">
							<path
								fill="currentColor"
								d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3" />
						</svg>
						<p class="w-40">Instagram</p>
					</a>
				</li>
				<li>
					<a
						class="hover:bg-purple focus-visible:bg-purple focus:outline-none focus-visible:outline-purple focus-visible:text-black hover:text-black bg-black text-md text-purple transition-colors h-full rounded flex items-center justify-center gap-8 px-8 py-4 shadow-lg"
						href="https://linkedin.com/in/niklasnoldin"
						target="_blank">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="1.5em"
							height="1.5em"
							viewBox="0 0 24 24">
							<path
								fill="currentColor"
								d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z" />
						</svg>
						<p class="w-40">Linkedin</p>
					</a>
				</li>
				<li>
					<a
						class="hover:bg-green focus-visible:bg-green focus:outline-none focus-visible:outline-purple focus-visible:text-black hover:text-black bg-black text-md text-green transition-colors h-full rounded flex items-center justify-center gap-8 px-8 py-4 shadow-lg"
						href="mailto:info@niklasnold.in">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="1.5em"
							height="1.5em"
							viewBox="0 0 24 24">
							<text
								class="font-sans fill-current"
								text-anchor="middle"
								alignment-baseline="middle"
								style="font-size: 20px"
								x="12"
								y="12">
								@
							</text>
						</svg>
						<p class="w-40">Email</p>
					</a>
				</li>
			</ul>
		</nav>
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

		svg {
			transition: all 1s ease-in-out;
		}
		&:focus {
			@apply outline-none outline-purple;
		}
		&:focus-visible svg,
		&:hover svg {
			filter: blur(0);
			opacity: 1;
			mix-blend-mode: normal;
		}
	}

	@screen md {
		.trippy svg {
			@apply blur-sm opacity-25 mix-blend-luminosity;
		}
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
</style>
