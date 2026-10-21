import Reveal from "./Reveal";
import { CREDENTIALS } from "@/app/data/portfolio";

export default function Credentials() {
  return (
    <section
      id="credentials"
      aria-labelledby="credentials-heading"
      className="pb-16 pt-20 md:pb-24 md:pt-28"
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-12">
        <Reveal>
          <header className="mb-14 flex items-end justify-between border-b border-white/10 pb-6">
            <div className="flex items-baseline gap-4">
              <span aria-hidden="true" className="font-heading text-sm font-medium text-accent">
                05
              </span>
              <h2
                id="credentials-heading"
                className="font-heading text-sm font-medium uppercase tracking-[0.3em] text-alabaster"
              >
                Credentials
              </h2>
            </div>
            <p className="hidden text-xs text-muted md:block">
              Certificates &amp; education.
            </p>
          </header>
        </Reveal>
        <div>
          {CREDENTIALS.map((item, i) => (
            <Reveal key={item.index} delay={i * 60}>
              <div className="ledger-row group relative border-b border-white/10">
                <div className="grid grid-cols-12 items-baseline gap-x-4 gap-y-2 py-6 md:py-7">
                  <span className="col-span-2 text-xs tabular-nums text-muted md:col-span-1">
                    {item.index}
                  </span>
                  <h3 className="col-span-10 font-heading text-xl font-medium text-alabaster transition-transform duration-500 ease-out group-hover:translate-x-3 md:col-span-6 md:text-2xl">
                    {item.title}
                  </h3>
                  <p className="col-span-9 col-start-3 text-sm leading-relaxed text-muted md:col-span-3 md:col-start-auto">
                    {item.issuer}
                  </p>
                  <p className="col-span-12 text-[11px] uppercase tracking-[0.1em] text-muted/80 md:col-span-2 md:text-right">
                    {item.period}
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
