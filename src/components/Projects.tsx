"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./SocialIcons";

const projects = [
  {
    title: "AI Multi-Agent Financial Research Platform",
    description:
      "Turns a single NSE/BSE ticker into a full equity research report, orchestrating 11 specialized agents across fundamentals, valuation, news, competitors, and risk — every figure computed deterministically with source traceability.",
    tags: ["Python", "Multi-Agent", "FastAPI", "React"],
    category: "LLM / RAG",
    emoji: "📊",
    metric: "11 agents orchestrated",
    org: "Personal",
    orgColor: "bg-[var(--tint-neut-bg)] text-[var(--tint-neut-fg)] border-[var(--tint-neut-br)]",
    headerGradient: "from-blue-50 via-indigo-50 to-sky-50",
    accentColor: "#2563eb",
    github: "",
    live: "https://ai-finance-research-woad.vercel.app/",
  },
  {
    title: "Chat with Multiple PDFs (Gemini RAG Chatbot)",
    description:
      "Streamlit chatbot to upload and query multiple PDFs in natural language, using PyPDF2 extraction, chunking, and FAISS vector search for fast, context-aware answers.",
    tags: ["LangChain", "Google Gemini", "FAISS", "Streamlit"],
    category: "LLM / RAG",
    emoji: "📄",
    metric: "Multi-PDF Q&A",
    org: "Personal",
    orgColor: "bg-[var(--tint-neut-bg)] text-[var(--tint-neut-fg)] border-[var(--tint-neut-br)]",
    headerGradient: "from-rose-50 via-pink-50 to-orange-50",
    accentColor: "#e11d48",
    github: "",
    live: "",
  },
  {
    title: "RAG Pipeline — E-Discovery & FOIA",
    description:
      "End-to-end RAG system enabling Text-to-SQL querying, and automated document summarization. Reduced irrelevant outputs by 40%.",
    tags: ["LangChain", "FastAPI", "Python"],
    category: "LLM / RAG",
    emoji: "🔍",
    metric: "40% ↓ irrelevant output",
    org: "Casepoint",
    orgColor: "bg-[var(--tint-green-bg)] text-[var(--tint-green-fg)] border-[var(--tint-green-br)]",
    headerGradient: "from-green-50 via-emerald-50 to-teal-50",
    accentColor: "#16a34a",
    github: "",
    live: "",
  },
  {
    title: "Hybrid Retrieval System",
    description:
      "BM25 + vector search + reranking pipeline with dynamic prompt management via Redis-based storage and real-time Python API execution.",
    tags: ["BM25", "Vector Search", "Elasticsearch", "Python"],
    category: "LLM / RAG",
    emoji: "⚡",
    metric: "Hybrid precision boost",
    org: "Casepoint",
    orgColor: "bg-[var(--tint-green-bg)] text-[var(--tint-green-fg)] border-[var(--tint-green-br)]",
    headerGradient: "from-green-50 via-lime-50 to-emerald-50",
    accentColor: "#16a34a",
    github: "",
    live: "",
  },
  {
    title: "Loan Disbursement Forecasting",
    description:
      "Time-series forecasting with Prophet improving prediction accuracy by 15%. Risk analysis cutting fraud detection time by 30%.",
    tags: ["Prophet", "Python", "BigQuery", "Vertex AI"],
    category: "ML / Data Science",
    emoji: "📈",
    metric: "15% accuracy ↑",
    org: "L&T Finance",
    orgColor: "bg-[var(--tint-teal-bg)] text-[var(--tint-teal-fg)] border-[var(--tint-teal-br)]",
    headerGradient: "from-teal-50 via-cyan-50 to-sky-50",
    accentColor: "#0d9488",
    github: "",
    live: "",
  },
  {
    title: "Credit Card Fraud Detection",
    description:
      "Random Forest classifier with hyperparameter tuning via Optuna. Improved F1 score from 0.77 → 0.79, significantly reducing false positives.",
    tags: ["Python", "Random Forest", "scikit-learn", "Optuna"],
    category: "ML / Data Science",
    emoji: "🛡️",
    metric: "F1 0.77 → 0.79",
    org: "Academic",
    orgColor: "bg-[var(--tint-neut-bg)] text-[var(--tint-neut-fg)] border-[var(--tint-neut-br)]",
    headerGradient: "from-stone-50 via-slate-50 to-gray-50",
    accentColor: "#78716c",
    github: "https://github.com/ZalakKarnik/Credit_Card_Fraud_Prediction",
    live: "",
  },
  {
    title: "Movie Recommendation System",
    description:
      "Recommendation engine using cosine similarity and KNN — both content-based and collaborative filtering for improved personalization.",
    tags: ["Python", "KNN", "Cosine Similarity", "Pandas"],
    category: "ML / Data Science",
    emoji: "🎬",
    metric: "Dual-mode filtering",
    org: "Academic",
    orgColor: "bg-[var(--tint-neut-bg)] text-[var(--tint-neut-fg)] border-[var(--tint-neut-br)]",
    headerGradient: "from-violet-50 via-purple-50 to-fuchsia-50",
    accentColor: "#7c3aed",
    github: "https://github.com/ZalakKarnik/Movie_Recommendation",
    live: "",
  },
  {
    title: "R-to-Python Migration & ETL",
    description:
      "Migrated 10+ R scripts to Python for improved processing efficiency. Large-scale data management using BigQuery on Vertex AI.",
    tags: ["Python", "BigQuery", "ETL", "GCP"],
    category: "Backend / Data",
    emoji: "🔄",
    metric: "10+ scripts migrated",
    org: "L&T Finance",
    orgColor: "bg-[var(--tint-teal-bg)] text-[var(--tint-teal-fg)] border-[var(--tint-teal-br)]",
    headerGradient: "from-amber-50 via-orange-50 to-yellow-50",
    accentColor: "#d97706",
    github: "",
    live: "",
  },
];

