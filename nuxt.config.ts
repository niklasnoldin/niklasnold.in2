// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: false },
	modules: [
		"@nuxt/content",
		"@nuxtjs/tailwindcss",
		"@vueuse/nuxt",
		"@nuxt/image",
	],
	vue: {
		compilerOptions: {
			isCustomElement: (name) =>
				["swiper-container", "swiper-slide"].includes(name),
		},
	},
	content: {
		markdown: {
			anchorLinks: false,
		},
	},
	vite: {
		optimizeDeps: {
			include: ["vue"],
		},
	},
	app:{
		head:{
			title: "Niklas Noldin 🪩",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "Why even worry about a description if you're going to click the link anyways?" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' }
    ],
		script: [
			{src: 'https://analytics.sam-digital.com/js/script.js',  defer: true, "data-domain": "niklasnold.in"}
		]
		}
	}
});
