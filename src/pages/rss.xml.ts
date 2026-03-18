import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { siteConfig } from "@/site.config";
import type { APIContext } from "astro";

export async function GET(context: APIContext) {
	const posts = await getCollection("post", ({ data }) => !data.draft);
	posts.sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf());

	return rss({
		title: `${siteConfig.author}'s Blog`,
		description: siteConfig.description,
		site: context.site ?? "https://shivangpandya.github.io",
		items: posts.map((post) => ({
			title: post.data.title,
			description: post.data.description,
			pubDate: post.data.publishDate,
			link: `/posts/${post.id}/`,
		})),
	});
}
