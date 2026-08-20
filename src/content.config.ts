import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const events = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/events" }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    location: z.string(),
    role: z.enum(['Speaker','Moderator','Organizer','Facilitator','Panelist','Participant']),
    url: z.string().url().optional(),
    recap: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

const writings = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/writings" }),
  schema: z.object({
    title: z.string(),
    outlet: z.string(),
    year: z.number(),
    url: z.string().url(),
    summary: z.string().optional(),
    format: z.enum(['Op-ed','Essay','Report','Policy','Interview']),
    featured: z.boolean().default(false),
  }),
});

const talks = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/talks" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    formats: z.array(z.string()),
    order: z.number().default(99),
  }),
});

const testimonials = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/testimonials" }),
  schema: z.object({
    quote: z.string(),
    name: z.string(),
    role: z.string(),
    organisation: z.string(),
    type: z.enum(['speaking','consulting','general']),
  }),
});

export const collections = { events, writings, talks, testimonials };
