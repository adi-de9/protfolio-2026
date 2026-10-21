import { SKILL_CATEGORIES } from '../../data/portfolio-data';

export default function SkillsSection() {
  return (
    <section id="skills" className="py-14 sm:py-20 hairline-b scroll-mt-14">
      <div className="mb-10">
        <p className="font-mono text-xs text-vermilion uppercase tracking-widest mb-2">
          Technical Skills &amp; Education
        </p>
        <h2 className="font-sans font-extrabold text-3xl sm:text-5xl tracking-tight text-alabaster">
          Core <span className="font-serif italic font-normal text-vermilion">Stack</span> &amp;
          Academic Background
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {SKILL_CATEGORIES.map((cat) => (
          <div
            key={cat.title}
            className="p-6 rounded-2xl bg-charcoal hairline-box flex flex-col justify-between"
          >
            <div>
              <h3 className="font-sans font-bold text-base text-alabaster mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-2 font-mono text-xs">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg bg-surface hairline-box text-alabaster"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Education Banner */}
      <div className="p-6 sm:p-7 rounded-2xl bg-charcoal hairline-box flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="font-mono text-xs text-vermilion uppercase tracking-wider mb-1">
            Education
          </div>
          <h3 className="font-sans font-bold text-lg sm:text-xl text-alabaster">
            Bachelor of Computer Applications (BCA)
          </h3>
          <p className="text-sm text-stone mt-0.5">
            Indira Gandhi National Open University (IGNOU)
          </p>
        </div>
        <div className="font-mono text-xs text-stone px-3.5 py-2 rounded-xl bg-surface hairline-box self-start sm:self-center">
          Remote, India · Full-Stack Web and Mobile
        </div>
      </div>
    </section>
  );
}
