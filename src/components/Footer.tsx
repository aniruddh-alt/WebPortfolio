export default function Footer() {
  return (
    <footer id="contact" className="mt-24 mb-16 pt-8 border-t border-rule">
      <p>
        If you work on AI safety, interpretability, or the evaluation of LLM
        agents, I would be glad to hear from you at{' '}
        <a href="mailto:rameshad@mail.uc.edu" className="link text-accent">
          rameshad@mail.uc.edu
        </a>
        .
      </p>
      <p className="mt-6 font-sans text-[14px] text-muted">
        © {new Date().getFullYear()} Aniruddhan Ramesh
      </p>
    </footer>
  )
}
