import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-3 px-6 py-10 text-[11px] uppercase tracking-[0.16em] text-muted md:flex-row md:items-center md:justify-between md:px-12">
        <p>© 2026 Aditya Deshmukh</p>
        <p>Designed with precision.</p>
        <Link
          href="/os"
          className="w-fit text-muted transition-colors duration-300 hover:text-alabaster"
        >
          There&apos;s also an OS version →
        </Link>
      </div>
    </footer>
  );
}
