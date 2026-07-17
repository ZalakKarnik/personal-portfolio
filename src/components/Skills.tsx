"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const categories = [
  {
    name: "AI / LLM Stack",
    emoji: "🧠",
    accent: "green",
    skills: ["RAG Pipelines", "LangChain", "Prompt Engineering", "Embeddings & Reranking", "Text-to-SQL", "OpenAI API"],
  },
  {
    name: "ML & Data Science",
    emoji: "📊",
    accent: "teal",
    skills: ["Machine Learning", "NLP", "Time Series", "Deep Learning", "scikit-learn", "Prophet", "Optuna"],
  },
  {
    name: "Backend & Cloud",
    emoji: "⚙️",
    accent: "stone",
    skills: ["Python", "FastAPI", "Elasticsearch", "Redis", "BigQuery", "Vertex AI", "AWS", "Docker"],
  },
];

const techStack = [
  { name: "Python",       emoji: "🐍", hot: true  },
  { name: "LangChain",    emoji: "🔗", hot: true  },
  { name: "RAG",          emoji: "🔍", hot: true  },
  { name: "LLMs",         emoji: "🤖", hot: true  },
  { name: "llama.cpp",    emoji: "🦙", hot: true  },
  { name: "FastAPI",      emoji: "⚡", hot: true  },
  { name: "Elasticsearch",emoji: "🔎", hot: true  },
  { name: "Redis",        emoji: "🔴", hot: true  },
  { name: "SQL",          emoji: "🗄️", hot: true  },
  { name: "BigQuery",     emoji: "📦", hot: false },
  { name: "scikit-learn", emoji: "🧬", hot: false },
  { name: "TensorFlow",   emoji: "🌊", hot: false },
  { name: "Keras",        emoji: "🔥", hot: false },
  { name: "Pandas",       emoji: "🐼", hot: false },
  { name: "NumPy",        emoji: "🔢", hot: false },
  { name: "Prophet",      emoji: "📈", hot: false },
  { name: "Optuna",       emoji: "🎯", hot: false },
  { name: "Vertex AI",    emoji: "☁️", hot: false },
  { name: "Docker",       emoji: "🐳", hot: false },
  { name: "Git",          emoji: "📂", hot: false },
];

const accentMap: Record<string, { text: string; light: string; pill: string }> = {
  green: { text: "text-green-700", light: "bg-green-100", pill: "bg-green-50 border-green-200 text-green-800" },
  teal:  { text: "text-teal-700",  light: "bg-teal-100",  pill: "bg-teal-50 border-teal-200 text-teal-800"   },
  stone: { text: "text-stone-600", light: "bg-stone-100", pill: "bg-stone-50 border-stone-200 text-stone-700" },
};

export default function Skills() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-28 px-6 section-alt" ref={ref}>
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="section-label">What I Know</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text)] mt-2">
            My <span className="font-display italic gradient-text">Skills</span>
          </h2>
          <div className="section-divider" />
        </motion.div>

        {/* Skill categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {categories.map((cat, ci) => {
            const a = accentMap[cat.accent];
            return (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: ci * 0.12 }}
                className="bg-white rounded-2xl p-6 border border-[var(--border)] hover:shadow-md transition-shadow"
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-10 h-10 rounded-xl ${a.light} flex items-center justify-center text-xl leading-none`}>
                    {cat.emoji}
                  </div>
                  <p className={`text-xs font-bold ${a.text} uppercase tracking-widest`}>{cat.name}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map(skill => (
                    <span key={skill} className={`px-3 py-1.5 rounded-lg border text-xs font-medium ${a.pill}`}>
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {[
            { label: "AWS Academy Cloud Foundation", year: "2022", emoji: "☁️", color: "border-amber-200 bg-amber-50 text-amber-800" },
            { label: "Amazon ML School",             year: "2024", emoji: "🏆", color: "border-green-200 bg-green-50 text-green-800" },
          ].map(({ label, year, emoji, color }) => (
            <div
              key={label}
              className={`flex items-center gap-3 border rounded-xl px-5 py-3.5 ${color} hover:-translate-y-0.5 transition-transform cursor-default`}
            >
              <span className="text-2xl">{emoji}</span>
              <div>
                <p className="text-sm font-semibold">{label}</p>
                <p className="text-xs opacity-60 mt-0.5">Certified · {year}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Tech pill grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="text-center text-xs text-[var(--text-faint)] uppercase tracking-widest font-semibold mb-5">
            Tools &amp; Libraries
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {techStack.map((tech, i) => (
              <motion.span
                key={tech.name}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.55 + i * 0.025 }}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium cursor-default transition-all duration-200 hover:-translate-y-0.5 ${
                  tech.hot
                    ? "bg-[var(--accent-faint)] border border-green-200 text-[var(--accent-3)] hover:shadow-[var(--shadow-green)]"
                    : "bg-white border border-[var(--border)] text-[var(--text-muted)] hover:border-[var(--border-2)]"
                }`}
              >
                <span className="text-sm leading-none">{tech.emoji}</span>
                {tech.name}
                {tech.hot && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] opacity-80" />
                )}
              </motion.span>
            ))}
          </div>
          <p className="text-center text-[10px] text-[var(--text-faint)] mt-3">
            <span className="inline-flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] inline-block" />
              Core stack highlighted
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
