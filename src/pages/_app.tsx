import Navbar from '@components/Navigation'
import {
  createTheme,
  NextUIProvider,
  globalCss,
  Spacer,
} from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { useSSR } from '@nextui-org/react'
import Footer from '@/components/Footer'

interface MyAppProps {
  Component: React.ComponentType
  pageProps: any
}

const lightTheme = createTheme({
  type: 'light',
})

const darkTheme = createTheme({
  type: 'dark',
})

const globalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
    transition: 'background 0.25s ease-in-out',
  },
  body: {
    margin: 0,
    padding: 0,
  },
})

const App = ({ Component, pageProps }: MyAppProps) => {
  globalStyles()
  const { isBrowser } = useSSR()

  return (
    isBrowser && (
      <>
        <NextUIProvider>
          <NextThemesProvider
            defaultTheme='system'
            attribute='class'
            value={{
              light: lightTheme.className,
              dark: darkTheme.className,
            }}
          >
            <Navbar />
            <Spacer />
            <Component {...pageProps} />
            <Footer />
          </NextThemesProvider>
        </NextUIProvider>
      </>
    )
  )
}

export default App
