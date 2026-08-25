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
    image: z.string().optional(),
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
    image: z.string().optional(),
    format: z.enum(['Op-ed','Essay','Report','Policy','Interview']),
    featured: z.boolean().default(false),
  }),
});

const talks = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/talks" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string().optional(),
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

const site = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/site" }),
  schema: z.object({
    hero_line1: z.string().optional(),
    hero_line2: z.string().optional(),
    hero_sub: z.string().optional(),
    tagline: z.string().optional(),
    profile_photo: z.string().optional(),
    short_bio: z.string().optional(),
    origin: z.string().optional(),
    thread: z.string().optional(),
    photo: z.string().optional(),
    email: z.string().optional(),
    email_studio: z.string().optional(),
    email_crf: z.string().optional(),
    calendly_url: z.string().optional(),
    instagram: z.string().optional(),
    linkedin: z.string().optional(),
    speakers_academy: z.string().optional(),
  }),
});

export const collections = { events, writings, talks, testimonials, site };
