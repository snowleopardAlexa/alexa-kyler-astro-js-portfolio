import type { ComponentType, SVGProps } from "react";
import { ConstantContact } from "@/components/ui/svgs/constantcontact";
import { Photoshop } from "@/components/ui/svgs/photoshop";
import { Webflow } from "@/components/ui/svgs/webflow";
import { ClientFirst } from "@/components/ui/svgs/clientfirst";
import { Figma } from "@/components/ui/svgs/figma";
import { Raisley } from "@/components/ui/svgs/raisley";
import { BlackbaudRaiserEdge } from "@/components/ui/svgs/blackbaud";
import { Illustrator } from "@/components/ui/svgs/illustrator";
import { Reddit } from "@/components/ui/svgs/reddit";
import { Meta } from "@/components/ui/svgs/meta";
import { Instagram } from "@/components/ui/svgs/instagram";
import { GoogleAnalytics } from "@/components/ui/svgs/googleanalytics";
import { GitHub } from "@/components/ui/svgs/github";
import { Cloudflare } from "@/components/ui/svgs/cloudflare";
import { Astro } from "@/components/ui/svgs/astro";
import { ClaudeCode } from "@/components/ui/svgs/claudecode";
import { Claude } from "@/components/ui/svgs/claude";
import { ClaudeDesign } from "@/components/ui/svgs/claudedesign";
import { CSS } from "@/components/ui/svgs/css";
import { JavaScript } from "@/components/ui/svgs/javascript";
import { PHP } from "@/components/ui/svgs/php";
import { WordPress } from "@/components/ui/svgs/wordpress";
import { MailChimp } from "@/components/ui/svgs/mailchimp";
import { Vercel } from "@/components/ui/svgs/vercel";
import { Canva } from "@/components/ui/svgs/canva";
import { Framer } from "@/components/ui/svgs/framer";
import {
  HTML5,
  Drupal,
  GoFundMe,
  GoogleTagManager,
  NodeJS,
  Zeffy,
  EngagingNetworks,
  Accessibility,
  GDPR,
  SearchConsole,
  ABTesting,
  WebVitals,
  PCI,
} from "@/components/ui/svgs/monogram";

// Page sections on /tools, in display order.
export const TOOL_GROUPS = [
  "Primary tools",
  "eCRM & Fundraising",
  "Analytics & Compliance",
  "Accessibility & Compliance",
  "Design",
  "Also in my toolkit",
] as const;
export type ToolGroup = (typeof TOOL_GROUPS)[number];

export interface Tool {
  name: string;
  logo: ComponentType<SVGProps<SVGSVGElement>>;
  group: ToolGroup;
  project: string;
  description: string;
  // true = written by Claude from existing project data, not yet reviewed by Alexa.
  draft?: boolean;
}

