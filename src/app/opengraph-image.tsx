import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

export const alt = 'Aniruddhan Ramesh — ML engineer, Oumi'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  const fontDir = join(process.cwd(), 'public', 'fonts')
  const [serif, serifItalic] = await Promise.all([
    readFile(join(fontDir, 'InstrumentSerif-Regular.ttf')),
    readFile(join(fontDir, 'InstrumentSerif-Italic.ttf')),
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
          padding: '80px',
          background:
            'radial-gradient(ellipse at top left, #1a1a2e 0%, #09090b 60%)',
          color: '#fafafa',
          fontFamily: '"Instrument Serif", Georgia, serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            fontFamily: 'monospace',
            fontSize: 22,
            letterSpacing: 4,
            color: '#a1a1aa',
            textTransform: 'uppercase',
          }}
        >
          Abu Dhabi &rarr; Cincinnati &rarr; Seattle
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              fontSize: 160,
              lineHeight: 0.95,
              letterSpacing: -5,
            }}
          >
            <span>Aniruddhan</span>
            <span style={{ fontStyle: 'italic', color: '#e4e4e7' }}>
              Ramesh
            </span>
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 34,
              color: '#a1a1aa',
              maxWidth: 900,
              lineHeight: 1.4,
            }}
          >
            ML engineer at Oumi. Mechanistic interpretability, open-source
            tooling, and things in between.
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontFamily: 'monospace',
            fontSize: 20,
            color: '#71717a',
            letterSpacing: 2,
            textTransform: 'uppercase',
          }}
        >
          <span>aniruddhan.vercel.app</span>
          <span>&copy; {new Date().getFullYear()}</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'Instrument Serif',
          data: serif,
          style: 'normal',
          weight: 400,
        },
        {
          name: 'Instrument Serif',
          data: serifItalic,
          style: 'italic',
          weight: 400,
        },
      ],
    },
  )
}
