import { Icons } from "@/components/icons";
import { House, Library } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Astro } from "@/components/ui/svgs/astro";
import { Webflow } from "@/components/ui/svgs/webflow";
import { WordPress } from "@/components/ui/svgs/wordpress";
import { Figma } from "@/components/ui/svgs/figma";
import { Elementor } from "@/components/ui/svgs/elementor";
import { HTML } from "@/components/ui/svgs/html";
import { CSS } from "@/components/ui/svgs/css";
import { JavaScript } from "@/components/ui/svgs/javascript";
import { PHP } from "@/components/ui/svgs/php";
import { Vercel } from "@/components/ui/svgs/vercel";
import { GitHub } from "@/components/ui/svgs/github";
import { TikTok } from "@/components/ui/svgs/tiktok";
import { Reddit } from "@/components/ui/svgs/reddit";
import { Git } from "@/components/ui/svgs/git";
import { Canva } from "@/components/ui/svgs/canva";
import { Meta } from "@/components/ui/svgs/meta";
import { Instagram } from "@/components/ui/svgs/instagram";
import { Linkedin } from "@/components/ui/svgs/linkedin";
import { Photoshop } from "@/components/ui/svgs/photoshop";
import { Lightroom } from "@/components/ui/svgs/lightroom";
import { Affinity } from "@/components/ui/svgs/affinity";
import { Microsoft } from "@/components/ui/svgs/microsoft";
import { Google } from "@/components/ui/svgs/google";
import { GoogleAnalytics } from "@/components/ui/svgs/googleanalytics";
import { Capcut } from "@/components/ui/svgs/capcut";
import { Cloudflare } from "@/components/ui/svgs/cloudflare";
import { DNS } from "@/components/ui/svgs/dns";
import { Buffer } from "@/components/ui/svgs/buffer";
import { ClientFirst } from "@/components/ui/svgs/clientfirst";
import { Raisley } from "@/components/ui/svgs/raisley";
import { ConstantContact } from "@/components/ui/svgs/constantcontact";
import { Metricool } from "@/components/ui/svgs/metricool";
import { MailChimp } from "@/components/ui/svgs/mailchimp";
import { HubSpot } from "@/components/ui/svgs/hubspot";
import { BlackbaudRaiserEdge } from "@/components/ui/svgs/blackbaud";
import { Framer } from "@/components/ui/svgs/framer";
import { Hotjar } from "@/components/ui/svgs/hotjar";
import { Illustrator } from "@/components/ui/svgs/illustrator";
import { Procreate } from "@/components/ui/svgs/procreate";

