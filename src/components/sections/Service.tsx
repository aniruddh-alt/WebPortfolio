import Section, { DatedRow } from '@/components/Section'

export const roles = [
  {
    period: '2026',
    title: 'Reviewer, Neural Network Artifacts as a New Data Modality Workshop at NeurIPS 2026',
    description: 'I reviewed three submissions.',
  },
  {
    period: '2026',
    title: 'Reviewer, Interpretability for Discovery Workshop at NeurIPS 2026',
    description: 'I reviewed three submissions.',
  },
  {
    period: 'May – Jun 2026',
    title: 'Reviewer, Mechanistic Interpretability Workshop at ICML 2026',
    description:
      'I reviewed six submissions on probing methodology, causal circuits, geometric attribution, Fourier structure in grokking, out-of-distribution detection, and activation steering. The organizers named me an Outstanding Reviewer.',
  },
  {
    period: 'Apr 2026 – present',
    title: 'President, IEEE-HKN Tau Chapter, University of Cincinnati',
    description:
      'I direct the chapter’s operations, outreach, events, and technical workshops.',
  },
  {
    period: 'Aug 2024 – present',
    title: 'Strategic Advisor, Bearcat Ventures',
    description:
      'I joined the University of Cincinnati’s student-run $1M evergreen venture fund as an analyst, became a general partner, and then served as managing partner until April 2026, managing its strategy and operations. I now advise the fund. I also co-led the 2026 Venture Capital Investment Competition team and developed its training curriculum and term-sheet evaluation process.',
  },
]

export default function Service() {
  return (
    <Section id="service" title="Service and leadership">
      <ul className="space-y-8">
        {roles.map((role) => (
          <DatedRow key={role.title} date={role.period}>
            <h3 className="font-medium">{role.title}</h3>
            <p className="mt-1">{role.description}</p>
          </DatedRow>
        ))}
      </ul>
    </Section>
  )
}
