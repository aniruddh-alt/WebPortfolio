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
        I work on AI safety. I use mech interp to understand how AI models work
        and try to solve alignment.
      </p>
      <p className="mt-6">
        My first project in interpretability looked at how polysemantic
        neurons emerge and stabilize over training, and it became a
        co-first-authored paper at the NeurIPS 2025 Mechanistic
        Interpretability Workshop. In 2026 I was a machine learning engineering
        intern at Oumi, where I built open-source training and interpretability
        tools and worked on AURA-Eval, a framework for evaluating whether LLM
        agents act with awareness of risk. Right now I am working on refusal
        failures in models that are given tool schemas, since a lot of safety
        alignment does not carry over from plain prompts to prompts with tools,
        and that paper is a single-author submission under review at ICLR 2027.
        I also review for interpretability workshops, and the ICML 2026
        Mechanistic Interpretability Workshop named me an Outstanding Reviewer.
      </p>
      <p className="mt-5">
        I grew up in Abu Dhabi and I am finishing a B.S. in Computer Science
        with a minor in Mathematics at the University of Cincinnati (class of
        2027, GPA 3.997). Outside of research, I co-founded PhizzIO, a computer
        vision startup for physical therapy, and I was managing partner of
        Bearcat Ventures, the university’s $1M student-run venture fund.
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
