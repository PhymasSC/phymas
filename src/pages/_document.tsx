// pages/_document.js
import React from 'react'

import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document'
import { CssBaseline } from '@nextui-org/react'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return {
      ...initialProps,
      styles: React.Children.toArray([initialProps.styles]),
    }
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
          {CssBaseline.flush()}
          <title>Phymas</title>
          <meta name='title' content='Phymas' />
          <meta
            name='description'
            content="Meet Lau Sheng Cher, an inquisitive computer science student and aspiring full-stack web developer seeking an internship opportunity. With a strong passion for programming and technology, Lau Sheng Cher brings fresh insights and a creative approach to problem-solving. Explore Lau Sheng Cher's impressive portfolio, showcasing innovative projects that demonstrate his potential as a valuable addition to your firm. Don't miss out on the opportunity to connect with this rising talent in the field of computer science. Browse Lau Sheng Cher's portfolio today and get in touch to start a conversation about how Lau Sheng Cher can contribute to your organization."
          />

          <meta property='og:type' content='website' />
          <meta property='og:url' content='https://phymas.vercel.app/' />
          <meta property='og:title' content='Phymas' />
          <meta
            property='og:description'
            content="Meet Lau Sheng Cher, an inquisitive computer science student and aspiring full-stack web developer seeking an internship opportunity. With a strong passion for programming and technology, Lau Sheng Cher brings fresh insights and a creative approach to problem-solving. Explore Lau Sheng Cher's impressive portfolio, showcasing innovative projects that demonstrate his potential as a valuable addition to your firm. Don't miss out on the opportunity to connect with this rising talent in the field of computer science. Browse Lau Sheng Cher's portfolio today and get in touch to start a conversation about how Lau Sheng Cher can contribute to your organization."
          />
          <meta property='og:image' content='/img/og_img.png' />

          <meta property='twitter:card' content='summary_large_image' />
          <meta property='twitter:url' content='https://phymas.vercel.app/' />
          <meta property='twitter:title' content='Phymas' />
          <meta
            property='twitter:description'
            content="Meet Lau Sheng Cher, an inquisitive comsputer science student and aspiring full-stack web developer seeking an internship opportunity. With a strong passion for programming and technology, Lau Sheng Cher brings fresh insights and a creative approach to problem-solving. Explore Lau Sheng Cher's impressive portfolio, showcasing innovative projects that demonstrate his potential as a valuable addition to your firm. Don't miss out on the opportunity to connect with this rising talent in the field of computer science. Browse Lau Sheng Cher's portfolio today and get in touch to start a conversation about how Lau Sheng Cher can contribute to your organization."
          />
          <meta property='twitter:image' content='/img/og_img.png' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
