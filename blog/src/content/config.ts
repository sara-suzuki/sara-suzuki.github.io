import { defineCollection, z } from 'astro:content';

const comment = z.object({
  name: z.string(),
  date: z.coerce.date(),
  text: z.string(),
  // Set to true on comments and replies written by Sara; they get an
  // "Author" label.
  author: z.boolean().default(false),
});

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string(),
    draft: z.boolean().default(false),
    // Approved reader comments, copied by hand from Netlify Forms. Text is
    // shown as plain text (never HTML); a blank line starts a new paragraph.
    // A submission with a "reply_to" value (e.g. "#1 Caleb Whitehouse
    // (November 16, 2026)") goes in the "replies" of that numbered comment.
    // Replies are one level deep and listed oldest first.
    comments: z.array(comment.extend({
      replies: z.array(comment).default([]),
    })).default([]),
  }),
});

export const collections = { posts };
