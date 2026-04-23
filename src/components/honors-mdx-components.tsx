import type { MDXRemoteProps } from 'next-mdx-remote/rsc'
import Image from 'next/image'
import type { ImgHTMLAttributes, AnchorHTMLAttributes } from 'react'

type Components = NonNullable<MDXRemoteProps['components']>

export const honorsMdxComponents: Components = {
  p: ({ children, ...props }) => (
    <p
      className="text-zinc-400 leading-[1.8] text-[15px] mb-6"
      {...props}
    >
      {children}
    </p>
  ),
  h2: ({ children, ...props }) => (
    <h2
      className="font-serif text-2xl text-zinc-50 mt-12 mb-4"
      {...props}
    >
      {children}
    </h2>
  ),
  h3: ({ children, ...props }) => (
    <h3
      className="font-serif text-xl text-zinc-100 mt-10 mb-3"
      {...props}
    >
      {children}
    </h3>
  ),
  h4: ({ children, ...props }) => (
    <h4
      className="font-serif text-lg text-zinc-100 mt-8 mb-3"
      {...props}
    >
      {children}
    </h4>
  ),
  a: ({ children, href, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) => {
    const isExternal = href?.startsWith('http')
    return (
      <a
        href={href}
        {...(isExternal
          ? { target: '_blank', rel: 'noopener noreferrer' }
          : {})}
        className="text-zinc-100 underline decoration-zinc-700 underline-offset-4 hover:decoration-zinc-400 transition-colors"
        {...props}
      >
        {children}
      </a>
    )
  },
  blockquote: ({ children, ...props }) => (
    <blockquote
      className="border-l-2 border-accent-cyan/50 pl-6 my-8 font-serif italic text-zinc-300 text-[17px] leading-relaxed"
      {...props}
    >
      {children}
    </blockquote>
  ),
  ul: ({ children, ...props }) => (
    <ul
      className="list-disc list-outside pl-6 mb-6 space-y-2 text-zinc-400 leading-[1.8] text-[15px] marker:text-zinc-600"
      {...props}
    >
      {children}
    </ul>
  ),
  ol: ({ children, ...props }) => (
    <ol
      className="list-decimal list-outside pl-6 mb-6 space-y-2 text-zinc-400 leading-[1.8] text-[15px] marker:text-zinc-600"
      {...props}
    >
      {children}
    </ol>
  ),
  li: ({ children, ...props }) => <li {...props}>{children}</li>,
  hr: (props) => <hr className="my-10 border-zinc-800" {...props} />,
  strong: ({ children, ...props }) => (
    <strong className="text-zinc-200 font-semibold" {...props}>
      {children}
    </strong>
  ),
  em: ({ children, ...props }) => (
    <em className="italic text-zinc-300" {...props}>
      {children}
    </em>
  ),
  code: ({ children, ...props }) => (
    <code
      className="font-mono text-[13px] bg-zinc-900 border border-zinc-800 rounded px-1.5 py-0.5 text-zinc-200"
      {...props}
    >
      {children}
    </code>
  ),
  pre: ({ children, ...props }) => (
    <pre
      className="font-mono text-[13px] bg-zinc-950 border border-zinc-800 rounded-lg p-4 overflow-x-auto my-6 text-zinc-200"
      {...props}
    >
      {children}
    </pre>
  ),
  img: ({ src, alt, width, height, ...rest }: ImgHTMLAttributes<HTMLImageElement>) => {
    if (typeof src !== 'string') return null
    // Use next/image for local images (starts with "/"). For remote images, fall
    // back to a plain <img> so we don't need next.config remotePatterns config.
    if (src.startsWith('/')) {
      return (
        <span className="block my-8">
          <span className="card block overflow-hidden">
            <span className="relative block aspect-[16/10] bg-surface-2">
              <Image
                src={src}
                alt={alt ?? ''}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </span>
          </span>
        </span>
      )
    }
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt={alt ?? ''}
        className="rounded-lg my-8 w-full"
        {...rest}
      />
    )
  },
}
