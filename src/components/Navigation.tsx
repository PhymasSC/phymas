import { PhymasLogo } from './PhymasLogo'
import { useTheme, Button, Text, Navbar, Link, Spacer } from '@nextui-org/react'
import { useTheme as useNextTheme } from 'next-themes'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
const Navigation = () => {
  const { setTheme } = useNextTheme()
  const { isDark, type } = useTheme()

  const collapseItems = ['About me', 'Projects', 'Contact']

  return (
    <>
      <Navbar isBordered variant='floating'>
        <Navbar.Brand>
          <Navbar.Toggle showIn='xs' />
          <Spacer></Spacer>
          <PhymasLogo size={30} color={isDark ? '#FFF' : '#000'} />
          <Text
            b
            css={{
              paddingLeft: '10px',
            }}
            color='inherit'
          >
            Phymas
          </Text>
        </Navbar.Brand>

        <Navbar.Content activeColor='default' variant='highlight' hideIn='xs'>
          <Navbar.Link href='#'>About me</Navbar.Link>
          <Navbar.Link href='#'>Projects</Navbar.Link>
          <Navbar.Link href='#'>Contact</Navbar.Link>
        </Navbar.Content>

        <Navbar.Content>
          <Button
            auto
            color='default'
            flat
            onClick={() => setTheme(type === 'dark' ? 'light' : 'dark')}
            icon={<FontAwesomeIcon size='lg' icon={isDark ? faSun : faMoon} />}
          >
            {isDark ? 'Light Theme' : 'Dark Theme'}
          </Button>
        </Navbar.Content>

        <Navbar.Collapse showIn='xs'>
          {collapseItems.map((item, index) => (
            <Navbar.CollapseItem key={item}>
              <Link
                color='inherit'
                css={{
                  minWidth: '100%',
                }}
                href='#'
              >
                {item}
              </Link>
            </Navbar.CollapseItem>
          ))}
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default Navigation
