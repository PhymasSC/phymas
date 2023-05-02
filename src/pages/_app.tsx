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
import { DefaultSeo } from 'next-seo'

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
        <DefaultSeo
          title='Phymas'
          description="Meet Lau Sheng Cher, a passionate computer science student seeking an internship. With impressive projects showcasing his potential as a full-stack web developer, connect with this rising talent in tech today. Browse Lau Sheng Cher's portfolio and discover how he can add value to your organization."
          openGraph={{
            url: 'https://phymas.vercel.app/',
            title: 'Phymas',
            description:
              "Meet Lau Sheng Cher, a passionate computer science student seeking an internship. With impressive projects showcasing his potential as a full-stack web developer, connect with this rising talent in tech today. Browse Lau Sheng Cher's portfolio and discover how he can add value to your organization.",
            images: [
              {
                url: 'https://www.phymas.me/api/og',
                width: 800,
                height: 600,
                alt: 'Phymas',
              },
            ],
            site_name: 'Phymas',
          }}
          robotsProps={{
            nosnippet: true,
            notranslate: true,
            noimageindex: true,
            noarchive: true,
          }}
          themeColor='#0072F5'
        />
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
