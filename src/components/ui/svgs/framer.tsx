import * as React from "react";
import type { SVGProps } from "react";

export const Framer = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="#000000"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <title>Framer icon</title>
    <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" />
  </svg>
);
