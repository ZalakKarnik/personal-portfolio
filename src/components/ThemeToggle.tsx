"use client";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

type Theme = "light" | "dark";

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  // Skip the CSS transitions mid-swap so the page flips as one frame
  root.setAttribute("data-theme-switching", "");
  root.setAttribute("data-theme", theme);
  window.setTimeout(() => root.removeAttribute("data-theme-switching"), 0);
}

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // The inline script in layout.tsx already resolved the theme before paint
    const current = (document.documentElement.getAttribute("data-theme") as Theme) ?? "light";
    setTheme(current);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    // Follow the OS only while the visitor hasn't made an explicit choice
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = (e: MediaQueryListEvent) => {
      if (localStorage.getItem("theme")) return;
      const next: Theme = e.matches ? "dark" : "light";
      applyTheme(next);
      setTheme(next);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [mounted]);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    applyTheme(next);
    localStorage.setItem("theme", next);
    setTheme(next);
  };

  const isDark = theme === "dark";

  return (
    <button
      onClick={toggle}
      className={`relative w-9 h-9 flex items-center justify-center rounded-lg text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--bg-2)] transition-all ${className}`}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {/* Render nothing until mounted: the server can't know the visitor's theme */}
      {mounted && (
        <motion.span
          key={theme}
          initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex"
        >
          {isDark ? <Sun size={17} /> : <Moon size={17} />}
        </motion.span>
      )}
    </button>
  );
}
