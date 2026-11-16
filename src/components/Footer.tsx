export default function Footer() {
  return (
    <footer id="contact" className="mt-24 mb-16 pt-8 border-t border-rule">
      <p>
        If you work on AI safety, interpretability, or evaluating LLM agents, I
        would really like to hear from you, so feel free to email me at{' '}
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
