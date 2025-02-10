<template>
	<div
		class="font-sans text-offwhite text-base layout-wrapper min-h-screen hyphens-auto">
		<main class="grid-layout">
			<slot></slot>
		</main>
	</div>
</template>
<style>
	html {
		@apply bg-black;
	}
	.layout-wrapper {
		@apply bg-black;
		background: top left / 5px 5px
				linear-gradient(to bottom right, #ffffff09, #0001),
			top left / 50vw 100vh no-repeat
				linear-gradient(
					-65deg,
					transparent 50%,
					theme(colors.black.DEFAULT) 60%
				),
			top right / 50vw 100vh no-repeat
				linear-gradient(65deg, transparent 50%, theme(colors.black.DEFAULT) 60%),
			radial-gradient(
				circle at bottom center,
				#022222,
				theme(colors.black.DEFAULT)
			);

		background-attachment: scroll, fixed, fixed, fixed;
	}
	.grid-layout {
		@apply grid grid-cols-1 gap-4 p-4;
	}

	@screen sm {
		.grid-layout {
			@apply grid-cols-2;
		}
	}
	@screen md {
		.grid-layout {
			@apply grid-cols-3;
		}
	}
	@screen lg {
		.grid-layout {
			@apply gap-lg p-lg;
		}
	}
</style>