const filters = ["All", "LLM / RAG", "ML / Data Science", "Backend / Data"];

export default function Projects() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? projects : projects.filter(p => p.category === active);

  return (
    <section id="projects" className="py-16 sm:py-24 lg:py-28 px-5 sm:px-6" style={{ background: "var(--bg)" }} ref={ref}>
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="section-label">What I&apos;ve Built</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text)] mt-2">
            Featured <span className="font-display italic gradient-text">Projects</span>
          </h2>
          <div className="section-divider" />
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                active === f
                  ? "bg-[var(--btn-primary-bg)] text-[var(--btn-primary-fg)] shadow-md"
                  : "bg-[var(--surface)] border border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--text)] hover:border-[var(--border-2)]"
              }`}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project, i) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="bg-[var(--surface)] rounded-2xl border border-[var(--border)] overflow-hidden group hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 flex flex-col"
            >
              {/* Card header with gradient */}
              <div className={`project-header relative h-32 bg-gradient-to-br ${project.headerGradient} flex items-end justify-between px-5 pb-4 overflow-hidden`}>
                {/* Accent circle decoration */}
                <div
                  className="absolute -top-6 -right-6 w-28 h-28 rounded-full opacity-20"
                  style={{ background: project.accentColor }}
                />

                <span className="text-5xl leading-none select-none group-hover:scale-110 transition-transform duration-300">
                  {project.emoji}
                </span>

                <div className="flex flex-col items-end gap-1.5">
                  <span className={`text-[10px] px-2 py-0.5 rounded-full border font-semibold uppercase tracking-wide ${project.orgColor}`}>
                    {project.org}
                  </span>
                  {/* Metric badge */}
                  <span
                    className="text-[10px] px-2 py-0.5 rounded-full font-medium font-mono"
                    style={{ background: "var(--metric-badge-bg)", color: project.accentColor, border: `1px solid ${project.accentColor}30` }}
                  >
                    {project.metric}
                  </span>
                </div>
              </div>

              {/* Card content */}
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="text-sm font-bold text-[var(--text)] leading-snug flex-1">{project.title}</h3>
                </div>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed mb-4 flex-1">{project.description}</p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>

                <div className="flex gap-4 pt-3 border-t border-[var(--border)]">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-[var(--text-faint)] hover:text-[var(--text)] transition-colors font-medium group/link"
                    >
                      <GithubIcon size={13} />
                      <span>Code</span>
                      <ArrowUpRight size={10} className="opacity-0 group-hover/link:opacity-100 transition-opacity" />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-[var(--text-faint)] hover:text-[var(--accent)] transition-colors font-medium group/link"
                    >
                      <ExternalLink size={13} />
                      <span>Live</span>
                      <ArrowUpRight size={10} className="opacity-0 group-hover/link:opacity-100 transition-opacity" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="text-center mt-10"
        >
          <a
            href="https://github.com/ZalakKarnik"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex text-sm"
          >
            <GithubIcon size={15} />
            See all on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
