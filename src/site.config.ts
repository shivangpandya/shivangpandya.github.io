import type { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
	// Used as both a meta property (see src/components/BaseHead.astro) and
	// the site's title in src/pages/posts/[...page].astro
	author: "Shivang Pandya",
	// Meta property, also used in src/components/BaseHead.astro
	description:
		"Cloud Architect based in Austin, TX. I write about cloud architecture, software development, and my learnings in the tech industry.",
	// HTML lang property
	lang: "en-GB",
	// Meta property, equivalent to og:locale
	ogLocale: "en_GB",
	// Option to display a "table of contents" on each post (default: true)
	// Setting false will not render the ToC, but it can be overridden by setting true in the frontmatter
	// of a specific post
	showToc: true,
	// Option to display the "Edit on GitHub" link in the post footer
	// Change to your GitHub repo link
	webmentionUrl: undefined,
	heroImage: {
		src: "/images/hero-sample-main.png",
		alt: "Abstract illustration of cloud architecture layers and connected systems.",
	},
	// Date format used in the blog
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#options
	date: {
		locale: "en-GB",
		options: {
			day: "numeric",
			month: "short",
			year: "numeric",
		},
	},
};

// This is used in the social links
export const menuLinks: Array<{ link: string; title: string }> = [
	{
		link: "/",
		title: "Home",
	},
	{
		link: "/posts/",
		title: "Blog",
	},
	{
		link: "/til/",
		title: "TIL",
	},
	{
		link: "/tags/",
		title: "Tags",
	},
	{
		link: "/about/",
		title: "About",
	},
];
