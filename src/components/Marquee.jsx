import { Fragment } from "react";

const ITEMS = [
  "REACT",
  "JAVASCRIPT",
  "NODE.JS",
  "HTML5",
  "CSS3",
  "MONGODB",
  "GIT",
  "FIGMA",
];

function MarqueeContent({ ariaHidden }) {
  return (
    <div className="marquee-content" aria-hidden={ariaHidden || undefined}>
      {ITEMS.map((item, i) => (
        <Fragment key={i}>
          <span>{item}</span>
          <span className="marquee-dot">◆</span>
        </Fragment>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <div className="marquee-section">
      <div className="marquee">
        <MarqueeContent />
        <MarqueeContent ariaHidden />
      </div>
    </div>
  );
}
