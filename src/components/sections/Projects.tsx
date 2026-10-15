"use client";

import { useEffect, useState } from "react";
import Section from "@/components/Section";
import { projects } from "@/lib/projects";

const GITHUB_USERNAME = "aniruddh-alt";
const INITIAL_PROJECTS = 4;

interface PR {
  title: string;
  url: string;
  merged: boolean;
}

type Project = (typeof projects)[number];

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

        for (const prs of Object.values(all)) {
          prs.sort((a, b) => (a.merged === b.merged ? 0 : a.merged ? -1 : 1));
        }

        setPrsByRepo(all);
      } catch {
        /* graceful degradation — projects render without PRs */
      }
    })();
  }, []);

  const renderProject = (project: Project) => {
    const key = repoKey(project.href);
    const prs = key ? prsByRepo[key] : undefined;
    const merged = prs?.filter((pr) => pr.merged).length ?? 0;

    return (
      <li key={project.title}>
        <h3 className="font-medium">
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            {project.title}
          </a>
        </h3>
        <p className="mt-1">{project.description}</p>
        <p className="mt-1 font-sans text-[14px] text-muted">
          {project.tags.join(", ")}
        </p>
        {prs && prs.length > 0 && (
          <details className="mt-2 font-sans text-[14px] text-muted">
            <summary className="hover:text-ink transition-colors">
              {prs.length} pull request{prs.length === 1 ? "" : "s"} ({merged} merged)
            </summary>
            <ul className="mt-2 ml-4 max-h-48 overflow-y-auto space-y-1">
              {prs.map((pr) => (
                <li key={pr.url}>
                  <a
                    href={pr.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link"
                  >
                    {pr.title}
                  </a>
                  {!pr.merged && " (open)"}
                </li>
              ))}
            </ul>
          </details>
        )}
      </li>
    );
  };

  return (
    <Section id="projects" title="Projects">
      {/* Indent to the content column that DatedRow uses (9.5rem date + 1.5rem gap). */}
      <div className="sm:pl-[11rem]">
      <ul className="space-y-8">
        {projects.slice(0, INITIAL_PROJECTS).map(renderProject)}
      </ul>
      <details className="mt-8">
        <summary className="font-sans text-[15px] text-muted hover:text-ink transition-colors">
          {projects.length - INITIAL_PROJECTS} more projects
        </summary>
        <ul className="mt-8 space-y-8">
          {projects.slice(INITIAL_PROJECTS).map(renderProject)}
        </ul>
      </details>
      </div>
    </Section>
  );
}
