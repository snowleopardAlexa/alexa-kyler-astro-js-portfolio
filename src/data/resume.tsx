import { Icons } from "@/components/icons";

export const DATA = {
  name: "Alexa Kyler",
  url: "https://alexakylercreativestudio.com",
  description:
    "I build with AI for nonprofits and mission-driven teams - see the work, not the résumé.",
  ogImage: "/og_image.png",
  contact: {
    email: "alexakylernyc@gmail.com",
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
      Behance: {
        name: "Behance",
        url: "https://www.behance.net/alexakyler",
        icon: Icons.behance,
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
} as const;
