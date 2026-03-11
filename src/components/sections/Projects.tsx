"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, GitMerge, GitPullRequest } from "lucide-react";

const GITHUB_USERNAME = "aniruddh-alt";
const MAX_PRS = 5;

interface PR {
  title: string;
  url: string;
  merged: boolean;
}

const projects = [
  {
    title: "PhizzIO",
    description:
      "CV-powered physical therapy app — watches you do exercises and tells you if your form is off. Took 2nd at RevolutionUC.",
    tags: ["JavaScript", "Computer Vision", "Healthcare"],
    href: "https://github.com/aniruddh-alt/PhizzIO_RevUC",
    color: "cyan",
  },
  {
    title: "Oumi Platform",
    description:
      "My open-source contributions to Oumi — inference engines, eval tooling, synthetic data, and more.",
    tags: ["Python", "PyTorch", "Open Source", "MLOps"],
    href: "https://github.com/oumi-ai/oumi",
    color: "violet",
  },
  {
    title: "ctrlFind",
    description:
      "Search your codebase with plain English. Built in Rust — embeds code into vectors and finds what you're looking for with cosine similarity.",
    tags: ["Rust", "Embeddings", "Search", "CLI"],
    href: "https://github.com/aniruddh-alt/ctrlFind",
    color: "amber",
  },
  {
    title: "GraphRag",
    description:
      "RAG but with a knowledge graph instead of flat chunks. Built for searching research papers where context and connections between ideas matter.",
    tags: ["Python", "RAG", "NLP", "Knowledge Graphs"],
    href: "https://github.com/aniruddh-alt/GraphRag",
    color: "rose",
  },
  {
    title: "Mridangam Transcription",
    description:
      "Listens to mridangam (South Indian drum) recordings and transcribes the stroke patterns. A niche problem I cared about solving.",
    tags: ["Python", "Audio ML", "Signal Processing"],
    href: "https://github.com/aniruddh-alt/MridangamTranscription",
    color: "emerald",
  },
  {
    title: "Clinical Notes",
    description:
      "Takes long, messy clinical notes and pulls out what actually matters for the patient and their doctor.",
    tags: ["Python", "NLP", "Healthcare", "Summarization"],
    href: "https://github.com/aniruddh-alt/ClinicalNotes",
    color: "sky",
  },
];

const colorMap: Record<string, string> = {
  cyan: "#06b6d4",
  violet: "#8b5cf6",
  amber: "#f59e0b",
  rose: "#f43f5e",
  emerald: "#10b981",
  sky: "#0ea5e9",
};

function repoKey(href: string): string | null {
  const m = href.match(/github\.com\/([^/]+\/[^/]+)/);
  return m ? m[1].toLowerCase() : null;
}

export default function Projects() {
  const [prsByRepo, setPrsByRepo] = useState<Record<string, PR[]>>({});

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(
          `https://api.github.com/search/issues?q=author:${GITHUB_USERNAME}+type:pr&sort=created&order=desc&per_page=100`,
          { headers: { Accept: "application/vnd.github.v3+json" } }
        );
        if (!res.ok) return;

        const { items } = await res.json();
        const all: Record<string, PR[]> = {};

        for (const item of items) {
          const merged = !!item.pull_request?.merged_at;
          if (item.state === "closed" && !merged) continue;

          const key = item.repository_url
            .replace("https://api.github.com/repos/", "")
            .toLowerCase();

          if (!all[key]) all[key] = [];
          all[key].push({
            title: item.title,
            url: item.html_url,
            merged,
          });
        }

        const grouped: Record<string, PR[]> = {};
        for (const [key, prs] of Object.entries(all)) {
          prs.sort((a, b) => (a.merged === b.merged ? 0 : a.merged ? -1 : 1));
          grouped[key] = prs.slice(0, MAX_PRS);
        }

        setPrsByRepo(grouped);
      } catch {
        /* graceful degradation — cards render without PRs */
      }
    })();
  }, []);

  return (
    <section id="projects" className="py-28 relative">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="font-mono text-[13px] text-zinc-500 mb-4 tracking-wider">
            Projects
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl leading-tight text-zinc-50">
            Things I&apos;ve shipped
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project, i) => {
            const key = repoKey(project.href);
            const prs = key ? prsByRepo[key] : undefined;

            return (
              <motion.a
                key={project.title}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group card p-7 flex flex-col relative overflow-hidden cursor-pointer"
              >
                <div
                  className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${colorMap[project.color]}, transparent)`,
                  }}
                />

                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-[15px] font-medium text-zinc-100 group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    size={15}
                    className="text-zinc-600 group-hover:text-zinc-300 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 flex-shrink-0 ml-3 mt-0.5"
                    strokeWidth={1.5}
                  />
                </div>

                <p className="text-[13px] text-zinc-500 leading-relaxed mb-5 flex-1">
                  {project.description}
                </p>

                {prs && prs.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    className="mb-5 flex flex-col gap-1.5"
                  >
                    {prs.map((pr) => (
                      <span
                        key={pr.url}
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          window.open(pr.url, "_blank", "noopener,noreferrer");
                        }}
                        className="flex items-center gap-2 text-[12px] font-mono text-zinc-600 hover:text-zinc-300 transition-colors cursor-pointer"
                      >
                        {pr.merged ? (
                          <GitMerge
                            size={12}
                            className="text-violet-500 flex-shrink-0"
                            strokeWidth={2}
                          />
                        ) : (
                          <GitPullRequest
                            size={12}
                            className="text-emerald-500 flex-shrink-0"
                            strokeWidth={2}
                          />
                        )}
                        <span className="truncate">{pr.title}</span>
                      </span>
                    ))}
                  </motion.div>
                )}

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag font-mono">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
