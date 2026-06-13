import { ImageResponse } from '@vercel/og'

export const runtime = 'edge'

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const title = searchParams.has('title')
      ? searchParams.get('title')?.slice(0, 100)
      : 'Phymas - Lau Sheng Cher'

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#000000',
            backgroundImage:
              'radial-gradient(circle at 25px 25px, #333 2%, transparent 0%), radial-gradient(circle at 75px 75px, #333 2%, transparent 0%)',
            backgroundSize: '100px 100px',
          }}
        >
          <div
            style={{
              display: 'flex',
              fontSize: 100,
              fontFamily: 'Inter',
              color: 'white',
              marginTop: 30,
              padding: '0 120px',
              lineHeight: 1.4,
              fontWeight: 700,
              textAlign: 'center',
            }}
          >
            {title}
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    )
  } catch (e: any) {
    console.log(`${e.message}`)
    return new Response('Failed to generate the image', {
      status: 500,
    })
  }
}
