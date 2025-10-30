// 1. Import utilities from `astro:content`
import { defineCollection, z } from "astro:content";

// 2. Define your collection(s)
const blogCollection = defineCollection({
	schema: z.object({
		draft: z.boolean(),
		title: z.string(),
		snippet: z.string(),
		image: z.object({
			src: z.string(),
			alt: z.string(),
		}),
		publishDate: z.string().transform((str) => new Date(str)),
		author: z.string().default("YourCompany"),
		category: z.string(),
		tags: z.array(z.string()),
	}),
});const pagesCollection = defineCollection({
  type: 'content', // Use 'content' for Markdown/MDX files
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    in_navbar: z.boolean().default(true), // Your custom field
    // Note: 'body' content is automatically available
  }),
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
	blog: blogCollection,
	pages: pagesCollection,
};
