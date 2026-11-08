import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string(),
    draft: z.boolean().default(false),
    // Approved reader comments, copied by hand from Netlify Forms. Text is
    // shown as plain text (never HTML); a blank line starts a new paragraph.
    comments: z.array(z.object({
      name: z.string(),
      date: z.coerce.date(),
      text: z.string(),
    })).default([]),
  }),
});

export const collections = { posts };
