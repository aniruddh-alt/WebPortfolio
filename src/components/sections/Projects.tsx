"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
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
    title: "linear_probes",
    description:
      "A mech interp toolkit I keep reaching for. Pulls activations from any transformer layer with flexible selector syntax, runs linear probes with proper train/val/test hygiene, sweeps layers. Every probe experiment I run starts here.",
    tags: ["Python", "PyTorch", "Mech Interp", "Research"],
    href: "https://github.com/aniruddh-alt/linear_probes",
    color: "cyan",
  },
  {
    title: "Oumi Platform",
    description:
      "My open-source work on Oumi: training configs, inference engines, eval tooling, synthetic data pipelines, and the MCP server I'm building on top of it all.",
    tags: ["Python", "PyTorch", "Open Source", "MLOps"],
    href: "https://github.com/oumi-ai/oumi",
    color: "violet",
  },
  {
    title: "PhizzIO",
    description:
      "CV-powered physical therapy app. Watches you do the exercises, flags when your form slips. Won Launch It: Cincy ($28K+) and placed 2nd at RevolutionUC.",
    tags: ["JavaScript", "Computer Vision", "Healthcare"],
    href: "https://github.com/aniruddh-alt/PhizzIO_RevUC",
    color: "rose",
  },
  {
    title: "Mridangam Transcription",
    description:
      "A CNN with attention that transcribes stroke patterns from mridangam recordings. The mridangam is the South Indian drum I grew up around; I wanted a solver for a dataset that barely exists.",
    tags: ["Python", "Audio ML", "CNN + Attention"],
    href: "https://github.com/aniruddh-alt/MridangamTranscription",
    color: "emerald",
  },
  {
    title: "ctrlFind",
    description:
      "Codebase search in plain English. Written in Rust. Embeds the code, runs cosine similarity, hands you back the thing you half-remember writing.",
    tags: ["Rust", "Embeddings", "Search", "CLI"],
    href: "https://github.com/aniruddh-alt/ctrlFind",
    color: "amber",
  },
  {
    title: "BuildGPT",
    description:
      "A small GPT written from the ground up. Not novel work; a forcing function to make sure I could explain every line before trusting anything larger.",
    tags: ["Python", "PyTorch", "From Scratch"],
    href: "https://github.com/aniruddh-alt/BuildGPT",
    color: "sky",
  },
  {
    title: "GraphRag",
    description:
      "RAG with a knowledge graph underneath instead of flat chunks. Built it after losing one too many research ideas that lived in the connection between papers, not any one sentence.",
    tags: ["Python", "RAG", "NLP", "Knowledge Graphs"],
    href: "https://github.com/aniruddh-alt/GraphRag",
    color: "violet",
  },
  {
    title: "MNIST from Scratch",
    description:
      "Three implementations side by side: stock PyTorch, hand-coded from the math with no frameworks, and a custom reimplementation of the PyTorch API. 96% accuracy across all three. Built to understand backprop at the level of the math, not the library.",
    tags: ["Python", "PyTorch", "Fundamentals"],
    href: "https://github.com/aniruddh-alt/MNIST-NeuralNetwork_From_Scratch",
    color: "amber",
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
  const prefersReducedMotion = useReducedMotion();
  const [prsByRepo, setPrsByRepo] = useState<Record<string, PR[]>>({});

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(
          `https://api.github.com/search/issues?q=author:${GITHUB_USERNAME}+type:pr+base:main&sort=created&order=desc&per_page=100`,
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
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="section-index mb-4">
            05 <em>—</em> Projects
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl leading-tight text-zinc-50">
            Selected side projects
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
                initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
                whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
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
                    className="text-zinc-500 group-hover:text-zinc-200 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 flex-shrink-0 ml-3 mt-0.5"
                    strokeWidth={1.5}
                  />
                </div>

                <p className="text-[13px] text-zinc-400 leading-relaxed mb-5 flex-1">
                  {project.description}
                </p>

                {prs && prs.length > 0 && (
                  <motion.div
                    initial={prefersReducedMotion ? false : { opacity: 0 }}
                    animate={prefersReducedMotion ? undefined : { opacity: 1 }}
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
                        className="flex items-center gap-2 text-[12px] font-mono text-zinc-500 hover:text-zinc-200 transition-colors cursor-pointer"
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
