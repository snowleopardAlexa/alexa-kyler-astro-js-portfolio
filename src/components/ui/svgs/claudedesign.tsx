import type { SVGProps } from "react";

const ClaudeDesign = ({ className }: SVGProps<SVGSVGElement>) => (
  <img src="/tools/claude-design.png" alt="Claude Design" className={`rounded-sm object-cover ${className ?? ""}`} />
);

export { ClaudeDesign };
