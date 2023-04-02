import Navbar from '@components/Navigation'
import { createTheme, NextUIProvider, globalCss } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

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
    fontFamily: 'Inter, sans-serif',
  },
})

const App = ({ Component, pageProps }: MyAppProps) => {
  globalStyles()
  return (
    <NextThemesProvider
      defaultTheme='system'
      attribute='class'
      value={{
        light: lightTheme.className,
        dark: darkTheme.className,
      }}
    >
      <NextUIProvider>
        <Navbar />
        <Component {...pageProps} />
      </NextUIProvider>
    </NextThemesProvider>
  )
}

export default App