// 2 entries below (Constant Contact, Photoshop) came straight from the spec
// doc. All others are drafted -- either from real project facts already in
// this codebase (resume.tsx, work case studies) or from Claude tool usage
// described in chat -- flagged draft: true -- review and edit before launch.
// Within each group, entries render in array order.
export const TOOLS: Tool[] = [
  // Primary tools
  {
    name: "Claude Code",
    logo: ClaudeCode,
    group: "Primary tools",
    project: "Wildari Planet, TrapperAid, this site",
    description: "Built and shipped full platforms, apps, and internal tools for nonprofit and education clients - from first commit to deploy.",
    draft: true,
  },
  {
    name: "GitHub",
    logo: GitHub,
    group: "Primary tools",
    project: "Wildari Planet",
    description: "Version-controlled the Wildari Planet build solo, from first commit to launch.",
    draft: true,
  },
  {
    name: "HTML5",
    logo: HTML5,
    group: "Primary tools",
    project: "Wildari Planet",
    description: "Hand-coded semantic, accessible page templates for the Wildari Planet platform.",
    draft: true,
  },
  {
    name: "Sass/CSS",
    logo: CSS,
    group: "Primary tools",
    project: "Nonprofit client projects",
    description: "Wrote modular, maintainable stylesheets using Sass for component-based front-end builds across nonprofit client projects.",
    draft: true,
  },
  {
    name: "JavaScript",
    logo: JavaScript,
    group: "Primary tools",
    project: "Wildari Planet, Cat Connections NYC",
    description: "Added interactivity to the Wildari Planet front end and custom behavior to Cat Connections NYC's Webflow giving pages.",
    draft: true,
  },
  {
    name: "PHP",
    logo: PHP,
    group: "Primary tools",
    project: "Sisters of St. Joseph",
    description: "Customized WordPress themes and templates during the three-site Sisters of St. Joseph rebuild.",
    draft: true,
  },
  {
    name: "WordPress",
    logo: WordPress,
    group: "Primary tools",
    project: "Sisters of St. Joseph",
    description: "Rebuilt three Sisters of St. Joseph sites with integrated donation forms, QA testing, and WCAG accessibility fixes.",
    draft: true,
  },
  {
    name: "Drupal 10",
    logo: Drupal,
    group: "Primary tools",
    project: "Wildari Planet",
    description: "Built custom content types, taxonomy, and API architecture for the Wildari Planet wildlife education platform.",
    draft: true,
  },
  {
    name: "Webflow",
    logo: Webflow,
    group: "Primary tools",
    project: "Cat Connections NYC, ParaGenius Foundation, CSJ Learning Connection",
    description: "Built and launched full CMS-driven nonprofit sites, from architecture to content model.",
    draft: true,
  },
  {
    name: "Astro.js",
    logo: Astro,
    group: "Primary tools",
    project: "Wildari Planet, this site",
    description: "Built the Wildari Planet front end and rebuilt this portfolio as a fast, JS-light site so project work loads instantly.",
    draft: true,
  },
  {
    name: "Node.js / npm",
    logo: NodeJS,
    group: "Primary tools",
    project: "Astro.js and React projects",
    description: "Used in build pipelines for Astro.js and React projects - dependency management, scripts, and local development environments.",
    draft: true,
  },
  {
    name: "Framer",
    logo: Framer,
    group: "Primary tools",
    project: "",
    description: "Designed and published responsive marketing sites with built-in animations and CMS - going from layout to live site without a separate handoff.",
    draft: true,
  },

  // eCRM & Fundraising
  {
    name: "Blackbaud Raiser's Edge",
    logo: BlackbaudRaiserEdge,
    group: "eCRM & Fundraising",
    project: "Sisters of St. Joseph",
    description: "Provided technical support for a donor database-integrated website and online giving forms.",
    draft: true,
  },
  {
    name: "Raisely",
    logo: Raisley,
    group: "eCRM & Fundraising",
    project: "Cat Connections NYC",
    description: "Built donation pages for Cat Connections NYC's campaigns, part of the multi-platform push that raised $18,000+.",
    draft: true,
  },
  {
    name: "GoFundMe",
    logo: GoFundMe,
    group: "eCRM & Fundraising",
    project: "Cat Connections NYC",
    description: "Ran campaign pages as part of the multi-platform push that raised $18,000+ in five months for Cat Connections NYC.",
    draft: true,
  },
  {
    name: "Mailchimp",
    logo: MailChimp,
    group: "eCRM & Fundraising",
    project: "Cat Connections NYC",
    description: "Built donor email sequences that supported Cat Connections NYC's fundraising campaigns.",
    draft: true,
  },
  {
    name: "Constant Contact",
    logo: ConstantContact,
    group: "eCRM & Fundraising",
    project: "Sisters of St. Joseph",
    description: "Designed and sent nonprofit newsletters for Sisters of St. Joseph.",
  },
  {
    name: "Meta & Instagram Fundraising",
    logo: Meta,
    group: "eCRM & Fundraising",
    project: "Cat Connections NYC",
    description: "Ran fundraisers natively on Facebook and Instagram as part of the multi-platform campaign that raised $18,000+ in five months for Cat Connections NYC.",
    draft: true,
  },
  {
    name: "Zeffy",
    logo: Zeffy,
    group: "eCRM & Fundraising",
    project: "Cat Connections NYC",
    description: "Used as a zero-fee donation platform for Cat Connections NYC campaigns as part of the multi-platform fundraising push that raised $18,000+.",
    draft: true,
  },
  {
    name: "Engaging Networks",
    logo: EngagingNetworks,
    group: "eCRM & Fundraising",
    project: "",
    description: "Familiar with EN platform architecture through extensive work with comparable nonprofit eCRMs including Raisely and Blackbaud Raiser's Edge. Actively expanding EN knowledge.",
    draft: true,
  },

  // Analytics & Compliance
  {
    name: "Google Analytics 4",
    logo: GoogleAnalytics,
    group: "Analytics & Compliance",
    project: "Everloving Paws, Cat Connections NYC",
    description: "Tracked traffic and donation-page conversion performance across Webflow client builds.",
    draft: true,
  },
  {
    name: "Google Tag Manager",
    logo: GoogleTagManager,
    group: "Analytics & Compliance",
    project: "",
    description: "Set up tags and conversion events so analytics data reaches GA4 without code changes.",
    draft: true,
  },
  {
    name: "Cloudflare",
    logo: Cloudflare,
    group: "Analytics & Compliance",
    project: "Wildari Planet",
    description: "Deployed and hosts the Wildari Planet platform (and this site) on Workers.",
    draft: true,
  },
  {
    name: "Vercel",
    logo: Vercel,
    group: "Analytics & Compliance",
    project: "",
    description: "Deployed front-end projects with preview builds for every change.",
    draft: true,
  },

  // Accessibility & Compliance
  {
    name: "WCAG Accessibility",
    logo: Accessibility,
    group: "Accessibility & Compliance",
    project: "Sisters of St. Joseph",
    description: "Implemented accessibility standards across Sisters of St. Joseph multi-site rebuild - semantic HTML, keyboard navigation, color contrast, and screen reader compatibility.",
    draft: true,
  },
  {
    name: "GDPR Compliance",
    logo: GDPR,
    group: "Accessibility & Compliance",
    project: "Nonprofit client websites",
    description: "Configured cookie consent and data compliance settings via Cloudflare and implemented GDPR-aware tracking across nonprofit client websites.",
    draft: true,
  },
  {
    name: "Google Search Console",
    logo: SearchConsole,
    group: "Accessibility & Compliance",
    project: "Client web properties",
    description: "Monitored organic search performance, indexed pages, and technical SEO issues alongside GA4 for client web properties.",
    draft: true,
  },
  {
    name: "A/B Testing",
    logo: ABTesting,
    group: "Accessibility & Compliance",
    project: "Fundraising campaigns",
    description: "Ran variant testing on donation pages and campaign landing pages to optimize conversion rates for fundraising campaigns.",
    draft: true,
  },
  {
    name: "Core Web Vitals / PageSpeed",
    logo: WebVitals,
    group: "Accessibility & Compliance",
    project: "Client web properties",
    description: "Optimized page load performance and mobile responsiveness using Google PageSpeed Insights and Lighthouse auditing.",
    draft: true,
  },
  {
    name: "PCI Compliance Awareness",
    logo: PCI,
    group: "Accessibility & Compliance",
    project: "Donation forms",
    description: "Familiar with PCI compliance requirements for donation form security through work with Raisely, Blackbaud Raiser's Edge, and third-party payment processors.",
    draft: true,
  },

  // Design
  {
    name: "Figma",
    logo: Figma,
    group: "Design",
    project: "TrapperAid",
    description: "Took TrapperAid from user interviews through wireframes to high-fidelity UI for a TNR volunteer web app.",
    draft: true,
  },
  {
    name: "Photoshop",
    logo: Photoshop,
    group: "Design",
    project: "Kawi",
    description: "Built mockups and template systems for the Kawi brand identity.",
  },
  {
    name: "Illustrator",
    logo: Illustrator,
    group: "Design",
    project: "Kawi",
    description: "Built the iconography and packaging system for the Kawi brand identity guidelines.",
    draft: true,
  },
  {
    name: "Canva",
    logo: Canva,
    group: "Design",
    project: "Everloving Paws, Cat Connections NYC, ParaGenius Foundation, TrapperAid, Petico",
    description: "Produced campaign graphics, social posts, and print pieces for nonprofit and startup clients.",
    draft: true,
  },

  // Also in my toolkit
  {
    name: "Claude",
    logo: Claude,
    group: "Also in my toolkit",
    project: "Every project on this page",
    description: "Used across every project here for research, analysis, and copywriting - the thinking that happens before anything gets built.",
    draft: true,
  },
  {
    name: "Claude Design",
    logo: ClaudeDesign,
    group: "Also in my toolkit",
    project: "Decks, sites, and print pieces",
    description: "Used to design pitch decks, websites, and flyers - fast first drafts that get a concept in front of a client before the real build starts.",
    draft: true,
  },
  {
    name: "Client First",
    logo: ClientFirst,
    group: "Also in my toolkit",
    project: "Cat Connections NYC, ParaGenius Foundation",
    description: "Structured Webflow class systems so nonprofit clients can maintain their own sites without breaking the design.",
    draft: true,
  },
  {
    name: "Reddit",
    logo: Reddit,
    group: "Also in my toolkit",
    project: "Cat Connections NYC",
    description: "Ran targeted community fundraising posts as part of the $18k, five-month Cat Connections NYC campaign.",
    draft: true,
  },
  {
    name: "Meta Business Suite",
    logo: Meta,
    group: "Also in my toolkit",
    project: "aJuxt",
    description: "Managed multi-client social scheduling and community response across daycare, disability-care, and education accounts.",
    draft: true,
  },
  {
    name: "Instagram",
    logo: Instagram,
    group: "Also in my toolkit",
    project: "aJuxt",
    description: "Produced and scheduled client content and monitored performance across multiple client accounts.",
    draft: true,
  },
];
