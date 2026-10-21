import Reveal from "./Reveal";
import { EXPERTISE } from "@/app/data/portfolio";

export default function Expertise() {
  return (
    <section
      id="expertise"
      aria-labelledby="expertise-heading"
      className="pb-14 pt-20 md:pb-20 md:pt-28"
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-12">
        <Reveal>
          <header className="mb-14 flex items-end justify-between border-b border-white/10 pb-6">
            <div className="flex items-baseline gap-4">
              <span aria-hidden="true" className="font-heading text-sm font-medium text-accent">
                02
              </span>
              <h2
                id="expertise-heading"
                className="font-heading text-sm font-medium uppercase tracking-[0.3em] text-alabaster"
              >
                Expertise
              </h2>
            </div>
            <p className="hidden text-xs text-muted md:block">
              A capability ledger — no bars, no badges.
            </p>
          </header>
        </Reveal>
        <div>
          {EXPERTISE.map((item, i) => (
            <Reveal key={item.index} delay={i * 80}>
              <div className="ledger-row group relative border-b border-white/10">
                <div className="grid grid-cols-12 items-baseline gap-x-4 gap-y-3 py-8 md:py-10">
                  <span className="col-span-2 text-xs tabular-nums text-muted md:col-span-1">
                    {item.index}
                  </span>
                  <h3 className="col-span-10 font-heading text-2xl font-medium text-alabaster transition-transform duration-500 ease-out group-hover:translate-x-3 md:col-span-4 md:text-4xl">
                    {item.title}
                  </h3>
                  <p className="col-span-12 text-sm leading-relaxed text-muted md:col-span-4">
                    {item.description}
                  </p>
                  <p className="col-span-12 text-[11px] uppercase tracking-[0.1em] text-muted/80 md:col-span-3 md:text-right">
                    {item.tech}
                  </p>
                </div>
                <span
                  aria-hidden="true"
                  className="ledger-sweep pointer-events-none absolute bottom-[-1px] left-0 h-px w-full bg-gradient-to-r from-accent via-accent/70 to-transparent"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
