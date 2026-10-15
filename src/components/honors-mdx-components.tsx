import type { MDXRemoteProps } from 'next-mdx-remote/rsc'
import Image from 'next/image'
import type { ImgHTMLAttributes, AnchorHTMLAttributes } from 'react'

type Components = NonNullable<MDXRemoteProps['components']>

export const honorsMdxComponents: Components = {
  p: ({ children, ...props }) => (
    <p
      className="mb-6"
      {...props}
    >
      {children}
    </p>
  ),
  h2: ({ children, ...props }) => (
    <h2
      className="text-[24px] font-medium mt-12 mb-4"
      {...props}
    >
      {children}
    </h2>
  ),
  h3: ({ children, ...props }) => (
    <h3
      className="text-[21px] font-medium mt-10 mb-3"
      {...props}
    >
      {children}
    </h3>
  ),
  h4: ({ children, ...props }) => (
    <h4
      className="font-medium mt-8 mb-3"
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
        className="link text-accent"
        {...props}
      >
        {children}
      </a>
    )
  },
  blockquote: ({ children, ...props }) => (
    <blockquote
      className="border-l-2 border-rule pl-6 my-8 italic text-muted"
      {...props}
    >
      {children}
    </blockquote>
  ),
  ul: ({ children, ...props }) => (
    <ul
      className="list-disc list-outside pl-6 mb-6 space-y-2 marker:text-muted"
      {...props}
    >
      {children}
    </ul>
  ),
  ol: ({ children, ...props }) => (
    <ol
      className="list-decimal list-outside pl-6 mb-6 space-y-2 marker:text-muted"
      {...props}
    >
      {children}
    </ol>
  ),
  li: ({ children, ...props }) => <li {...props}>{children}</li>,
  hr: (props) => <hr className="my-10 border-rule" {...props} />,
  strong: ({ children, ...props }) => (
    <strong className="font-semibold" {...props}>
      {children}
    </strong>
  ),
  em: ({ children, ...props }) => (
    <em className="italic" {...props}>
      {children}
    </em>
  ),
  code: ({ children, ...props }) => (
    <code
      className="font-mono text-[0.85em] border border-rule rounded px-1 py-0.5"
      {...props}
    >
      {children}
    </code>
  ),
  pre: ({ children, ...props }) => (
    <pre
      className="font-mono text-[14px] border border-rule rounded p-4 overflow-x-auto my-6"
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
          <span className="block overflow-hidden rounded border border-rule">
            <span className="relative block aspect-[16/10]">
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
