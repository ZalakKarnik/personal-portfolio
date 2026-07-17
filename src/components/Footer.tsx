"use client";
import { Mail, Heart, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";

const socials = [
  { icon: GithubIcon,   href: "https://github.com/ZalakKarnik",             label: "GitHub"   },
  { icon: LinkedinIcon, href: "https://www.linkedin.com/in/zalak-karnik/",   label: "LinkedIn" },
  { icon: Mail,         href: "mailto:karnikzh@gmail.com",                   label: "Email"    },
];

const navLinks = [
  { label: "About",      href: "#about"      },
  { label: "Skills",     href: "#skills"     },
  { label: "Projects",   href: "#projects"   },
  { label: "Experience", href: "#experience" },
  { label: "Contact",    href: "#contact"    },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-12 sm:py-14 px-5 sm:px-6" style={{ background: "var(--bg-2)" }}>
      <div className="max-w-6xl mx-auto">

        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

          {/* Brand */}
          <div>
            <a href="#" className="flex items-center gap-2 mb-3 group w-fit">
              <span className="w-9 h-9 rounded-xl bg-[var(--accent)] flex items-center justify-center text-white text-sm font-bold group-hover:scale-105 transition-transform">ZK</span>
              <span className="text-base font-bold text-[var(--text)]">Zalak Karnik</span>
            </a>
            <p className="text-xs text-[var(--text-muted)] leading-relaxed max-w-xs">
              AI Engineer building LLM-powered systems at production scale. Based in Surat, India.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="text-[10px] font-bold text-[var(--text-faint)] uppercase tracking-widest mb-4">Quick Links</p>
            <nav className="grid grid-cols-2 gap-2">
              {navLinks.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="text-sm text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div>
            <p className="text-[10px] font-bold text-[var(--text-faint)] uppercase tracking-widest mb-4">Connect</p>
            <div className="flex gap-2 mb-4">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 bg-[var(--surface)] border border-[var(--border)] rounded-xl flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--accent)] hover:border-[var(--tint-green-br)] hover:-translate-y-0.5 transition-all shadow-sm"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
            <p className="text-xs text-[var(--text-muted)]">karnikzh@gmail.com</p>
            <p className="text-xs text-[var(--text-faint)] mt-0.5">Surat, Gujarat, India</p>
          </div>
        </div>

        {/* Bottom row */}
        <div className="border-t border-[var(--border)] pt-8 flex flex-row flex-wrap items-center justify-between gap-4">
          <p className="text-xs text-[var(--text-faint)] flex items-center gap-1.5">
            Built with <Heart size={11} className="text-[var(--accent)] fill-[var(--accent)]" /> by Zalak Karnik &mdash; {new Date().getFullYear()}
          </p>
          <p className="hidden md:block text-xs text-[var(--text-faint)]">Next.js · TypeScript · Tailwind CSS · Framer Motion</p>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="w-8 h-8 rounded-lg bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--accent)] hover:border-[var(--tint-green-br)] transition-all shadow-sm hover:-translate-y-0.5"
          >
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
