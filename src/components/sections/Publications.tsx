"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, FileText } from "lucide-react";

const publications = [
  {
    title:
      "From Tokens to Semantics: The Emergence and Stabilization of Polysemanticity in Language Models",
    authors:
      "S Limaye, A Ramesh, A Zhou, A Bhaskar, J Rohweder, A Panda, et al.",
    venue: "NeurIPS 2025, Mechanistic Interpretability Workshop",
    year: 2025,
    href: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=yscdiBoAAAAJ&citation_for_view=yscdiBoAAAAJ:u5HHmVD_uO8C",
    highlight: true,
  },
  {
    title:
      "Agile User-Centered Design of a Clinical Research Project Management System in a Pediatric Health Institute",
    authors:
      "DTY Wu, M Suharwardy, A Ramesh, S Gupta, C Xin, T Zhang, CT Tsai, et al.",
    venue: "ACI Open 9(02), e1–e11",
    year: 2025,
    href: "https://www.thieme-connect.com/products/ejournals/abstract/10.1055/a-2625-1046",
  },
];

export default function Publications() {
  return (
    <section id="publications" className="py-28 relative">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="font-mono text-[13px] text-zinc-500 mb-4 tracking-wider">
            Publications
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl leading-tight text-zinc-50">
            Research I&apos;ve been part of
          </h2>
        </motion.div>

        <div>
          {publications.map((pub, i) => (
            <motion.div
              key={pub.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group"
            >
              <div className="divider" />
              <a
                href={pub.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block py-8 sm:py-10 grid grid-cols-1 sm:grid-cols-[60px_1fr] gap-2 sm:gap-8"
              >
                <div className="flex sm:flex-col items-center sm:items-start gap-2 sm:gap-2">
                  <FileText
                    size={18}
                    className={`${pub.highlight ? "text-amber-400" : "text-zinc-600"} flex-shrink-0 mt-0.5`}
                    strokeWidth={1.5}
                  />
                  <span className="font-mono text-[12px] text-zinc-600 tracking-wider">
                    {pub.year}
                  </span>
                </div>

                <div>
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="text-[15px] font-medium text-zinc-100 group-hover:text-white transition-colors leading-snug">
                      {pub.title}
                    </h3>
                    <ArrowUpRight
                      size={15}
                      className="text-zinc-600 group-hover:text-zinc-300 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 flex-shrink-0 mt-0.5"
                      strokeWidth={1.5}
                    />
                  </div>
                  <p className="text-[13px] text-zinc-500 leading-relaxed mb-2">
                    {pub.authors}
                  </p>
                  <p className="text-[13px] font-mono text-zinc-600 tracking-wide">
                    {pub.venue}
                  </p>
                </div>
              </a>
            </motion.div>
          ))}
          <div className="divider" />
        </div>
      </div>
    </section>
  );
}
