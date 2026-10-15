import type { SVGProps } from "react";

// Lettered badge for tools without a brand SVG in this repo yet.
const monogram = (letters: string, color: string) => {
  const Monogram = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
      <rect width="32" height="32" rx="7" fill={color} />
      <text
        x="16"
        y="16"
        dy="0.35em"
        textAnchor="middle"
        fontFamily="system-ui, sans-serif"
        fontSize={letters.length > 2 ? 11 : 14}
        fontWeight="700"
        fill="#fff"
      >
        {letters}
      </text>
    </svg>
  );
  return Monogram;
};

export const HTML5 = monogram("5", "#E34F26");
export const Drupal = monogram("D", "#0678BE");
export const GoFundMe = monogram("GF", "#02A95C");
export const GoogleTagManager = monogram("GTM", "#246FDB");
export const NodeJS = monogram("JS", "#5FA04E");
export const Zeffy = monogram("Z", "#7A5CFA");
export const EngagingNetworks = monogram("EN", "#00A3AD");
export const Accessibility = monogram("A11Y", "#1F6FEB");
export const GDPR = monogram("EU", "#003399");
export const SearchConsole = monogram("GSC", "#4285F4");
export const ABTesting = monogram("A/B", "#E8710A");
export const WebVitals = monogram("CWV", "#0CCE6B");
export const PCI = monogram("PCI", "#374151");
