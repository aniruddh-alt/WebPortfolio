import Section, { DatedRow } from '@/components/Section'

export const awards = [
  { year: '2026', title: 'Outstanding Reviewer', org: 'Mechanistic Interpretability Workshop at ICML 2026' },
  { year: '2026', title: 'Mantei/Mae Scholarship for Academic Achievement and Excellence', org: 'University of Cincinnati' },
  { year: '2025', title: 'Best Undergraduate Student Award', org: 'Department of Computer Science, University of Cincinnati' },
  { year: '2025', title: 'Most Technically Impressive Project and Best Use of AWS', org: 'RevolutionUC' },
  { year: '2024', title: 'Excellence in Research Communication, podium presentation', org: 'University of Cincinnati' },
  { year: '2024', title: 'Mantei/Mae Scholarship for Academic Achievement and Excellence', org: 'University of Cincinnati' },
  { year: '2024', title: 'Second Place Overall', org: 'RevolutionUC' },
  { year: '2024', title: 'Winner', org: 'Launch It: Cincy' },
  { year: '2023', title: 'Excellence in Research Communication, poster presentation', org: 'University of Cincinnati' },
  { year: '2023', title: 'First Place Overall', org: 'MakeUC' },
  { year: '2023', title: 'First Runner-Up', org: 'UC Startup Weekend' },
  { year: '2023', title: 'First Place', org: 'IQE First Year Pitch Competition' },
  { year: '2022', title: 'University Honors Scholar, International Outreach Scholar, and UC Global Scholarship', org: 'University of Cincinnati' },
]

export default function Awards() {
  const years = Array.from(new Set(awards.map((a) => a.year)))

  return (
    <Section id="honors" title="Honors and awards">
      <ul className="space-y-6">
        {years.map((year) => (
          <DatedRow key={year} date={year}>
            <ul>
              {awards
                .filter((a) => a.year === year)
                .map((a, i) => (
                  <li key={i}>
                    {a.title}
                    <span className="text-muted">, {a.org}</span>
                  </li>
                ))}
            </ul>
          </DatedRow>
        ))}
      </ul>
    </Section>
  )
}
