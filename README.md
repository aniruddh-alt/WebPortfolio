# Aniruddha Ramesh — Portfolio

Personal portfolio site. AI researcher focused on mechanistic interpretability, currently at Oumi.

## Stack

- **Next.js 14** with App Router
- **TypeScript**
- **Tailwind CSS** — custom dark design system
- **Framer Motion** — scroll-triggered animations
- **Canvas API** — animated neural network background

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
│   ├── globals.css         # Design tokens, utilities
│   ├── layout.tsx          # Root layout, fonts
│   └── page.tsx            # Main page
├── components/
│   ├── sections/
│   │   ├── Hero.tsx        # Intro + links
│   │   ├── Research.tsx    # Research interests
│   │   ├── Experience.tsx  # Work history
│   │   └── Projects.tsx    # Project showcase
│   ├── NetworkBackground.tsx  # Animated canvas background
│   ├── Navigation.tsx      # Fixed nav
│   └── Footer.tsx          # Contact + footer
└── lib/
    └── utils.ts            # Utility functions
```

## Deployment

```bash
npm run build
vercel --prod
```
