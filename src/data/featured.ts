// Featured project cards, in display order. Shown on the homepage Featured
// Work section and the top section of /work. A project can appear more than
// once (Cat Connections NYC has two angles), so cards are listed here directly
// rather than derived from the work collection. `href` defaults to the
// /work/<slug> case study; case study pages keep their own frontmatter copy.
export interface FeaturedCard {
  slug: string;
  href?: string;
  title: string;
  description: string;
  tags: string[];
  thumbnail?: string;
  thumbnailVideo?: string;
  mediaContain?: boolean;
}

export const FEATURED_CARDS: FeaturedCard[] = [
  {
    slug: "wildari-planet",
    title: "Wildari Planet - UX/UI Design & Full-Stack Conservation Platform",
    description:
      "Built end-to-end with Drupal 10, Astro.js, and Claude Code - custom content types, taxonomy, and API architecture for a wildlife education platform with a modern UX/UI, conservation-status filters, and tiered interactive quizzes.",
    tags: ["Drupal 10", "Astro.js", "Claude Code", "HTML/CSS", "JavaScript", "GitHub", "Figma", "Git", "Cloudflare", "Canva"],
    thumbnailVideo: "/work/wildari-planet-video.mp4",
  },
  {
    slug: "cat-connections-nyc-digital-fundraising",
    title: "Cat Connections NYC - Digital Fundraising Infrastructure & Form Architecture",
    description:
      "Built complete donation form infrastructure using Raisely eCRM and GoFundMe for an animal rescue nonprofit - raising $18,000+ in under 6 months through optimized giving pages, email sequences, and Google Ad Grants campaign management.",
    tags: ["Raisely", "GoFundMe", "eCRM", "Donation Forms", "Mailchimp", "Google Ad Grants", "JavaScript", "HTML/CSS", "Shelterluv Adoption & Foster Forms"],
    thumbnailVideo: "/work/mr-blinks-video-donation-campaign.mp4",
  },
  {
    slug: "cat-connections-nyc-technical-lead",
    title: "Cat Connections NYC - Technical Lead, Web Development, Donation Forms & Digital Operations",
    description:
      "Technical lead for an animal rescue - built its full CMS website on WordPress, then Webflow, with adoption, foster, and intake forms linked to Shelterluv. Also set up Google Workspace, Google Ads, social media, and the brand identity.",
    tags: ["Webflow", "PHP", "API Integration", "HTML/CSS", "JavaScript", "Adoption Forms", "Foster Forms", "Volunteer Forms", "AnimalsFirst", "Shelterluv", "Google Workspace", "Canva", "Donation Form", "Google PageSpeed"],
    thumbnailVideo: "/work/cat-connections-nyc.mp4",
  },
  {
    slug: "sisters-of-st-joseph",
    title: "Sisters of St. Joseph - Multi-Site WordPress & CRM Integration",
    description:
      "Three-site WordPress rebuild with Blackbaud Raiser’s Edge CRM integration - custom donation forms and giving pages, QA testing, WCAG accessibility compliance, custom CSS styling, staff training on CMS governance, and Constant Contact donor email campaigns.",
    tags: ["WordPress", "Blackbaud Raiser’s Edge", "Donation Forms", "Donation Pages", "WCAG", "QA Testing", "HTML", "CSS", "A/B Testing", "Constant Contact", "Submittable"],
    thumbnailVideo: "/work/sisters.mp4",
  },
  {
    slug: "csj-learning-connection",
    title: "CSJ Learning Connection - Bilingual Nonprofit Website",
    description:
      "Designed and built a bilingual English/Spanish website for a nonprofit program serving immigrant women - content architecture, CMS setup, and community-facing page design grounded in direct conversations with program participants.",
    tags: ["Webflow", "Bilingual", "HTML/CSS", "Figma", "Nonprofit", "Community Research"],
    thumbnailVideo: "/videos/tlc.mp4",
  },
  {
    slug: "paragenius-foundation",
    title: "ParaGenius Foundation - Nonprofit Website",
    description:
      "Site architecture, branding, and content for a Maui-based nonprofit, built on real community research - including Figma-to-code implementation, a Webflow CMS with a Client First class system the team can maintain, and logo updates.",
    tags: ["Webflow", "Nonprofit", "Figma", "HTML/CSS"],
    thumbnailVideo: "/work/paragenius-foundation.mp4",
  },
];

