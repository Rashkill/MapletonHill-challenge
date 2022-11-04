import * as React from "react";
import { SVGProps } from "react";

const ClockSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 26 26" {...props}>
    <defs>
      <style>{".cls-clock{fill:#fff;fill-rule:evenodd}"}</style>
    </defs>
    <path
      className="cls-clock"
      d="M98.5 125A12.5 12.5 0 1 1 86 137.5 12.5 12.5 0 0 1 98.5 125Zm.017 4.078a8.389 8.389 0 1 1-8.389 8.389 8.389 8.389 0 0 1 8.389-8.389Z"
      transform="translate(-86 -125)"
    />
    <path
      className="cls-clock"
      d="m102.138 140.236-.011 1.64-1.545-.083-3.214-3.214 1.557-1.557Z"
      transform="translate(-86 -125)"
    />
    <path
      className="cls-clock"
      d="m97.364 131.747 1.11-1.07 1.091 1.07v6.818h-2.2v-6.818Z"
      transform="translate(-86 -125)"
    />
  </svg>
);

export default ClockSVG;
