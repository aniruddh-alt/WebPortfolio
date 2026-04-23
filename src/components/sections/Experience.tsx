"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Cpu, Brain, Microscope, TrendingUp, Wrench, Building2 } from "lucide-react";

const experiences = [
  {
    icon: Cpu,
    tint: "#8b5cf6",
    role: "Machine Learning Engineer Intern",
    org: "Oumi",
    period: "Jan 2026 · Present",
    location: "Seattle, WA",
    description:
      "Data synthesis and interpretability tooling on Oumi's open-source stack. Currently building an MCP server that exposes Oumi's ~500 training configs to AI coding assistants; I've been calling the direction VibeML: natural-language ML orchestration.",
    tags: ["Python", "PyTorch", "LLMs", "Interpretability"],
  },
  {
    icon: Brain,
    tint: "#06b6d4",
    role: "AI Research Intern",
    org: "Algoverse",
    period: "Jun 2025 · Feb 2026",
    description:
      "Looked at how polysemanticity shows up and stabilizes across training in language models. The paper got into the NeurIPS 2025 Mech Interp Workshop.",
    tags: ["Mech Interp", "SAEs", "Research", "NeurIPS"],
  },
  {
    icon: Microscope,
    tint: "#f43f5e",
    role: "Biomedical Informatics Software Engineer",
    org: "UC College of Medicine",
    period: "Jan 2023 · Present",
    location: "Cincinnati, OH",
    description:
      "Clinical software with the iCDCU lab. Designed a research project management system for a pediatric heart institute; two papers came out of it.",
    tags: ["Python", "Flask", "SQL", "Healthcare"],
  },
  {
    icon: TrendingUp,
    tint: "#f59e0b",
    role: "Managing Partner → Alumni",
    org: "Bearcat Ventures",
    period: "Aug 2024 · Apr 2026",
    location: "Cincinnati, OH",
    description:
      "Joined as an Analyst, moved to Director of Deal Flow, and eventually led the fund as Managing Partner. Ran UC's $1M student-led fund: sourced deals, led diligence, managed a team of analysts. Placed 2nd at the VCIC Midwest Regional at Carnegie Mellon. Transitioned to Alumni in April 2026.",
    tags: ["Venture Capital", "Due Diligence", "Fund Management"],
  },
  {
    icon: Wrench,
    tint: "#10b981",
    role: "Machine Learning Intern",
    org: "Kinetic Vision",
    period: "May · Aug 2025",
    location: "Cincinnati, OH",
    description:
      "Trained vision models to catch structural defects in surgical staples, plus the data pipelines that fed them.",
    tags: ["Python", "PyTorch", "Computer Vision"],
  },
  {
    icon: Building2,
    tint: "#0ea5e9",
    role: "Software Engineer Intern",
    org: "Phillips Edison & Company",
    period: "Jan · Dec 2024",
    location: "Cincinnati, OH",
    description:
      "Two co-op rotations. Built a multimodal ETL pipeline that pulls structured fields out of the real estate documents nobody wants to parse by hand (leases, site plans, abstracts).",
    tags: ["Python", "Azure", "SQL", "AI", "ETL"],
  },
];

export default function Experience() {
  const prefersReducedMotion = useReducedMotion();
  return (
    <section id="experience" className="py-28 relative">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="section-index mb-4">
            02 <em>—</em> Experience
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl leading-tight text-zinc-50">
            Work and research
          </h2>
        </motion.div>

        <div>
          {experiences.map((exp, i) => {
            const Icon = exp.icon;
            return (
              <motion.div
                key={exp.org + exp.role}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
                whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group"
              >
                <div className="divider" />
                <div className="py-8 sm:py-10 grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2 sm:gap-10">
                  {/* Left */}
                  <div className="flex sm:flex-col gap-3 sm:gap-2">
                    <Icon
                      size={15}
                      className="transition-opacity mt-0.5 flex-shrink-0 group-hover:opacity-100"
                      strokeWidth={1.5}
                      style={{ color: exp.tint, opacity: 0.75 }}
                    />
                    <span className="font-mono text-[12px] text-zinc-500 tracking-wider whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>

                  {/* Right */}
                  <div>
                    <div className="flex flex-wrap items-baseline gap-x-3 mb-3">
                      <h3 className="text-[15px] font-medium text-zinc-100 group-hover:text-white transition-colors">
                        {exp.role}
                      </h3>
                      <span className="text-[13px] text-zinc-400">{exp.org}</span>
                    </div>
                    <p className="text-[13px] text-zinc-400 leading-relaxed mb-4 max-w-2xl">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      {exp.tags.map((tag, idx) => (
                        <span
                          key={tag}
                          className="flex items-center gap-x-3 text-[11px] font-mono text-zinc-500 tracking-[0.12em] uppercase"
                        >
                          {idx > 0 && <span className="text-zinc-700">·</span>}
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
          <div className="divider" />
        </div>
      </div>
    </section>
  );
}
