import { NextResponse } from 'next/server'
import { SitemapStream, streamToPromise } from 'sitemap'

export async function GET(req: Request) {
  const smStream = new SitemapStream({
    hostname: 'https://phymas.com',
  })

  smStream.write({
    url: '/',
  })

  smStream.end()

  const sitemap = await streamToPromise(smStream).then((sm) => sm.toString())

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}
