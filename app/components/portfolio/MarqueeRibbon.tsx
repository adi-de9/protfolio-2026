import { MARQUEE_ITEMS } from '../../data/portfolio-data';

export default function MarqueeRibbon() {
  return (
    <div className="py-3 bg-charcoal hairline-b overflow-hidden select-none">
      <div className="marquee-track font-mono text-xs text-stone flex items-center gap-8">
        {MARQUEE_ITEMS.map((item, idx) => (
          <span key={`first-${item}-${idx}`} className="flex items-center gap-8">
            <span className="text-alabaster">{item}</span>
            <span className={idx % 2 === 0 ? 'text-vermilion' : 'text-moss'}>·</span>
          </span>
        ))}
        {/* Duplicate for seamless infinite loop */}
        {MARQUEE_ITEMS.map((item, idx) => (
          <span key={`second-${item}-${idx}`} className="flex items-center gap-8">
            <span className="text-alabaster">{item}</span>
            <span className={idx % 2 === 0 ? 'text-vermilion' : 'text-moss'}>·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
