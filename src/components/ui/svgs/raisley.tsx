import type { SVGProps } from "react";

const Raisley = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    {...props}
  >
    <circle
      cx="100"
      cy="100"
      r="88"
      stroke="#6138D8"
      strokeWidth="24"
    />
    <path
      d="M40.5 171L100.5 98L159.5 171"
      stroke="#6138D8"
      strokeWidth="24"
    />
  </svg>
);

export { Raisley };

