"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/one-health", label: "One Health" },
  { href: "/solutions", label: "Solutions" },
  { href: "/insights", label: "Insights" },
  { href: "/partners", label: "Partners", muted: true },
];

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={[
        "sticky top-0 z-50 w-full transition-colors duration-500",
        scrolled
          ? "bg-paper/85 backdrop-blur-xl border-b border-stone-200"
          : "bg-paper border-b border-transparent",
      ].join(" ")}
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Wordmark */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
            aria-label="Kennedy McArthur — home"
          >
            <span
              className="font-serif text-xl tracking-tight text-ink"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Kennedy McArthur
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {links.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={[
                    "text-[13px] font-medium tracking-tight transition-colors duration-300",
                    link.muted ? "text-stone-400" : "text-ink/80 hover:text-ink",
                    active && !link.muted ? "text-ink" : "",
                  ].join(" ")}
                >
                  <span className="relative inline-block">
                    {link.label}
                    {active && !link.muted && (
                      <span className="absolute -bottom-1 left-0 w-full h-px bg-ink" />
                    )}
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* Contact CTA — desktop */}
          <a
            href="mailto:info@kennedymcarthur.com"
            className="hidden lg:inline-flex items-center gap-2 text-[13px] font-medium border border-ink rounded-full px-4 py-2 hover:bg-ink hover:text-paper transition-colors duration-300"
          >
            Get in touch
            <span aria-hidden>↗</span>
          </a>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="lg:hidden inline-flex flex-col items-end gap-1.5 p-2 -mr-2"
          >
            <span
              className={[
                "block h-px bg-ink transition-all duration-300",
                open ? "w-6 translate-y-[3px] rotate-45" : "w-6",
              ].join(" ")}
            />
            <span
              className={[
                "block h-px bg-ink transition-all duration-300",
                open ? "w-6 -translate-y-[4px] -rotate-45" : "w-4",
              ].join(" ")}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={[
          "lg:hidden overflow-hidden border-t border-stone-200 transition-[max-height] duration-500",
          open ? "max-h-[80vh]" : "max-h-0",
        ].join(" ")}
      >
        <nav className="px-6 py-8 flex flex-col gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className={[
                "text-2xl tracking-tight",
                link.muted ? "text-stone-400" : "text-ink",
              ].join(" ")}
              style={{ fontFamily: "var(--font-serif)" }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="mailto:info@kennedymcarthur.com"
            onClick={closeMenu}
            className="mt-4 inline-flex items-center gap-2 text-base font-medium border border-ink rounded-full px-5 py-3 self-start"
          >
            Get in touch <span aria-hidden>↗</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
