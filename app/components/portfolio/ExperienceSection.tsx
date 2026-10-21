import { EXPERIENCES } from '../../data/portfolio-data';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-14 sm:py-20 hairline-b scroll-mt-14">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Left Column Heading */}
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-24 space-y-3">
            <p className="font-mono text-xs text-vermilion uppercase tracking-widest">
              Work Experience
            </p>
            <h2 className="font-sans font-extrabold text-3xl sm:text-5xl tracking-tight text-alabaster leading-tight">
              Engineering{' '}
              <span className="font-serif italic font-normal text-vermilion">Roles</span> &amp;
              Impact
            </h2>
            <p className="text-stone text-sm sm:text-base leading-relaxed">
              Hands-on experience building full-stack event systems, refactoring enterprise React
              portals, and shipping mobile-ready 3D web applications.
            </p>
          </div>
        </div>

        {/* Right Column Experience Cards */}
        <div className="lg:col-span-8 space-y-5">
          {EXPERIENCES.map((exp) => (
            <article
              key={exp.company}
              className="p-6 sm:p-8 rounded-2xl bg-charcoal hairline-box touch-card"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <span
                  className={`font-mono text-xs px-2.5 py-1 rounded-md font-medium ${
                    exp.isCurrent
                      ? 'bg-moss/15 border border-moss/35 text-moss'
                      : 'bg-surface hairline-box text-alabaster'
                  }`}
                >
                  {exp.badge}
                </span>
                <span className="font-mono text-xs text-stone">{exp.stack}</span>
              </div>

              <h3 className="font-sans font-bold text-xl sm:text-2xl text-alabaster">
                {exp.role} <span className="text-stone font-normal">at</span> {exp.company}
              </h3>

              <ul className="mt-4 space-y-2.5 text-sm sm:text-base text-stone leading-relaxed">
                {exp.highlights.map((bullet, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="text-vermilion font-mono text-xs mt-1">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
