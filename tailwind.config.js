/** @type {import('tailwindcss').Config} */
export default {
	content: [],
	theme: {
		borderRadius: {
			DEFAULT: "1rem",
			lg: "2rem",
			xl: "3rem",
			full: "99999px",
		},
		fontFamily: {
			serif: ["DM Serif Display", "serif"],
			sans: ["DM Sans Variable", "sans-serif"],
			comic: ["Comic Sans MS", "sans-serif"],
		},
		fontSize: {
			xs: "0.75rem",
			sm: "1rem",
			base: "1.2rem",
			md: "2rem",
			lg: "3rem",
			xl: "5rem",
			"2xl": "7rem",
		},
		colors: {
			primary: {
				DEFAULT: "#C8EDED",
				muted: "#D3F2F2",
			},
			white: "white",
			offwhite: {
				DEFAULT: "#dde0de",
				muted: "#cacccb",
				dark: "rgb(179,182,180)",
			},
			black: "#002020",
			transparent: "transparent",
			current: "currentcolor",
			green: "#75E96B",
			orange: "#FCAC63",
			red: "#FB6262",
			purple: "#B76DF1",
		},
		extend: {
			spacing: {
				lg: "2rem",
				xl: "4rem",
			},
		},
	},
	plugins: [],
};
