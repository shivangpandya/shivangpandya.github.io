import type { CollectionEntry } from "astro:content";

type TaggedCollection = "post" | "note";
type TaggedEntry<T extends TaggedCollection = TaggedCollection> = CollectionEntry<T>;

export type TagSummary = {
	label: string;
	slug: string;
	count: number;
	postCount: number;
	noteCount: number;
};

const tagLabelSorter = new Intl.Collator("en", {
	sensitivity: "base",
});

export const normalizeTag = (tag: string) => tag.trim().toLowerCase();

export const slugifyTag = (tag: string) =>
	normalizeTag(tag)
		.replace(/&/g, " and ")
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/^-+|-+$/g, "") || "tag";

export const getTagHref = (tag: string) => `/tags/${slugifyTag(tag)}/`;

export const getEntryTags = (entry: TaggedEntry) => entry.data.tags ?? [];

export const sortEntriesByPublishDateDesc = <T extends TaggedEntry>(entries: T[]) =>
	[...entries].sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf());

export function filterEntriesByTag<T extends TaggedCollection>(
	entries: CollectionEntry<T>[],
	tagOrSlug: string,
) {
	const slug = slugifyTag(tagOrSlug);

	return entries.filter((entry) => getEntryTags(entry).some((tag) => slugifyTag(tag) === slug));
}

export function collectTagSummaries(
	posts: CollectionEntry<"post">[],
	notes: CollectionEntry<"note">[],
) {
	const summaries = new Map<string, TagSummary>();

	const addTags = (entries: TaggedEntry[], field: "postCount" | "noteCount") => {
		for (const entry of entries) {
			for (const rawTag of getEntryTags(entry)) {
				const label = rawTag.trim();
				const slug = slugifyTag(label);
				const existing = summaries.get(slug);

				if (existing) {
					existing.count += 1;
					existing[field] += 1;
					continue;
				}

				summaries.set(slug, {
					label,
					slug,
					count: 1,
					postCount: field === "postCount" ? 1 : 0,
					noteCount: field === "noteCount" ? 1 : 0,
				});
			}
		}
	};

	addTags(posts, "postCount");
	addTags(notes, "noteCount");

	return [...summaries.values()].sort((left, right) => {
		if (right.count !== left.count) {
			return right.count - left.count;
		}

		return tagLabelSorter.compare(left.label, right.label);
	});
}
