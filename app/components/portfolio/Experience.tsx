import Reveal from "./Reveal";
import { EXPERIENCE } from "@/app/data/portfolio";

export default function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="pb-14 pt-20 md:pb-20 md:pt-28"
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-12">
        <Reveal>
          <header className="mb-14 flex items-end justify-between border-b border-white/10 pb-6">
            <div className="flex items-baseline gap-4">
              <span aria-hidden="true" className="font-heading text-sm font-medium text-accent">
                03
              </span>
              <h2
                id="experience-heading"
                className="font-heading text-sm font-medium uppercase tracking-[0.3em] text-alabaster"
              >
                Experience
              </h2>
            </div>
            <p className="hidden text-xs text-muted md:block">
              Three teams, one habit: ship.
            </p>
          </header>
        </Reveal>
        <div>
          {EXPERIENCE.map((item, i) => (
            <Reveal key={item.index} delay={i * 80}>
              <div className="ledger-row group relative border-b border-white/10">
                <div className="grid grid-cols-12 items-baseline gap-x-4 gap-y-3 py-8 md:py-10">
                  <span className="col-span-2 text-xs tabular-nums text-muted md:col-span-1">
                    {item.index}
                  </span>
                  <h3 className="col-span-10 font-heading text-2xl font-medium text-alabaster transition-transform duration-500 ease-out group-hover:translate-x-3 md:col-span-4 md:text-3xl">
                    {item.role}
                  </h3>
                  <p className="col-span-12 text-sm leading-relaxed text-muted md:col-span-4">
                    {item.description}
                  </p>
                  <div className="col-span-12 md:col-span-3 md:text-right">
                    <p className="text-[11px] uppercase tracking-[0.1em] text-alabaster/80">
                      {item.company}
                    </p>
                    <p className="mt-1 text-[11px] uppercase tracking-[0.1em] text-muted/80">
                      {item.period}
                    </p>
                  </div>
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
