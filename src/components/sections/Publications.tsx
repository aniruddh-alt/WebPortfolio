import Section, { DatedRow } from '@/components/Section'

// An asterisk marks equal contribution. Entries without href render unlinked.
export const publications: {
  title: string
  authors: string[]
  venue: string
  year: string
  href?: string
}[] = [
  {
    title: 'Diagnosing Refusal Failures Under Tool Schemas',
    authors: ['A Ramesh'],
    venue: 'Under review at ICLR 2027',
    year: '2026',
  },
  {
    title:
      'AI-based Text Summarization and Pilot Evaluation of Oncology Discharge Notes using MIMIC-IV-Ext-BHC',
    authors: ['A Ramesh', 'et al.'],
    venue: 'AMIA 2026 Annual Symposium (oral presentation)',
    year: '2026',
  },
  {
    title:
      'AURA-Eval: Evaluation Framework for Acting Under Risk Awareness in LLM Agent Trajectories',
    authors: [
      'R Shang', 'C-M Androna', 'O Menis Mastromichalakis', 'Y Feng', 'A Ramesh',
      'R Angell', 'SH Sim', 'C Zerva', 'E Koukoumidis',
    ],
    venue: 'arXiv:2609.06783',
    year: '2026',
    href: 'https://arxiv.org/abs/2609.06783',
  },
  {
    title:
      'From Tokens to Semantics: The Emergence and Stabilization of Polysemanticity in Language Models',
    authors: [
      'S Limaye*', 'A Ramesh*', 'A Zhou*', 'A Bhaskar', 'J Rohweder', 'A Panda', 'V Sharma',
    ],
    venue: 'Mechanistic Interpretability Workshop at NeurIPS 2025 (poster)',
    year: '2025',
    href: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=yscdiBoAAAAJ&citation_for_view=yscdiBoAAAAJ:u5HHmVD_uO8C',
  },
  {
    title:
      'Agile User-Centered Design of a Clinical Research Project Management System in a Pediatric Health Institute',
    authors: [
      'DTY Wu', 'M Suharwardy', 'A Ramesh', 'S Gupta', 'C Xin', 'T Zhang', 'C-T Tsai',
      'J Dawn', 'M Faust', 'A Kushner',
    ],
    venue: 'ACI Open 9(2), e30–e40',
    year: '2025',
    href: 'https://doi.org/10.1055/a-2625-1046',
  },
]

export default function Publications() {
  return (
    <Section id="publications" title="Publications">
      <ul className="space-y-8">
        {publications.map((pub) => (
          <DatedRow key={pub.title} date={pub.year}>
            <h3 className="font-medium leading-snug">
              {pub.href ? (
                <a
                  href={pub.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  {pub.title}
                </a>
              ) : (
                pub.title
              )}
            </h3>
            <p className="mt-1 text-[16px] text-muted">
              {pub.authors.map((author, i) => (
                <span key={author}>
                  {i > 0 && ', '}
                  {author.startsWith('A Ramesh') ? (
                    <span className="text-ink font-medium">{author}</span>
                  ) : (
                    author
                  )}
                </span>
              ))}
            </p>
            <p className="text-[16px] italic text-muted">{pub.venue}</p>
          </DatedRow>
        ))}
      </ul>
      <p className="mt-8 font-sans text-[14px] text-muted">
        * Equal contribution.
      </p>
    </Section>
  )
}
