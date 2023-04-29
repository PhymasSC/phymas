import Navbar from '@components/Navigation'
import {
  createTheme,
  NextUIProvider,
  Spacer,
  Container,
} from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { useSSR } from '@nextui-org/react'
import Footer from '@/components/Footer'
import './../styles/globals.css'
import Head from 'next/head'

interface MyAppProps {
  Component: React.ComponentType
  pageProps: any
}

const lightTheme = createTheme({
  type: 'light',
  theme: {
    colors: {
      selection: 'hsl(200, 90%, 80%)',
    },
  },
})

const darkTheme = createTheme({
  type: 'dark',
  theme: {
    colors: {
      // brand colors
      background: '#111',
      backgroundAlpha: 'rgba(17, 17, 17, 0.8)',
      selection: 'hsl(200, 90%, 80%)',
    },
  },
})

const App = ({ Component, pageProps }: MyAppProps) => {
  const { isBrowser } = useSSR()

  return (
    isBrowser && (
      <>
        <Head>
          <meta
            name='viewport'
            content='initial-scale=1.0, width=device-width'
          />
          <meta property='og:image' content='https://www.phymas.me/api/og' />

          <meta name='title' content='Phymas' />
          <meta
            name='description'
            content="
        Meet Lau Sheng Cher, a passionate computer science student seeking an internship. With impressive projects showcasing his potential as a full-stack web developer, connect with this rising talent in tech today. Browse Lau Sheng Cher's portfolio and discover how he can add value to your organization."
          />

          <meta property='og:type' content='website' />
          <meta property='og:url' content='https://phymas.vercel.app/' />
          <meta property='og:title' content='Phymas' />
          <meta
            property='og:description'
            content="Meet Lau Sheng Cher, an inquisitive computer science student and aspiring full-stack web developer seeking an internship opportunity. With a strong passion for programming and technology, Lau Sheng Cher brings fresh insights and a creative approach to problem-solving. Explore Lau Sheng Cher's impressive portfolio, showcasing innovative projects that demonstrate his potential as a valuable addition to your firm. Don't miss out on the opportunity to connect with this rising talent in the field of computer science. Browse Lau Sheng Cher's portfolio today and get in touch to start a conversation about how Lau Sheng Cher can contribute to your organization."
          />
          <meta property='og:image' content='https://www.phymas.me/api/og' />

          <meta property='twitter:card' content='summary_large_image' />
          <meta property='twitter:url' content='https://phymas.vercel.app/' />
          <meta property='twitter:title' content='Phymas' />
          <meta
            property='twitter:description'
            content="Meet Lau Sheng Cher, an inquisitive comsputer science student and aspiring full-stack web developer seeking an internship opportunity. With a strong passion for programming and technology, Lau Sheng Cher brings fresh insights and a creative approach to problem-solving. Explore Lau Sheng Cher's impressive portfolio, showcasing innovative projects that demonstrate his potential as a valuable addition to your firm. Don't miss out on the opportunity to connect with this rising talent in the field of computer science. Browse Lau Sheng Cher's portfolio today and get in touch to start a conversation about how Lau Sheng Cher can contribute to your organization."
          />
          <meta property='twitter:image' content='/img/og_img.png' />
        </Head>
        <NextUIProvider>
          <NextThemesProvider
            defaultTheme='system'
            attribute='class'
            value={{
              light: lightTheme.className,
              dark: darkTheme.className,
            }}
          >
            <Container>
              <Navbar />
              <Spacer />
              <Component {...pageProps} />
              <Footer />
            </Container>
          </NextThemesProvider>
        </NextUIProvider>
      </>
    )
  )
}

export default App