export const DATA = {
  name: "Alexa Kyler - Digital Experience Designer",
  initials: "AM",
  url: "https://alexakylercreativestudio.com",
  location: "Rochester, NY",
  locationLink: "https://www.google.com/maps/place/austin+tx",
  description:
    "Web designer, CMS developer & digital marketer crafting high-converting websites and brand experiences with sharp UX/UI instinct and real marketing strategy behind them.",
  summary:
    `I’m a web designer, CMS specialist, and digital marketer with 6+ years of experience building high‑performing 
    websites and brand ecosystems across Webflow, WordPress, and Elementor. My work spans UX research, wireframing, 
    visual design, frontend development, CMS development, and ongoing optimization — always with an eye for clean 
    hierarchy, intentional interactions, and messaging that converts. Because I understand how design connects to 
    marketing, I also handle social strategy, SEO/content optimization, brand storytelling, campaign development, 
    and cross‑platform content creation — translating brand voice into assets that resonate. I’ve led end‑to‑end 
    projects for nonprofits, service businesses, and startups. I bring a blend of design sensibility, technical 
    execution, and marketing intuition. I don’t just build what I’m given — I help shape the strategy and ensure 
    it works long after launch.`,
  avatarUrl: "/me.jpg",
  ogImage: "/og_image.png",
  sections: {
    about: { order: 1, enabled: true, heading: "About" },
    work: { order: 2, enabled: true, heading: "Work Experience", presentLabel: "Present" },
    education: { order: 3, enabled: true, heading: "Education" },

    skillsgeneral: { 
      order: 4, 
      enabled: true, 
      heading: "Skills",
      subheading: "General",
      subheadingtwo: "Software" 
    },

    skills: { 
      order: 4, 
      enabled: true, 
      heading: "Skills",
      subheading: "General",
      subheadingtwo: "Software" 
    },
    projects: {
      order: 5, enabled: true,
      label: "My Projects",
      heading: "Featured Work",
      text: "I’ve designed and developed everything from simple marketing sites to full CMS platforms and UX/UI web applications. My work spans nonprofits, agency and freelance environments. I also bring a strong background in fundraising strategy and digital storytelling.",
    },
    photos: {
      order: 6, enabled: true,
      heading: "My Recent Photos",
      text: "Taken with my Sony ZV-E10",
    },
    contact: {
      order: 8, enabled: true,
      label: "Contact",
      heading: "Get in Touch",
      text: "Want to chat? Just shoot me a dm with a direct question on Linkedin and I'll respond whenever I can, or send me an e-mail.",
    },
  },
  photos: [
    { src: "/photos/photo1.jpg", alt: "Photo 1" },
    { src: "/photos/photo2.jpg", alt: "Photo 2" },
    { src: "/photos/photo3.jpg", alt: "Photo 3" },
    { src: "/photos/photo4.jpg", alt: "Photo 4" },
    { src: "/photos/photo5.jpg", alt: "Photo 5" },
    { src: "/photos/photo6.jpg", alt: "Photo 6" },
    { src: "/photos/photo7.jpg", alt: "Photo 7" },
    { src: "/photos/photo8.jpg", alt: "Photo 8" },
    { src: "/photos/photo9.jpg", alt: "Photo 9" },
  ],
  skillsgeneral: [
    { name: "Website Development" },
    { name: "UX/UI Design"},
    { name: "Performance Analytics & A/B Testing"},
    { name: "SEO/AEO"},
    { name: "Social Media Management" },
    { name: "Content Creation"},
    { name: "Graphic Design"},
    { name: "Nonprofit Marketing"},
    { name: "Fundraising" },
    { name: "Copywriting" },
    { name: "Brand Storytelling" },
    { name: "Basic IT" },
  ],
  skills: [
    { name: "Webflow", icon: Webflow },
    { name: "ClientFirst", icon: ClientFirst },
    { name: "WordPress", icon: WordPress },
    { name: "Elementor", icon: Elementor },
    { name: "Framer", icon: Framer },
    { name: "JavaScript", icon: JavaScript },
    { name: "PHP", icon: PHP},
    { name: "HTML", icon: HTML },
    { name: "CSS", icon: CSS },
    { name: "Tailwind CSS", icon: Astro },
    { name: "Astro", icon: Astro },
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Vercel", icon: Vercel },
    { name: "Git", icon: Git },
    { name: "GitHub", icon: GitHub },
    { name: "Cloudflare", icon: Cloudflare },
    { name: "DNS Configuration", icon: DNS },
    { name: "Google Workspace", icon: Google },
    { name: "Microsoft 365", icon: Microsoft},
    { name: "Google Analytics", icon: GoogleAnalytics },
    { name: "Hotjar", icon: Hotjar },
    { name: "HubSpot", icon: HubSpot},
    { name: "Figma", icon: Figma },
    { name: "Photoshop", icon: Photoshop},
    { name: "Lightroom", icon: Lightroom},
    { name: "Illustrator", icon: Illustrator},
    { name: "Procreate", icon: Procreate},
    { name: "Affinity Designer", icon: Affinity },
    { name: "DaVinci Resolve" },
    { name: "Canva", icon: Canva },
    { name: "CapCut", icon: Capcut},
    { name: "Instagram", icon: Instagram},
    { name: "TikTok", icon: TikTok},
    { name: "Reddit", icon: Reddit},
    { name: "Meta Business Suite", icon: Meta },
    { name: "Linkedin", icon: Linkedin },
    { name: "Metricool", icon: Metricool},
    { name: "Buffer", icon: Buffer},
    { name: "MailChimp", icon: MailChimp},
    { name: "Constant Contact", icon: ConstantContact},
    { name: "Raisley", icon: Raisley },
    { name: "Blackbaud Raiser Edge", icon: BlackbaudRaiserEdge },
  ],
  navbar: [
    { href: "/", icon: House, label: "Home" },
  ],
  contact: {
    email: "alexakylernyc@gmail.com",
    tel: "+1 646-932-1024",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/snowleopardAlexa",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/aleksandra-slomska-1039681b3/",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:alexakylernyc@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Everloving Paws",
      href: "https://everlovingpaws.com",
      location: "Rochester, NY",
      title: "Founder | Chief Human & Head of Creative",
      logoUrl: "/photos/everlovingpaws.png",
      start: "May 2026",
      end: undefined,
      description:
        "Founded and direct a boutique digital agency specializing exclusively in the pet industry — offering web design, CMS development, social media management, and digital marketing to pet businesses, vet clinics, and animal nonprofits.",
    },
    {
      company: "Cat Connections NYC",
      href: "https://www.catconnectionsnyc.org/our-campaigns",
      badges: [],
      location: "Astoria, Queens, NY",
      title: "Digital Experience Designer - Web & Social Media",
      logoUrl: "/photos/ccnyc.png",
      start: "June 2025",
      end: "March 2026",
      description:
        "In addition to leading the web design and development, I served as a Board Member, Managing Director, and the organization’s technical lead, overseeing all digital operations — including website management, branding, social media, fundraising strategy, and public representation. This role combined leadership, creative direction, and hands‑on execution across tech, marketing, and organizational operations.",
    },
    {
      company: "ParaGenius Foundation",
      href: "https://parageniusfoundation.org",
      badges: [],
      location: "Rochester, NY",
      title: "Website Designer & Deveoper",
      logoUrl: "/photos/paragenius.png",
      start: "March 2026",
      end: "May 2026",
      description:
        "Served as the web designer and developer, creating the site structure, visual direction, and overall digital experience. I also contributed to branding, recommended logo updates, and helped guide the organization’s broader web and creative strategy.",
    },
    {
      company: "CSJ Learning Connection",
      href: "https://thecsjlearningconnection.org",
      badges: [],
      location: "Brentwood, NY",
      title: "Web Designer & Developer",
      logoUrl: "/photos/tlc.png",
      start: "Sep 2025",
      end: "Dec 2025",
      description:
        "Served as the web designer and developer, creating the site structure, visual direction, and overall digital experience. I also contributed to branding, recommended logo updates, and helped guide the organization’s broader web and creative strategy. In addition to the design and development work, I advised the team on fundraising technology, recommended Raisely as their primary fundraising platform, and implemented DAF (Donor‑Advised Fund) support to expand their donor options and improve overall giving accessibility.",
    },
    {
      company: "Sisters of St. Joseph",
      href: "https://brentwoodcsj.org",
      badges: [],
      location: "Brentwood, NY",
      title: "Website Experience Designer | Digital Communication Designer & Manager",
      logoUrl: "/photos/sisters.png",
      start: "Dec 2023",
      end: "Dec 2025",
      description:
        "Served as the website designer, website manager, and primary technical support for the organization’s Blackbaud Raiser’s Edge–integrated website. I worked within the Communications Office, contributing to social media management, email marketing through Constant Contact, and the creation of donation pages and online forms across Blackbaud and additional platforms. I collaborated closely with three program directors to strengthen and modernize their online presence — leading the redesign and development of websites for the Long Island Immigration Clinic, the Legacy Fund, and Spirit Alive. This role combined web design, development, digital communications, and cross‑departmental leadership to support each program’s mission and visibility.",
    },
    {
      company: "aJuxt",
      href: "https://ajuxt.com/",
      badges: [],
      location: "Astoria, Queens, NY",
      title: "Content Creator & Social Media Manager",
      logoUrl: "/photos/ajuxt.png",
      start: "Jan 2022",
      end: "Jan 2023",
      description:
        "Served as a content creator and social media manager, working with a diverse range of clients — from daycares and disability care providers to science and education organizations. My responsibilities included creating content, scheduling posts across multiple platforms, monitoring performance, and managing community interactions by responding to comments, messages, and inquiries. This role combined creative production, brand consistency, and hands‑on social media operations to support each client’s digital presence and engagement.",
    },
    {
      company: "Freelancer",
      href: "https://www.freelancer.com/",
      badges: [],
      location: "Ridgewood, Queens, NY",
      title: "Web Designer & Developer",
      logoUrl: "/photos/freelancer.png",
      start: "Jan 2020",
      end: "Jan 2022",
      description:
        "I worked as a freelance web designer and developer, partnering with a variety of clients across different industries.",
    },
  ],
  education: [
    {
      school: "The City University of New York",
      href: "https://www.cuny.edu/",
      degree: "Bachelor of Arts - BA - Communication and Media Studies",
      logoUrl: "/photos/cuny.png",
      start: "2016",
      end: "2020",
    },
  ],
  projects: [
    {
      title: "Everloving Paws",
      href: "https://everlovingpaws.com",
      dates: "March 2024 - Present",
      active: true,
      description:
        "Founded Everloving Paws, a boutique agency helping pet businesses, startups, rescues, and veterinary clinics grow through modern branding, web, and marketing.",
      technologies: [
        "Webflow CMS",
        "Client First",
        "Custom CSS & JS",
        "Built-In Interactions",
        "SEO/AEO",
        "Figma",
        "Canva",
        "Google Analytics",
      ],
      links: [
        {
          type: "Website",
          href: "https://everlovingpaws.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/videos/everloving.mp4",
    },
    {
      title: "Cat Connections NYC",
      href: "https://catconnectionsnyc.org",
      dates: "September 2025 - December 2025",
      active: true,
      description:
        "Designed and built a full CMS website for a small cat rescue, creating the site architecture and showcasing adoptable and adopted cats, their mission, and their community impact.",
      technologies: [
        "Webflow CMS",
        "Custom CSS & JS",
        "Built-In Interactions",
        "SEO/AEO",
        "Figma",
        "Canva",
      ],
      links: [
        {
          type: "Website",
          href: "https://logport.io",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/ccnyctwo.jpg",
      video: "",
    },
    {
      title: "18k Raised in 5 months",
      href: "https://www.catconnectionsnyc.org/our-campaigns",
      dates: "June 2025 - January 2026",
      active: true,
      description:
        "Raised $18,000 in five months for Cat Connections NYC through multi‑platform fundraising campaigns across Raisely, Zeffy, GoFundMe, Reddit, Instagram, and Facebook.",
      technologies: [
        "Raisley",
        "GoFundMe",
        "Zeffy",
        "Fidelity Corporate Giving",
        "Reddit",
        "Webflow CMS",
      ],
      links: [
        {
          type: "Website",
          href: "https://logport.io",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/videos/ccnyc.mp4",
    },
    {
      title: "ParaGenius Foundation",
      href: "https://parageniusfoundation.org",
      dates: "March 2026 - May 2026",
      active: true,
      description:
        "Designed and built a full CMS website for a Maui-based non-profit, creating the site architecture, branding, and content, all grounded in UX research and community insights.",
      technologies: [
        "Webflow CMS",
        "Client First",
        "Built-In Interactions",
        "SEO/AEO",
        "UX Research & Strategy",
        "Figma",
        "Canva",
      ],
      links: [
        {
          type: "Website",
          href: "https://formbase.dev",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/paragenius.jpg",
      video: "",
    },
    {
      title: "CSJ Learning Connection",
      href: "https://thecsjlearningconnection.org",
      dates: "September 2025 - Dec 2025",
      active: false,
      description:
        "Designed and built a full website with language switcher for a Brentwood-based non-profit, creating the site architecture, branding, and content, all grounded in UX research and community insights.",
      technologies: [
        "Webflow CMS",
        "Custom CSS & JS",
        "Language Switcher",
        "Built-In Interactions",
        "SEO/AEO",
        "UX Research & Strategy",
        "Figma",
      ],
      links: [
        {
          type: "Website",
          href: "https://patchwork.run",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/videos/tlc.mp4",
    },
    {
      title: "TrapperAid",
      href: "https://www.behance.net/gallery/200507659/TrapperAid-UXUI-Case-Study",
      dates: "Jan 2024 - May 2024",
      active: false,
      description:
        "Researched and designed a complete UX/UI web app for Trap‑Neuter‑Return volunteers, leading the full process from user interviews and problem discovery to wireframes, prototypes, and high‑fidelity UI design.",
      technologies: [
        "UX Research",
        "Low & Hi-Fid Wireframes",
        "Prototyping",
        "User Testing",
        "UI Design",
        "Figma",
        "Photoshop",
        "Canva",
      ],
      links: [
        {
          type: "Website",
          href: "https://patchwork.run",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/trapperaid.jpg",
      video: "",
    },
    {
      title: "Petico",
      href: "https://www.behance.net/gallery/189546417/Petico-UXUI-Case-Study",
      dates: "Jan 2022 - May 2022",
      active: false,
      description:
        "Researched and designed a full UX/UI e‑commerce web app for Petico, a custom pet‑portrait platform. Led the complete process from user interviews and surveys to competitive analysis, wireframes, prototypes, and high‑fidelity UI design.",
      technologies: [
        "UX Research",
        "Low & Hi-Fid Wireframes",
        "Prototyping",
        "User Testing",
        "UI Design",
        "Figma",
        "Photoshop",
        "Canva",
      ],
      links: [
        {
          type: "Website",
          href: "https://patchwork.run",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/videos/petico.mp4",
    },
    {
      title: "Kawi",
      href: "https://www.behance.net/gallery/185578571/Kawi-Brand-Identity-Guidelines",
      dates: "February 2023 - May 2023",
      active: false,
      description:
        "Created the full brand identity and guidelines for Kawi, a shampoo and conditioner line — including color palette development, iconography, bottle label design, packaging system, and overall visual direction.",
      technologies: [
       "Photoshop",
       "Illustrator",
       "After Effects",
       "Premiere Pro",
       "Figma",
      ],
      links: [
        {
          type: "Website",
          href: "https://patchwork.run",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/videos/kawi.mp4",
    },
  ],
} as const;
