"use client";

import { Github } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "HOW IT WORKS", href: "#howItWorks" },
  { label: "ABOUT US", href: "#developers" },
  { label: "CONTRIBUTE", href: "#contribute" },
  { label: "CONTACT US", href: "mailto:cedricnano28@gmail.com" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={[
          "transition-all duration-300",
          scrolled
            ? "bg-neutral-950/60 backdrop-blur border-b border-white/10"
            : "bg-transparent",
        ].join(" ")}
      >
        <div className="mx-auto flex h-16 max-w-8xl items-center justify-between px-8">
          <Link
            href="#home"
            className="text-xl font-light tracking-tight text-white"
          >
            whosnext?
          </Link>

          <nav className="hidden items-center gap-3 sm:flex">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-[10px] font-semibold tracking-wide text-white/90 hover:bg-white/10"
              >
                {l.label}
              </Link>
            ))}

            <Link
              href="https://github.com/cedik456/WhosNext"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-white/5 text-white/90 hover:bg-white/10"
            >
              <Github className="h-5 w-5" />
            </Link>
          </nav>

          {/* Mobile (optional): keep minimal for now */}
          <div className="sm:hidden">
            <button
              type="button"
              aria-label="Menu"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-white/5 text-white/90"
            >
              ☰
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
