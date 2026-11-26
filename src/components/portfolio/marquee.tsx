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

// Second row starts mid-list so the two rows never line up word-for-word
const offsetRow = [...marquee.slice(5), ...marquee.slice(0, 5)];

function Row({ items, reverse }: { items: string[]; reverse?: boolean }) {
  return (
    <div
      className={`marquee-track flex w-max gap-8 ${reverse ? "marquee-reverse" : ""}`}
      aria-hidden={reverse ? "true" : undefined}
    >
      {[...items, ...items, ...items, ...items].map((m, i) => (
        <span
          key={i}
          className={`flex items-center gap-8 whitespace-nowrap font-semibold tracking-tight ${
            reverse ? "text-lg text-muted-foreground/60 md:text-xl" : "text-xl text-foreground md:text-2xl"
          }`}
        >
          {m.trim()}
          <span className="text-accent">✱</span>
        </span>
      ))}
    </div>
  );
}

export function Marquee() {
  return (
    <div
      id="services"
      className="marquee-mask flex flex-col gap-3 overflow-hidden border-y border-border bg-secondary/30 py-6"
    >
      <Row items={marquee} />
      <Row items={offsetRow} reverse />
    </div>
  );
}
