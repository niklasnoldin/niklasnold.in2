<template>
	<div
		id="map"
		class="shadow-lg rounded-lg min-h-[100vw] sm:min-h-0 w-full h-full quiet"></div>
</template>

<script setup>
	import "mapbox-gl/dist/mapbox-gl.css";
	import mapboxgl from "mapbox-gl";
	mapboxgl.accessToken =
		"pk.eyJ1IjoibmlrbGFzbm9sZGluIiwiYSI6ImNsb2U4cTM5dzBrbmsycW1lYW93cjB6ZWYifQ.9PM6sWD3eA8PTdXsxOmZ9g";

	import { createApp } from "vue/dist/vue.esm-bundler";
	import { Marker } from "#components";

	onMounted(() => {
		const map = new mapboxgl.Map({
			container: "map",
			cooperativeGestures: true,
			style: "mapbox://styles/niklasnoldin/cloe9zr04002g01qq19dxcpn2",
			center: [2.1658984, 41.3783425],
			zoom: 4,
			projection: "globe",
			minZoom: 3,
		});

		const innsbruckApp = createApp({
			template: `<Marker>grown here</Marker>`,
			components: { Marker },
		});
		const innsbruckRender = innsbruckApp.mount(document.createElement("div"));

		const innsbruck = new mapboxgl.Marker({ element: innsbruckRender.$el });
		innsbruck.setLngLat([11.4100294, 47.2823995]).addTo(map);

		const barcelonaApp = createApp({
			template: `<Marker>Live here</Marker>`,
			components: { Marker },
		});
		const barcelonaRender = barcelonaApp.mount(document.createElement("div"));

		const barcelona = new mapboxgl.Marker({ element: barcelonaRender.$el });
		barcelona.setLngLat([2.1658984, 41.3783425]).addTo(map);
	});
</script>
