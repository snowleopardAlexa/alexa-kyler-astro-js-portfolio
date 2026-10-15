import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

// Each case study is Problem -> Role & Approach -> Decisions -> Result -> Visual documentation.
// New case studies just need a new .md file here -- no component changes required.
const work = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/work" }),
  schema: z.object({
    title: z.string(),
    tagline: z.string(), // one-line problem/outcome, used on cards + mega menu
    order: z.number(), // controls grid order; lower = earlier
    featured: z.boolean().default(false), // show in homepage Featured Work + nav mega menu
    thumbnail: z.string().optional(), // static image path
    thumbnailVideo: z.string().optional(), // used when only a video asset exists
    // Longer-form video for the homepage Hero specifically -- falls back to
    // thumbnailVideo/thumbnail when unset. Cards, mega menu, grid, and the
    // case-study hero always use thumbnail/thumbnailVideo.
    heroVideo: z.string().optional(),
    externalUrl: z.string().optional(),
    externalLabel: z.string().optional(), // link text for externalUrl; defaults to "Visit live site"
    externalButton: z.boolean().optional(), // show externalUrl as a solid button instead of a text link
    // Classic case study: Problem -> Role & Approach -> Decisions -> Result.
    problem: z.string().optional(),
    role: z.string().optional(),
    decisions: z.array(z.string()).default([]),
    result: z.string().optional(),
    // Project-detail variant: Overview -> What I built -> Results -> Tools -> Links.
    // Either set can be used; each section only renders when it has content.
    overview: z.string().optional(),
    built: z.array(z.string()).default([]),
    results: z.array(z.string()).default([]),
    tools: z.array(z.string()).default([]),
    links: z.array(z.object({ label: z.string(), url: z.string() })).default([]),
    linksNote: z.string().optional(), // shown under Links when there's no public URL
    // Full-width media with a caption, shown right after "What I built".
    showcase: z
      .array(
        z.object({
          title: z.string().optional(), // section heading above the media
          src: z.string(),
          alt: z.string(),
          caption: z.string().optional(),
          video: z.boolean().default(false),
          linkUrl: z.string().optional(), // optional button under the media
          linkLabel: z.string().optional(),
          half: z.boolean().default(false), // pair with the next half item in a two-column row
        })
      )
      .default([]),
    gallery: z
      .array(
        z.object({
          src: z.string().optional(),
          alt: z.string(),
          video: z.boolean().default(false),
          placeholder: z.boolean().default(false), // "visual pending" box until the asset arrives
          caption: z.string().optional(),
        })
      )
      .default([]),
    galleryLink: z.object({ label: z.string(), url: z.string() }).optional(), // button under the gallery
    galleryTitle: z.string().optional(), // heading for the gallery; defaults to "Visual documentation"
    // Flags placeholder content shipped without final assets/copy from the client.
    draft: z.boolean().default(false),
  }),
});

export const collections = { work };
