"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const links = [
  { label: "About",      href: "#about" },
  { label: "Skills",     href: "#skills" },
  { label: "Projects",   href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact",    href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);
  const [active, setActive]     = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActive(`#${e.target.id}`); }),
      { threshold: 0.45 }
    );
    links.forEach(({ href }) => { const el = document.querySelector(href); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4"
    >
      {/* Pill nav */}
      <div
        className={`w-full max-w-3xl transition-all duration-500 ${
          scrolled || open
            ? "bg-[var(--nav-scrolled)] backdrop-blur-xl border border-[var(--border)] shadow-[var(--shadow-md)] rounded-2xl"
            : "bg-transparent rounded-2xl"
        }`}
      >
        <nav className="px-5 h-14 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <span
              className="w-8 h-8 rounded-lg bg-[var(--accent)] flex items-center justify-center text-white text-xs font-bold group-hover:scale-110 transition-transform"
              aria-hidden="true"
            >ZK</span>
            <span className="font-semibold text-[var(--text)] text-sm hidden sm:block">Zalak Karnik</span>
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1">
            {links.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className={`px-3 py-1.5 rounded-lg text-sm transition-all duration-200 relative ${
                    active === href
                      ? "text-[var(--accent-2)] font-semibold bg-[var(--accent-faint)]"
                      : "text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--bg-2)]"
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-1">
            <ThemeToggle />
            <a href="#contact" className="btn-accent text-xs px-4 py-2">
              Hire Me ↗
            </a>
          </div>

          {/* Mobile toggle */}
          <div className="md:hidden flex items-center gap-1">
            <ThemeToggle />
            <button
              onClick={() => setOpen(!open)}
              className="w-11 h-11 flex items-center justify-center rounded-lg text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--bg-2)] transition-all"
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden overflow-hidden border-t border-[var(--border)]"
            >
              <ul className="flex flex-col gap-1 p-3">
                {links.map(({ label, href }) => (
                  <li key={href}>
                    <a
                      href={href}
                      onClick={() => setOpen(false)}
                      className={`flex items-center px-4 py-2.5 rounded-xl text-sm transition-all ${
                        active === href
                          ? "text-[var(--accent-2)] font-semibold bg-[var(--accent-faint)]"
                          : "text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--bg-2)]"
                      }`}
                    >
                      {label}
                    </a>
                  </li>
                ))}
                <li className="mt-2">
                  <a href="#contact" onClick={() => setOpen(false)} className="btn-accent w-full justify-center text-xs py-2.5">
                    Hire Me ↗
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
