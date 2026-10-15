// Site-wide navigation, external links, and footer copy.
// TODO(alexa): confirm the AI Lab URL is live and the subscribe URL is the
// correct Substack/AI Lab signup link before launch.
export const SITE = {
  wordmark: "Alexa Kyler",
  aiLabUrl: "https://missiondrivenailab.com",
  subscribeUrl: "https://missiondrivenailab.com/subscribe",
  nav: [
    { label: "Work", href: "/work", external: false },
    { label: "About", href: "/about", external: false },
    { label: "Founder Story", href: "/founder-story", external: false },
    { label: "Tools", href: "/tools", external: false },
    { label: "eCRM Work", href: "/ecrm", external: false },
  ],
  footer: {
    email: "alexakylernyc@gmail.com",
  },
} as const;
