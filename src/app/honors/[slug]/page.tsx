import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getAllHonorsEntries, getHonorsEntry } from '@/lib/honors-data'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { honorsMdxComponents } from '@/components/honors-mdx-components'

type Props = { params: { slug: string } }

export default async function HonorsArticle({ params }: Props) {
  const entry = await getHonorsEntry(params.slug)
  if (!entry) {
    notFound()
  }

  const allEntries = await getAllHonorsEntries()
  const currentIndex = allEntries.findIndex((e) => e.slug === params.slug)
  const prev = currentIndex > 0 ? allEntries[currentIndex - 1] : null
  const next =
    currentIndex < allEntries.length - 1
      ? allEntries[currentIndex + 1]
      : null

  return (
    <main className="max-w-[42rem] mx-auto px-5">
      <Header />
      <article className="pt-12 sm:pt-16">
        <Link
          href="/honors"
          className="font-sans text-[15px] text-muted hover:text-ink transition-colors"
        >
          Honors portfolio
        </Link>
        <h1 className="mt-6 text-[34px] sm:text-[40px] font-medium tracking-tight leading-tight">
          {entry.title}
        </h1>
        <p className="mt-2 font-sans text-[15px] text-muted">
          {entry.subtitle ? `${entry.subtitle}, ${entry.date}` : entry.date}
        </p>
        <p className="mt-6 text-[20px] leading-[1.5] text-muted">
          {entry.summary}
        </p>

        <div className="mt-10 pt-10 border-t border-rule">
          <MDXRemote source={entry.body} components={honorsMdxComponents} />
        </div>

        {entry.videoUrl && (
          <figure className="mt-12">
            <div className="aspect-video relative overflow-hidden rounded border border-rule">
              <iframe
                src={entry.videoUrl.replace('watch?v=', 'embed/')}
                title="Video demonstration"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
            <figcaption className="mt-3 font-sans text-[14px] text-muted">
              Video demonstration of the prototype
            </figcaption>
          </figure>
        )}

        {entry.images && entry.images.length > 0 && (
          <div className="mt-14 space-y-10">
            {entry.images.map((img) => (
              <figure key={img.src}>
                <div className="relative aspect-[16/10] overflow-hidden rounded border border-rule">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 672px"
                  />
                </div>
                {img.caption && (
                  <figcaption className="mt-3 font-sans text-[14px] text-muted">
                    {img.caption}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        )}
      </article>

      <nav className="mt-20 pt-8 border-t border-rule grid grid-cols-1 sm:grid-cols-2 gap-6 font-sans text-[15px]">
        {prev ? (
          <Link href={`/honors/${prev.slug}`} className="group">
            <span className="text-muted">Previous</span>
            <span className="block font-serif text-[18px] group-hover:text-accent transition-colors">
              {prev.title}
            </span>
          </Link>
        ) : (
          <span />
        )}
        {next && (
          <Link href={`/honors/${next.slug}`} className="group sm:text-right">
            <span className="text-muted">Next</span>
            <span className="block font-serif text-[18px] group-hover:text-accent transition-colors">
              {next.title}
            </span>
          </Link>
        )}
      </nav>
      <Footer />
    </main>
  )
}
