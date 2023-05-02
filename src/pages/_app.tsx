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
import Meta from '@/components/Meta'
import { Analytics } from '@vercel/analytics/react'

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
    <>
      <Meta />
      {isBrowser && (
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
      )}
      <Analytics />
    </>
  )
}

export default App
