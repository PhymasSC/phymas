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
            content="
        Meet Lau Sheng Cher, a passionate computer science student seeking an internship. With impressive projects showcasing his potential as a full-stack web developer, connect with this rising talent in tech today. Browse Lau Sheng Cher's portfolio and discover how he can add value to your organization."
          />
          <meta property='og:image' content='https://www.phymas.me/api/og' />

          <meta property='twitter:card' content='summary_large_image' />
          <meta property='twitter:url' content='https://phymas.vercel.app/' />
          <meta property='twitter:title' content='Phymas' />
          <meta
            property='twitter:description'
            content="
            Meet Lau Sheng Cher, a passionate computer science student seeking an internship. With impressive projects showcasing his potential as a full-stack web developer, connect with this rising talent in tech today. Browse Lau Sheng Cher's portfolio and discover how he can add value to your organization."
          />
          <meta property='twitter:image' content='/img/og_img.png' />

          <link
            rel='apple-touch-icon'
            sizes='180x180'
            href='/apple-touch-icon.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href='/favicon-32x32.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='16x16'
            href='/favicon-16x16.png'
          />
          <link rel='manifest' href='/site.webmanifest' />
          <meta name='msapplication-TileColor' content='#0072F5' />
          <meta name='theme-color' content='#0072F5'></meta>
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
