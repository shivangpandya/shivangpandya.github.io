const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	darkMode: "class",
	theme: {
		extend: {
			fontFamily: {
				// Add any custom fonts here
				sans: ["InterVariable", "Inter", ...fontFamily.sans],
			},
		},
	},
	plugins: [],
};
