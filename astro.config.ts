import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import expressiveCode from "astro-expressive-code";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
	site: "https://shivangpandya.github.io",
	integrations: [
		tailwind({
			applyBaseStyles: false,
		}),
		sitemap(),
		expressiveCode({
			themes: ["dracula", "github-light"],
		}),
		icon(),
	],
});
