const links = [
  { label: 'rameshad@mail.uc.edu', href: 'mailto:rameshad@mail.uc.edu' },
  { label: 'Google Scholar', href: 'https://scholar.google.com/citations?user=yscdiBoAAAAJ' },
  { label: 'GitHub', href: 'https://github.com/aniruddh-alt' },
  { label: 'Hugging Face', href: 'https://huggingface.co/aniruddhr04' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/aniruddhanramesh' },
  { label: 'X', href: 'https://x.com/aniruddhr04' },
]

export default function Hero() {
  return (
    <section className="pt-12 sm:pt-16">
      <p className="text-[21px] sm:text-[23px] leading-[1.5] tracking-[-0.005em]">
        I work on AI safety. I use mechanistic interpretability to study how
        safety alignment is represented inside language models and where it
        breaks.
      </p>
      <p className="mt-6">
        My current paper, a single-author submission under review at ICLR 2027,
        diagnoses refusal failures in models given tool schemas. My first project in the field examined how polysemantic neurons emerge
        and stabilize during training, and became a co-first-authored paper at
        the NeurIPS 2025 Mechanistic Interpretability Workshop. As a machine
        learning engineering intern at Oumi in 2026, I built open-source
        training and interpretability tools. I also contributed to AURA-Eval, a
        framework for evaluating whether LLM agents act with awareness of risk.
        I set up the evaluations of open-source models, ran robustness checks
        such as tests for judge bias, and helped define the paper’s
        taxonomies. I was named an Outstanding Reviewer at the ICML 2026
        Mechanistic Interpretability Workshop.
      </p>
      <p className="mt-5">
        I grew up in Abu Dhabi and am completing a B.S. in Computer Science,
        with a minor in Mathematics, at the University of Cincinnati (GPA
        3.997, class of 2027). Outside research, I co-founded PhizzIO, a
        computer-vision startup for physical therapy, and was managing partner
        of Bearcat Ventures, the university’s $1M student-run venture fund.
      </p>
      <ul className="mt-8 font-sans text-[15px] text-accent flex flex-wrap gap-x-6 gap-y-2">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              {...(link.href.startsWith('http')
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
              className="link"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
