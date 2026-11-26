const marquee = [
  "BUSINESS EXPANSION",
  "STRATEGIC OPERATIONS",
  "CORPORATE TRAINING",
  "BRANDING & MARKETING",
  "DIGITAL TRANSFORMATION",
  "TECHNOLOGY SOLUTIONS\n",
  "BUSINESS ANALYTICS\u00a0",
  "INNOVATION & GROWTH STRATEGY",
  "INVESTMENT STRATEGY",
  "MARKET & INDUSTRY RESEARCH\n",
  "GROWTH CAPITAL ADVISORY\n",
];

export function Marquee() {
  return (
    <div id="services" className="overflow-hidden border-y border-border bg-secondary/30 py-5">
      <div className="marquee-track flex w-max gap-10">
        {[...marquee, ...marquee, ...marquee, ...marquee].map((m, i) => (
          <span
            key={i}
            className="text-display flex items-center gap-10 text-xl text-foreground"
          >
            {m}
            <span className="size-1.5 rounded-full bg-accent" />
          </span>
        ))}
      </div>
    </div>
  );
}