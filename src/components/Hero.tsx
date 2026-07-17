"use client";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, Download } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";
import { useEffect, useState } from "react";
import { yearsOfExperienceLabel } from "@/lib/experience";

const roles = ["AI Engineer", "Data Scientist", "LLM & RAG Specialist", "ML Engineer"];

function TypewriterText({ texts }: { texts: string[] }) {
  const [index, setIndex]         = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting]   = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = texts[index];
    let timeout: NodeJS.Timeout;
    if (!deleting && charIndex <= current.length) {
      timeout = setTimeout(() => { setDisplayed(current.slice(0, charIndex)); setCharIndex(c => c + 1); }, 75);
    } else if (!deleting && charIndex > current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && charIndex >= 0) {
      timeout = setTimeout(() => { setDisplayed(current.slice(0, charIndex)); setCharIndex(c => c - 1); }, 35);
    } else {
      setDeleting(false);
      setIndex(i => (i + 1) % texts.length);
    }
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, index, texts]);

  return (
    <span className="gradient-text font-semibold font-mono text-lg md:text-xl">
      {displayed}<span className="animate-pulse text-[var(--accent)]">_</span>
    </span>
  );
}

export default function Hero() {
  const stats = [
    { value: yearsOfExperienceLabel(), label: "yrs exp" },
    { value: "9.15", label: "MSc CGPA" },
    { value: "40%", label: "retrieval ↑" },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "var(--bg)" }}
    >
      {/* Background grid */}
      <div className="absolute inset-0 grid-bg opacity-60" />

      {/* Top-right warm blob */}
      <div
        className="absolute top-[-10%] right-[-8%] w-[520px] h-[520px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(22,163,74,0.10) 0%, transparent 70%)" }}
      />
      {/* Bottom-left warm blob */}
      <div
        className="absolute bottom-[-5%] left-[-5%] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(217,119,6,0.07) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pt-28 pb-16">
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_340px] gap-12 items-center">

          {/* ── Left column ── */}
          <div>
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="flex items-center gap-3 mb-8"
            >
              <span className="badge badge-green">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
                Open to new opportunities
              </span>
              <span className="text-[var(--text-faint)] text-xs hidden sm:block">Surat, India</span>
            </motion.div>

            {/* Name — editorial treatment */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-sm text-[var(--text-muted)] font-medium mb-2 tracking-wide">Hi, I&apos;m</p>
              <h1 className="font-display text-6xl md:text-7xl lg:text-8xl text-[var(--text)] leading-[0.92] mb-6">
                Zalak<br />
                <em className="gradient-text not-italic">Karnik</em>
              </h1>
            </motion.div>

            {/* Typewriter role */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-2 mb-6 h-8"
            >
              <span className="text-[var(--text-muted)] text-sm">→</span>
              <TypewriterText texts={roles} />
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-[var(--text-muted)] max-w-xl text-base leading-relaxed mb-10"
            >
              Building LLM-powered systems at production scale — RAG pipelines,
              Text-to-SQL, hybrid retrieval, and intelligent document processing.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.62 }}
              className="flex flex-wrap items-center gap-3 mb-10"
            >
              <a href="#projects" className="btn-primary">
                View My Work <ArrowRight size={15} />
              </a>
              <a
                href="/Zalak_Karnik_Resume_Upload.pdf"
                download="Zalak-Karnik-Resume.pdf"
                className="btn-secondary"
              >
                <Download size={15} /> Download CV
              </a>
            </motion.div>

            {/* Socials + quick stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.75 }}
              className="flex flex-wrap items-center gap-6"
            >
              <div className="flex items-center gap-2">
                {[
                  { icon: GithubIcon, href: "https://github.com/ZalakKarnik", label: "GitHub" },
                  { icon: LinkedinIcon, href: "https://www.linkedin.com/in/zalak-karnik/", label: "LinkedIn" },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-9 h-9 rounded-lg border border-[var(--border)] bg-[var(--surface)] hover:border-[var(--accent)] hover:text-[var(--accent)] text-[var(--text-muted)] flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[var(--shadow-green)]"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>

              <div className="w-px h-6 bg-[var(--border)]" />

              {/* Quick stats inline */}
              <div className="flex items-center gap-5">
                {stats.map(({ value, label }) => (
                  <div key={label} className="text-center">
                    <p className="text-base font-bold text-[var(--text)] leading-none">{value}</p>
                    <p className="text-xs text-[var(--text-faint)] mt-0.5">{label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ── Right column — floating card ── */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: 0.55, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="hidden xl:block"
          >
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="relative"
            >
              {/* Main card */}
              <div
                className="rounded-2xl border border-[var(--border)] overflow-hidden"
                style={{ background: "var(--surface)", boxShadow: "var(--shadow-lg)" }}
              >
                {/* Card header */}
                <div
                  className="h-28 relative overflow-hidden flex items-end p-5"
                  style={{ background: "linear-gradient(135deg, #f0fdf4, #dcfce7)" }}
                >
                  <div
                    className="absolute top-3 right-3 w-24 h-24 rounded-full opacity-30"
                    style={{ background: "radial-gradient(circle, var(--accent), transparent)" }}
                  />
                  <div className="text-5xl leading-none select-none">🤖</div>
                  <div
                    className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold"
                    style={{ background: "rgba(255,255,255,0.85)", color: "var(--accent-3)", border: "1px solid #bbf7d0" }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
                    Available
                  </div>
                </div>

                {/* Card body */}
                <div className="p-5">
                  <h3 className="font-semibold text-[var(--text)] text-sm mb-0.5">Zalak Karnik</h3>
                  <p className="text-xs text-[var(--text-muted)] mb-4">AI Engineer · Surat, India</p>

                  <div className="space-y-2.5">
                    {[
                      { icon: "🎓", label: "MSc Data Science", sub: "CGPA 9.15 · MIT-WPU" },
                      { icon: "💼", label: "Associate Data Scientist", sub: "Casepoint" },
                      { icon: "🏆", label: "Amazon ML School 2024", sub: "Certified" },
                    ].map(({ icon, label, sub }) => (
                      <div key={label} className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-[var(--bg)] transition-colors">
                        <span className="text-xl leading-none">{icon}</span>
                        <div>
                          <p className="text-xs font-semibold text-[var(--text)]">{label}</p>
                          <p className="text-[10px] text-[var(--text-faint)]">{sub}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-[var(--text-faint)] text-xs hover:text-[var(--accent)] transition-colors group"
        aria-label="Scroll down"
      >
        <span className="tracking-wider uppercase text-[10px]">Scroll</span>
        <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.6 }}>
          <ArrowDown size={14} />
        </motion.div>
      </motion.a>
    </section>
  );
}
