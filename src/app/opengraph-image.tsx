import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

export const alt = 'Aniruddhan Ramesh, AI safety and interpretability research'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

// Same palette as the site's light theme (globals.css).
const PAPER = '#fdfdfc'
const INK = '#17181c'
const MUTED = '#5d6270'
const RULE = '#e4e6ea'

export default async function Image() {
  const fontDir = join(process.cwd(), 'public', 'fonts')
  const [regular, medium] = await Promise.all([
    readFile(join(fontDir, 'Newsreader-400.ttf')),
    readFile(join(fontDir, 'Newsreader-500.ttf')),
  ])

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '88px 96px',
          background: PAPER,
          color: INK,
          fontFamily: 'Newsreader',
        }}
      >
        <div style={{ display: 'flex', fontSize: 84, fontWeight: 500, letterSpacing: -1.5 }}>
          Aniruddhan Ramesh
        </div>
        <div style={{ display: 'flex', fontSize: 46, lineHeight: 1.4, maxWidth: 1000 }}>
          I work on AI safety, using mechanistic interpretability to study
          where safety alignment in language models breaks.
        </div>
        <div
          style={{
            display: 'flex',
            paddingTop: 28,
            borderTop: `1px solid ${RULE}`,
            fontSize: 30,
            color: MUTED,
          }}
        >
          Computer science, University of Cincinnati
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'Newsreader', data: regular, style: 'normal', weight: 400 },
        { name: 'Newsreader', data: medium, style: 'normal', weight: 500 },
      ],
    },
  )
}
