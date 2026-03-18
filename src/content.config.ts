import { defineCollection, z } from "astro:content";

const post = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string().max(60),
		description: z.string().min(50).max(160),
		publishDate: z
			.string()
			.or(z.date())
			.transform((val) => new Date(val)),
		updatedDate: z
			.string()
			.optional()
			.transform((str) => (str ? new Date(str) : undefined)),
		tags: z.array(z.string()).default([]),
		draft: z.boolean().default(false),
	}),
});

const note = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string().max(60),
		description: z.string().optional(),
		publishDate: z
			.string()
			.or(z.date())
			.transform((val) => new Date(val)),
		draft: z.boolean().default(false),
	}),
});

export const collections = { post, note };
