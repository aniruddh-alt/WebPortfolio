# Aniruddha Ramesh — Portfolio

Personal portfolio site. AI researcher focused on mechanistic interpretability, currently at Oumi.

## Stack

- **Next.js 14** with App Router
- **TypeScript**
- **Tailwind CSS**: color tokens live as CSS variables in `globals.css`, with a dark palette under `prefers-color-scheme`
- **MDX** (`next-mdx-remote`) for the honors writeups in `content/honors/`

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

```
src/
├── app/
│   ├── globals.css           # Color tokens, link and details styles
│   ├── layout.tsx            # Root layout, fonts (Newsreader + Geist Sans)
│   ├── page.tsx              # Home page
│   └── honors/               # Honors portfolio index and MDX articles
├── components/
│   ├── sections/
│   │   ├── Hero.tsx          # Intro and contact links
│   │   ├── Experience.tsx
│   │   ├── Publications.tsx
│   │   ├── Projects.tsx      # Projects plus live GitHub PR list
│   │   ├── Service.tsx
│   │   └── Awards.tsx
│   ├── Header.tsx            # Name and nav, shared by every page
│   ├── Section.tsx           # Section heading and dated two-column row
│   ├── Footer.tsx            # Contact
│   └── honors-mdx-components.tsx
└── lib/
    └── honors-data.ts        # Loads content/honors/*.mdx
```

## Deployment

```bash
npm run build
vercel --prod
```
