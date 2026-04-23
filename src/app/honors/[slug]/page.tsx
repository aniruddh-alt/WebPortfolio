import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { MDXRemote } from 'next-mdx-remote/rsc'
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  BookOpen,
} from 'lucide-react'
import { getAllHonorsEntries, getHonorsEntry } from '@/lib/honors-data'
import Navigation from '@/components/Navigation'
import NetworkBackground from '@/components/NetworkBackground'
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

  const isReview = entry.category === 'year-in-review'

  return (
    <main className="relative">
      <NetworkBackground />
      <div className="relative z-10">
        <Navigation />

        {/* Article header */}
        <article className="pt-32 pb-8">
          <div className="max-w-3xl mx-auto px-6">
            <div>
              <Link
                href="/honors"
                className="inline-flex items-center gap-2 text-zinc-500 hover:text-zinc-300 transition-colors text-sm mb-10 group"
              >
                <ArrowLeft
                  size={14}
                  className="group-hover:-translate-x-0.5 transition-transform"
                />
                Honors Portfolio
              </Link>

              <div className="flex items-center gap-4 mb-6">
                <span
                  className={`inline-flex items-center gap-1.5 text-[11px] font-mono tracking-wider uppercase px-2.5 py-1 rounded-full border ${
                    isReview
                      ? 'border-accent-cyan/30 text-accent-cyan/80 bg-accent-cyan/5'
                      : 'border-accent-violet/30 text-accent-violet/80 bg-accent-violet/5'
                  }`}
                >
                  {isReview ? (
                    <Calendar size={10} />
                  ) : (
                    <BookOpen size={10} />
                  )}
                  {isReview ? 'Year-in-Review' : 'Experience'}
                </span>
                <span className="text-[12px] font-mono text-zinc-600">
                  {entry.date}
                </span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-[1.15] text-zinc-50 mb-3">
                {entry.title}
              </h1>
              {entry.subtitle && (
                <p className="text-lg text-zinc-500 font-serif italic mb-6">
                  {entry.subtitle}
                </p>
              )}

              <p className="text-zinc-400 leading-relaxed text-[15px] mb-8">
                {entry.summary}
              </p>

              <div className="flex flex-wrap gap-2 mb-10">
                {entry.tags.map((tag) => (
                  <span key={tag} className="tag font-mono">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </article>

        <div className="divider max-w-3xl mx-auto" />

        {/* Article body */}
        <section className="py-12">
          <div className="max-w-3xl mx-auto px-6">
            <div className="honors-mdx">
              <MDXRemote
                source={entry.body}
                components={honorsMdxComponents}
              />
            </div>

            {/* Video embed */}
            {entry.videoUrl && (
              <div className="mt-12">
                <div className="card overflow-hidden">
                  <div className="aspect-video relative">
                    <iframe
                      src={entry.videoUrl.replace('watch?v=', 'embed/')}
                      title="Video demonstration"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                    />
                  </div>
                </div>
                <p className="text-[12px] text-zinc-600 mt-3 text-center font-mono">
                  Video demonstration of the prototype
                </p>
              </div>
            )}

            {/* Images */}
            {entry.images && entry.images.length > 0 && (
              <div className="mt-14 space-y-8">
                <div className="divider" />
                {entry.images.map((img) => (
                  <figure key={img.src} className="group">
                    <div className="card overflow-hidden">
                      <div className="relative aspect-[16/10] bg-surface-2">
                        <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          className="object-contain"
                          sizes="(max-width: 768px) 100vw, 768px"
                        />
                      </div>
                    </div>
                    {img.caption && (
                      <figcaption className="text-[12px] text-zinc-600 mt-3 text-center font-mono">
                        {img.caption}
                      </figcaption>
                    )}
                  </figure>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Prev / Next navigation */}
        <div className="divider max-w-3xl mx-auto" />
        <nav className="py-12">
          <div className="max-w-3xl mx-auto px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {prev ? (
                <Link href={`/honors/${prev.slug}`} className="group">
                  <div className="card p-5 h-full relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative z-10">
                      <div className="flex items-center gap-2 text-zinc-600 text-[12px] font-mono mb-2">
                        <ArrowLeft size={12} />
                        Previous
                      </div>
                      <p className="text-zinc-300 text-sm group-hover:text-zinc-100 transition-colors">
                        {prev.title}
                      </p>
                    </div>
                  </div>
                </Link>
              ) : (
                <div />
              )}
              {next ? (
                <Link href={`/honors/${next.slug}`} className="group">
                  <div className="card p-5 h-full relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent-violet/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative z-10 text-right">
                      <div className="flex items-center justify-end gap-2 text-zinc-600 text-[12px] font-mono mb-2">
                        Next
                        <ArrowRight size={12} />
                      </div>
                      <p className="text-zinc-300 text-sm group-hover:text-zinc-100 transition-colors">
                        {next.title}
                      </p>
                    </div>
                  </div>
                </Link>
              ) : (
                <div />
              )}
            </div>
          </div>
        </nav>

        {/* Footer */}
        <div className="divider max-w-3xl mx-auto" />
        <footer className="py-12">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <p className="text-[13px] text-zinc-600">
              Aniruddhan Ramesh &middot; University of Cincinnati Honors Program
            </p>
          </div>
        </footer>
      </div>
    </main>
  )
}
