// tina/config.ts
import { defineConfig } from "tinacms";
var config_default = defineConfig({
  branch: "master",
  clientId: process.env.TINA_CLIENT_ID || "",
  token: process.env.TINA_TOKEN || "",
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "images/uploads",
      publicFolder: "public"
    }
  },
  schema: {
    collections: [
      // ── EVENTS ─────────────────────────────────────────────
      {
        name: "events",
        label: "Events",
        path: "src/content/events",
        format: "json",
        fields: [
          { type: "string", name: "title", label: "Title", isTitle: true, required: true },
          { type: "string", name: "date", label: "Date (e.g. 2026-03 or 2026-09-15)" },
          { type: "string", name: "location", label: "Location" },
          {
            type: "string",
            name: "role",
            label: "Role",
            options: ["Speaker", "Moderator", "Organizer", "Facilitator", "Panelist", "Participant"]
          },
          { type: "string", name: "url", label: "Event URL" },
          { type: "string", name: "recap", label: "Recap / notes", ui: { component: "textarea" } },
          { type: "image", name: "image", label: "Event image (optional)" },
          { type: "boolean", name: "featured", label: "Feature on homepage?" }
        ]
      },
      // ── WRITINGS ───────────────────────────────────────────
      {
        name: "writings",
        label: "Writings & Press",
        path: "src/content/writings",
        format: "json",
        fields: [
          { type: "string", name: "title", label: "Title", isTitle: true, required: true },
          { type: "string", name: "outlet", label: "Outlet / Publication" },
          { type: "number", name: "year", label: "Year" },
          { type: "string", name: "url", label: "URL" },
          { type: "string", name: "summary", label: "Summary", ui: { component: "textarea" } },
          { type: "image", name: "image", label: "Writing image (optional)" },
          {
            type: "string",
            name: "format",
            label: "Format",
            options: ["Op-ed", "Essay", "Report", "Policy", "Interview"]
          },
          { type: "boolean", name: "featured", label: "Feature on homepage?" }
        ]
      },
      // ── TALKS ──────────────────────────────────────────────
      {
        name: "talks",
        label: "Signature Talks",
        path: "src/content/talks",
        format: "json",
        fields: [
          { type: "string", name: "title", label: "Title", isTitle: true, required: true },
          { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
          { type: "image", name: "image", label: "Talk image (optional)" },
          {
            type: "string",
            name: "formats",
            label: "Formats available",
            list: true,
            options: ["Keynote", "Panel", "Moderation", "Workshop", "Faculty", "Ceremony"]
          },
          { type: "number", name: "order", label: "Display order (1 = first)" }
        ]
      },
      // ── TESTIMONIALS ───────────────────────────────────────
      {
        name: "testimonials",
        label: "Testimonials",
        path: "src/content/testimonials",
        format: "json",
        fields: [
          { type: "string", name: "quote", label: "Quote (no quotes needed)", ui: { component: "textarea" } },
          { type: "string", name: "name", label: "Person's name", isTitle: true, required: true },
          { type: "string", name: "role", label: "Role / title" },
          { type: "string", name: "organisation", label: "Organisation" },
          {
            type: "string",
            name: "type",
            label: "Context",
            options: ["speaking", "consulting", "general"]
          }
        ]
      },
      // ── SITE CONTENT ───────────────────────────────────────
      {
        name: "site",
        label: "Site Content",
        path: "src/content/site",
        format: "json",
        fields: [
          { type: "string", name: "hero_line1", label: "Hero headline (line 1)" },
          { type: "string", name: "hero_line2", label: "Hero headline (line 2 \u2014 italic)" },
          { type: "string", name: "hero_sub", label: "Hero subline", ui: { component: "textarea" } },
          { type: "string", name: "tagline", label: "Positioning tagline (footer)" },
          { type: "image", name: "profile_photo", label: "Profile photo (hero portrait)" }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
