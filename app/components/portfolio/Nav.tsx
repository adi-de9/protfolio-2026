const NAV_LINKS = [
  { href: "#work", label: "Work" },
  { href: "#expertise", label: "Expertise" },
  { href: "#experience", label: "Experience" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-obsidian/75 backdrop-blur-md">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-6 md:px-12"
      >
        <a
          href="#top"
          aria-label="Aditya Deshmukh — back to top"
          className="flex h-9 w-9 items-center justify-center border border-white/15 font-heading text-[13px] font-semibold tracking-tight text-alabaster transition-colors duration-300 hover:border-accent/70 hover:text-white"
        >
          AD
        </a>
        <div className="hidden items-center gap-9 text-[11px] uppercase tracking-[0.22em] text-muted md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link transition-colors duration-300 hover:text-alabaster"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div aria-label="Availability status" role="status" className="flex items-center gap-2.5">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
          </span>
          <span className="text-[10px] uppercase tracking-[0.2em] text-muted">
            Available for work
          </span>
        </div>
      </nav>
    </header>
  );
}
