export default function Section({
  id,
  title,
  children,
}: {
  id: string
  title: string
  children: React.ReactNode
}) {
  return (
    <section id={id} className="mt-20 sm:mt-24 scroll-mt-8">
      <h2 className="text-[24px] font-medium tracking-tight pb-3 mb-8 border-b border-rule">
        {title}
      </h2>
      {children}
    </section>
  )
}

/** Left column date, right column content; stacks on narrow screens. */
export function DatedRow({
  date,
  children,
}: {
  date: string
  children: React.ReactNode
}) {
  return (
    <li className="grid grid-cols-1 sm:grid-cols-[9.5rem_1fr] gap-x-6 gap-y-1">
      <span className="font-sans text-[14px] text-muted tabular-nums whitespace-nowrap pt-[0.3em]">
        {date}
      </span>
      <div>{children}</div>
    </li>
  )
}
