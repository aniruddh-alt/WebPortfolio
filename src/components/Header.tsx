import Link from 'next/link'

const navItems = [
  { label: 'Experience', href: '/#experience' },
  { label: 'Publications', href: '/#publications' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Essays', href: '/honors' },
]

export default function Header({ home = false }: { home?: boolean }) {
  const name = (
    <Link href="/" className="hover:text-accent transition-colors">
      Aniruddhan Ramesh
    </Link>
  )
  return (
    <header className="pt-10 sm:pt-16 flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2">
      {home ? (
        <h1 className="text-[26px] font-medium tracking-tight">{name}</h1>
      ) : (
        <p className="text-[22px] font-medium tracking-tight">{name}</p>
      )}
      <nav className="font-sans text-[15px] text-muted flex flex-wrap gap-x-4 gap-y-1">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="hover:text-ink transition-colors"
          >
            {item.label}
          </Link>
        ))}
        <a
          href="/cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:underline underline-offset-4"
        >
          CV
        </a>
      </nav>
    </header>
  )
}
