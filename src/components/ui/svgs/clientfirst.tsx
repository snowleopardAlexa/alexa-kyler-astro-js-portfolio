import type { SVGProps } from "react";

const ClientFirst = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 256 256"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    {...props}
  >
    <g clipPath="url(#clip0_2975_1278)">
      <path d="M256 0H0V256H256V0Z" fill="#2D62FF" />
      <rect x="53.333" y="160" width="149.333" height="24" fill="white" />
      <rect x="53.333" y="93.3335" width="64" height="24" fill="white" />
    </g>
    <defs>
      <clipPath id="clip0_2975_1278">
        <rect width="256" height="256" rx="21.3333" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export { ClientFirst };
