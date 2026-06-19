import type { SVGProps } from "react";

const Metricool = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 222 100"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    {...props}
  >
    <circle
      cx="50"
      cy="50"
      r="38"
      stroke="black"
      strokeWidth="24"
    />
    <circle
      cx="172"
      cy="50"
      r="38"
      stroke="black"
      strokeWidth="24"
    />
    <path
      d="M87.5 40.4211L140.5 12L127.25 62.5263L87.5 82V40.4211Z"
      fill="black"
      stroke="black"
    />
  </svg>
);

export { Metricool };
