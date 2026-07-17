"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MapPin } from "lucide-react";
import { LinkedinIcon } from "./SocialIcons";

const info = [
  {
    icon: Mail,
    label: "Email",
    value: "karnikzh@gmail.com",
    href: "mailto:karnikzh@gmail.com",
    color: "text-green-700 bg-green-50 border-green-200",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Surat, India",
    href: "#",
    color: "text-amber-700 bg-amber-50 border-amber-200",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "zalak-karnik",
    href: "https://www.linkedin.com/in/zalak-karnik/",
    color: "text-blue-700 bg-blue-50 border-blue-200",
  },
];

export default function Contact() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="py-28 px-6" style={{ background: "var(--bg)" }} ref={ref}>
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="section-label">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text)] mt-2">
            Contact <span className="font-display italic gradient-text">Me</span>
          </h2>
          <div className="section-divider" />
          <p className="text-[var(--text-muted)] max-w-md mx-auto text-sm mt-6 leading-relaxed">
            Have a project in mind or want to discuss AI systems? I&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="max-w-md mx-auto">

          {/* Info column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="flex flex-col gap-3"
          >
            {info.map(({ icon: Icon, label, value, href, color }) => {
              const [bg, , border] = color.split(" ");
              return (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-white border border-[var(--border)] rounded-xl p-4 hover:border-[var(--border-2)] hover:shadow-md transition-all group"
                >
                  <div className={`w-10 h-10 rounded-xl ${bg} ${border} border flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform`}>
                    <Icon size={16} className={color.split(" ")[0]} />
                  </div>
                  <div>
                    <p className="text-[10px] text-[var(--text-faint)] uppercase tracking-wider font-semibold mb-0.5">{label}</p>
                    <p className="text-sm font-semibold text-[var(--text-2)]">{value}</p>
                  </div>
                </a>
              );
            })}

            {/* Availability card */}
            <div className="mt-2 rounded-xl p-5 border border-green-200 bg-[var(--accent-faint)]">
              <div className="flex items-center gap-2 mb-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
                </span>
                <span className="text-green-800 font-bold text-sm">Available Now</span>
              </div>
              <p className="text-green-900/60 text-xs leading-relaxed">
                Open to AI/ML roles, freelance AI projects, and research collaborations.
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {["Full-time", "Freelance", "Research"].map(t => (
                  <span key={t} className="px-2.5 py-1 rounded-lg bg-green-100 border border-green-200 text-[10px] font-bold text-green-700 uppercase tracking-wider">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
