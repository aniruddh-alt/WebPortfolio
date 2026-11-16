import Section, { DatedRow } from '@/components/Section'

export const experiences = [
  {
    role: 'Machine Learning Engineer Intern',
    org: 'Oumi',
    period: 'Jan – Aug 2026',
    location: 'Seattle, WA',
    description:
      'I built interpretability tools for diagnosing training failures and studying fine-tuning dynamics, like linear probes, difference-of-means vectors, and activation and subspace patching. On the AURA-Eval benchmark, I set up the evaluations of open-source models, ran robustness checks like tests for judge bias, and helped define its risk taxonomies. I also designed the multi-turn conversation synthesis and the executable tool environments we used to train tool-using agents.',
  },
  {
    role: 'AI Research Intern',
    org: 'Algoverse',
    period: 'Jun 2025 – Apr 2026',
    description:
      'I studied how neurons in language models shift from token-level to semantic representations, both across depth and over training checkpoints, using neuron embeddings, clustering, n-gram statistics, and Jensen-Shannon divergence. The work became a co-first-authored paper at the NeurIPS 2025 Mechanistic Interpretability Workshop.',
  },
  {
    role: 'Bioinformatics Software Engineer',
    org: 'iCDCU Lab, UC College of Medicine',
    period: 'Jan 2023 – present',
    location: 'Cincinnati, OH',
    description:
      'I built a clinical research management system for a pediatric heart institute, and in two rounds of usability evaluation it scored 88.65 and 87.1 on the System Usability Scale, which we reported in ACI Open. I have also fine-tuned Llama 3.1-8B, Qwen2.5-7B, and Phi-3-mini for patient-friendly clinical summarization.',
  },
  {
    role: 'Machine Learning Intern',
    org: 'Kinetic Vision',
    period: 'May – Aug 2025',
    location: 'Cincinnati, OH',
    description:
      'I developed volumetric autoencoder and DETR models for detecting the centerlines of surgical tools, and I generated synthetic 3D training data that cut manual annotation by 75%.',
  },
  {
    role: 'Software Engineering Intern',
    org: 'Phillips Edison & Company',
    period: 'Jan – Dec 2024',
    location: 'Cincinnati, OH',
    description:
      'I led a three-person offshore team that built machine learning pipelines to extract structured data from real estate documents, and the pipelines cut extraction time by 80%.',
  },
]

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ul className="space-y-10">
        {experiences.map((exp) => (
          <DatedRow key={exp.org + exp.role} date={exp.period}>
            <h3 className="font-medium">{exp.org}</h3>
            <p className="font-sans text-[15px] text-muted">
              {exp.role}
              {exp.location && `, ${exp.location}`}
            </p>
            <p className="mt-2">{exp.description}</p>
          </DatedRow>
        ))}
      </ul>
    </Section>
  )
}
