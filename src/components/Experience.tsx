"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap, MapPin, Calendar } from "lucide-react";

const experience = [
  {
    type: "work",
    role: "Associate Data Scientist",
    company: "Casepoint",
    period: "Dec 2024 – Present",
    location: "Surat, India",
    desc: "Developed and deployed end-to-end RAG pipelines for E-Discovery and FOIA enabling semantic search, Text-to-SQL querying, and automated summarization. Implemented hybrid retrieval (BM25 + vector search + reranking) and a secure prompt management system with Redis-based storage.",
    tags: ["LangChain", "RAG", "Elasticsearch", "FastAPI", "Redis", "Python"],
    highlight: "Current role",
  },
  {
    type: "work",
    role: "Data Science Intern",
    company: "L&T Finance",
    period: "Jan 2024 – Oct 2024",
    location: "Mumbai, India",
    desc: "Built a time-series forecasting model using Prophet improving prediction accuracy by 15%. Conducted risk analysis reducing fraud detection time by 30%. Migrated 10+ R scripts to Python and managed large-scale data using BigQuery on Vertex AI.",
    tags: ["Prophet", "BigQuery", "Vertex AI", "Python", "Risk Analysis"],
    highlight: "10 months",
  },
  {
    type: "education",
    role: "MSc Data Science & Big Data Analytics",
    company: "MIT World Peace University",
    period: "2022 – 2024",
    location: "Pune, Maharashtra",
    desc: "CGPA: 9.15 / 10.00. Specialized in ML, NLP, deep learning, and big data systems. Projects spanning fraud detection, recommendation systems, and statistical modelling.",
    tags: ["ML", "NLP", "Deep Learning", "Statistics", "Big Data"],
    highlight: "CGPA 9.15",
  },
  {
    type: "education",
    role: "BSc Mathematics",
    company: "Sir P T Sarvajanik College of Science",
    period: "2019 – 2022",
    location: "Surat, Gujarat",
    desc: "CGPA: 8.50 / 10.00. Strong foundation in pure and applied mathematics, statistics, and mathematical modelling.",
    tags: ["Mathematics", "Statistics", "Modelling"],
    highlight: "CGPA 8.50",
  },
];

export default function Experience() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="py-28 px-6 section-alt" ref={ref}>
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="section-label">My Journey</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text)] mt-2">
            Experience &{" "}
            <span className="font-display italic gradient-text">Education</span>
          </h2>
          <div className="section-divider" />
        </motion.div>

        {/* Two-column labels */}
        <div className="hidden md:grid md:grid-cols-2 gap-6 mb-6 px-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-green-100 border border-green-200 flex items-center justify-center">
              <Briefcase size={13} className="text-green-700" />
            </div>
            <span className="text-xs font-semibold text-green-700 uppercase tracking-widest">Work Experience</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-stone-100 border border-stone-200 flex items-center justify-center">
              <GraduationCap size={13} className="text-stone-600" />
            </div>
            <span className="text-xs font-semibold text-stone-500 uppercase tracking-widest">Education</span>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line — desktop only */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-[var(--border-2)] -translate-x-1/2" />

          {experience.map((item, i) => {
            const isWork  = item.type === "work";
            const Icon    = isWork ? Briefcase : GraduationCap;
            const isLeft  = i % 2 === 0;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.13 }}
                className={`relative mb-8 md:grid md:grid-cols-2 md:gap-6 ${
                  isLeft ? "" : "md:[&>div:first-child]:col-start-2"
                }`}
              >
                {/* Card */}
                <div className={isLeft ? "" : "md:col-start-2"}>
                  <div
                    className={`bg-white rounded-2xl border p-5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 ${
                      isWork ? "border-[var(--border)] hover:border-green-200" : "border-[var(--border)] hover:border-stone-300"
                    }`}
                  >
                    {/* Top row */}
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className="flex items-center gap-2.5">
                        <div
                          className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                            isWork ? "bg-green-50 border border-green-200" : "bg-stone-50 border border-stone-200"
                          }`}
                        >
                          <Icon size={14} className={isWork ? "text-green-700" : "text-stone-500"} />
                        </div>
                        <div>
                          <h3 className="text-sm font-bold text-[var(--text)] leading-tight">{item.role}</h3>
                          <p className={`text-xs font-semibold ${isWork ? "text-green-700" : "text-stone-500"}`}>
                            {item.company}
                          </p>
                        </div>
                      </div>
                      <span
                        className={`text-[10px] px-2 py-0.5 rounded-full font-semibold shrink-0 border ${
                          isWork
                            ? "bg-green-50 text-green-700 border-green-200"
                            : "bg-stone-50 text-stone-500 border-stone-200"
                        }`}
                      >
                        {item.highlight}
                      </span>
                    </div>

                    {/* Meta */}
                    <div className="flex flex-wrap items-center gap-3 mb-3 text-xs text-[var(--text-faint)]">
                      <span className="flex items-center gap-1">
                        <Calendar size={10} /> {item.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={10} /> {item.location}
                      </span>
                    </div>

                    <p className="text-xs text-[var(--text-muted)] leading-relaxed mb-3">{item.desc}</p>

                    <div className="flex flex-wrap gap-1.5">
                      {item.tags.map(tag => (
                        <span key={tag} className="tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Center dot — desktop */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-5 z-10">
                  <div
                    className={`w-5 h-5 rounded-full border-2 bg-white flex items-center justify-center ${
                      isWork ? "border-green-500" : "border-stone-400"
                    }`}
                  >
                    <Icon size={9} className={isWork ? "text-green-600" : "text-stone-500"} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
