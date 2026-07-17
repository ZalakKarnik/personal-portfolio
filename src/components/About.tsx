"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Database, Rocket, GitFork } from "lucide-react";
import { yearsOfExperienceLabel } from "@/lib/experience";

const values = [
  {
    icon: Brain,
    title: "LLM & RAG Systems",
    desc: "End-to-end RAG pipelines with hybrid retrieval — BM25, vector search, and reranking.",
    iconColor: "text-[var(--tint-green-fg)]",
    iconBg: "bg-[var(--tint-green-bg)]",
  },
  {
    icon: Database,
    title: "Search & Data",
    desc: "Elasticsearch, SQL, Redis, BigQuery — scalable data pipelines and intelligent retrieval.",
    iconColor: "text-[var(--tint-teal-fg)]",
    iconBg: "bg-[var(--tint-teal-bg)]",
  },
  {
    icon: Rocket,
    title: "Backend Engineering",
    desc: "Production-grade FastAPI services and ETL pipelines supporting AI workflows.",
    iconColor: "text-amber-700",
    iconBg: "bg-amber-100",
  },
  {
    icon: GitFork,
    title: "ML & Analytics",
    desc: "Time-series forecasting, classification, NLP, and deep learning for real-world problems.",
    iconColor: "text-violet-700",
    iconBg: "bg-violet-100",
  },
];

export default function About() {
  const ref   = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const stats = [
    { value: yearsOfExperienceLabel(), label: "Years Experience", icon: "💼" },
    { value: "9.15", label: "MSc CGPA",           icon: "🎓" },
    { value: "40%",  label: "Fewer Irrelevant Results", icon: "📈" },
    { value: "2",    label: "Cloud Platforms",    icon: "☁️" },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 lg:py-28 px-5 sm:px-6" style={{ background: "var(--bg)" }} ref={ref}>
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <span className="section-label">Who I Am</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text)] mt-2">
            About <span className="font-display italic gradient-text">Me</span>
          </h2>
          <div className="section-divider" />
        </motion.div>

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">

          {/* Left — identity card */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative w-full max-w-sm">
              {/* Main card */}
              <div
                className="rounded-2xl overflow-hidden border border-[var(--border)]"
                style={{ boxShadow: "var(--shadow-lg)" }}
              >
                {/* Top visual */}
                <div
                  className="h-40 relative flex items-center justify-center"
                  style={{ background: "var(--avatar-grad)" }}
                >
                  {/* Decorative rings */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full border border-[var(--tint-green-br)]/60 opacity-60" />
                    <div className="absolute w-48 h-48 rounded-full border border-[var(--tint-green-br)]/40 opacity-40" />
                  </div>
                  <div className="relative text-7xl select-none leading-none">🤖</div>
                </div>

                {/* Info */}
                <div className="p-6 bg-[var(--surface)]">
                  <div className="text-center mb-5">
                    <h3 className="text-lg font-bold text-[var(--text)] mb-0.5">Zalak Karnik</h3>
                    <p className="text-sm text-[var(--text-muted)]">AI Engineer · Casepoint</p>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {stats.map(({ value, label, icon }) => (
                      <div
                        key={label}
                        className="rounded-xl p-3.5 border border-[var(--border)] hover:border-[var(--accent)] transition-colors text-center"
                        style={{ background: "var(--bg)" }}
                      >
                        <div className="text-lg mb-1 leading-none">{icon}</div>
                        <div className="text-xl font-bold gradient-text leading-tight">{value}</div>
                        <div className="text-[10px] text-[var(--text-faint)] mt-0.5 leading-snug">{label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right — copy */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-[var(--text)] mb-5 leading-snug">
              Building intelligent systems that{" "}
              <span className="font-display italic gradient-text">understand</span>{" "}
              and retrieve knowledge
            </h3>

            <div className="space-y-4 text-[var(--text-muted)] text-[15px] leading-relaxed">
              <p>
                I&apos;m an AI Engineer at{" "}
                <span className="font-semibold text-[var(--text-2)]">Casepoint</span>, where I build
                and deploy LLM-powered systems for E-Discovery and FOIA use cases — spanning RAG
                pipelines, Text-to-SQL, automated document summarization and more.              </p>
              <p>
                I hold an MSc in Data Science &amp; Big Data Analytics{" "}
                <span className="font-semibold text-[var(--text-2)]">(CGPA 9.15)</span> from MIT
                World Peace University — specializing in ML, NLP, deep learning, and big data systems.
              </p>
              <p>
                Certified in AWS Cloud Foundations and Amazon ML School 2024. Comfortable across
                the full ML lifecycle: from research and prototyping to production deployment on GCP
                and AWS.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="btn-primary text-sm">
                See My Work →
              </a>
              <a href="#contact" className="btn-secondary text-sm">
                Get in Touch
              </a>
            </div>

            {/* Open to Work */}
            <div className="mt-7 rounded-xl border border-[var(--tint-green-br)] bg-[var(--accent-faint)] p-4">
              <div className="flex items-center gap-2 mb-3">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent-2)]" />
                </span>
                <span className="text-xs font-bold text-[var(--accent-3)] uppercase tracking-widest">Open to Work</span>
              </div>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {["Gujarat", "Mumbai / Pune", "Bangalore", "Hyderabad"].map(region => (
                  <span key={region} className="px-2.5 py-1 rounded-lg bg-[var(--surface)] border border-[var(--tint-green-br)] text-[11px] font-semibold text-[var(--tint-green-fg)]">
                    📍 {region}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {["Remote", "Hybrid", "On-site"].map(mode => (
                  <span key={mode} className="px-2.5 py-1 rounded-lg bg-[var(--tint-green-bg)] border border-[var(--tint-green-br)] text-[11px] font-semibold text-[var(--tint-green-fg)] uppercase tracking-wide">
                    {mode}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {values.map(({ icon: Icon, title, desc, iconColor, iconBg }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.09 }}
              className="group rounded-xl p-5 border border-[var(--border)] bg-[var(--surface)] hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div className={`w-10 h-10 rounded-xl ${iconBg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <Icon size={18} className={iconColor} />
              </div>
              <h4 className="text-sm font-bold text-[var(--text)] mb-2">{title}</h4>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
