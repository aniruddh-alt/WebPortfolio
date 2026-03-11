"use client";

import { motion } from "framer-motion";
import { Cpu, Brain, Microscope, TrendingUp, Wrench, Building2 } from "lucide-react";

const experiences = [
  {
    icon: Cpu,
    role: "Machine Learning Engineer Intern",
    org: "Oumi",
    period: "Jan 2026 · Present",
    location: "Seattle, WA",
    description:
      "Building data synthesis and interpretability tools on Oumi's open-source foundation model stack. Currently putting together an MCP server integration from scratch.",
    tags: ["Python", "PyTorch", "LLMs", "Interpretability"],
  },
  {
    icon: Brain,
    role: "AI Research Intern",
    org: "Algoverse",
    period: "Jun 2025 · Feb 2026",
    description:
      "Studied how polysemanticity emerges and stabilizes in language models. The work got accepted into the NeurIPS 2025 Mechanistic Interpretability Workshop.",
    tags: ["Mech Interp", "SAEs", "Research", "NeurIPS"],
  },
  {
    icon: Microscope,
    role: "Biomedical Informatics Software Engineer",
    org: "UC College of Medicine",
    period: "Jan 2023 · Present",
    location: "Cincinnati, OH",
    description:
      "Working with the iCDCU lab building clinical software. Designed a research project management system for a pediatric heart institute. Two publications came out of this.",
    tags: ["Python", "Flask", "SQL", "Healthcare"],
  },
  {
    icon: TrendingUp,
    role: "Managing Partner",
    org: "Bearcat Ventures",
    period: "Aug 2024 · Present",
    location: "Cincinnati, OH",
    description:
      "Running UC's $1M student venture fund. Sourcing deals, leading diligence, managing a team of analysts. Took 2nd at the VCIC Midwest Regional at Carnegie Mellon.",
    tags: ["Venture Capital", "Due Diligence", "Fund Management"],
  },
  {
    icon: Wrench,
    role: "Machine Learning Intern",
    org: "Kinetic Vision",
    period: "May · Aug 2025",
    location: "Cincinnati, OH",
    description:
      "Built ML models to analyze surgical staple structural integrity, plus the data pipelines feeding them.",
    tags: ["Python", "PyTorch", "Computer Vision"],
  },
  {
    icon: Building2,
    role: "Software Engineer Intern",
    org: "Phillips Edison & Company",
    period: "Jan · Dec 2024",
    location: "Cincinnati, OH",
    description:
      "Two co-op rotations. Built an ETL pipeline using multimodal AI to pull structured data out of messy real estate documents like leases and site plans.",
    tags: ["Python", "Azure", "SQL", "AI", "ETL"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-28 relative">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="font-mono text-[13px] text-zinc-500 mb-4 tracking-wider">
            Experience
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl leading-tight text-zinc-50">
            Where I&apos;ve been building
          </h2>
        </motion.div>

        <div>
          {experiences.map((exp, i) => {
            const Icon = exp.icon;
            return (
              <motion.div
                key={exp.org + exp.role}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
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
                      className="text-zinc-600 group-hover:text-zinc-400 transition-colors mt-0.5 flex-shrink-0"
                      strokeWidth={1.5}
                    />
                    <span className="font-mono text-[12px] text-zinc-600 tracking-wider whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>

                  {/* Right */}
                  <div>
                    <div className="flex flex-wrap items-baseline gap-x-3 mb-3">
                      <h3 className="text-[15px] font-medium text-zinc-100 group-hover:text-white transition-colors">
                        {exp.role}
                      </h3>
                      <span className="text-[13px] text-zinc-500">{exp.org}</span>
                    </div>
                    <p className="text-[13px] text-zinc-500 leading-relaxed mb-4 max-w-2xl">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span key={tag} className="tag font-mono">
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
