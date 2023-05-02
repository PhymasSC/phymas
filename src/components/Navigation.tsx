import Phymas from './icons/Phymas'
import {
  useTheme,
  Dropdown,
  Text,
  Navbar,
  Link,
  Spacer,
} from '@nextui-org/react'
import { useTheme as useNextTheme } from 'next-themes'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faMoon,
  faSun,
  faLaptop,
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons'

interface MyComponentProps {
  theme: 'system' | 'dark' | 'light'
  setter: (theme: 'system' | 'dark' | 'light') => void
}
const Theme: React.FC<MyComponentProps> = ({ theme, setter }) => (
  <Dropdown isBordered>
    <Dropdown.Button
      auto
      light
      css={{
        px: 0,
        dflex: 'center',
        svg: { pe: 'none' },
      }}
      iconRight={<FontAwesomeIcon icon={faChevronDown} />}
      ripple={false}
    >
      {theme === 'system' ? (
        <>
          <FontAwesomeIcon icon={faLaptop} /> <Spacer x={0.4} />
          <Text>System</Text>
        </>
      ) : theme === 'dark' ? (
        <>
          <FontAwesomeIcon icon={faMoon} /> <Spacer x={0.4} />
          <Text>Dark</Text>
        </>
      ) : (
        <>
          <FontAwesomeIcon icon={faSun} /> <Spacer x={0.4} />
          <Text>Light</Text>
        </>
      )}
    </Dropdown.Button>
    <Dropdown.Menu
      //@ts-ignore
      onAction={setter}
      aria-label='Switch theme'
      css={{
        $$dropdownMenuWidth: '340px',
        $$dropdownItemHeight: '$xs',
        '& .nextui-dropdown-item': {
          py: '$4',
          // dropdown item left icon
          svg: {
            color: '$primary',
            mr: '$4',
          },
          // dropdown item title
          '& .nextui-dropdown-item-content': {
            w: '100%',
            fontWeight: '$semibold',
          },
        },
      }}
    >
      <Dropdown.Item key='system' icon={<FontAwesomeIcon icon={faLaptop} />}>
        System theme
      </Dropdown.Item>
      <Dropdown.Item key='light' icon={<FontAwesomeIcon icon={faSun} />}>
        Light theme
      </Dropdown.Item>
      <Dropdown.Item key='dark' icon={<FontAwesomeIcon icon={faMoon} />}>
        Dark theme
      </Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
)

const Navigation = () => {
  const { theme, setTheme } = useNextTheme()
  const { isDark } = useTheme()

  const collapseItems = ['About me', 'Projects', 'Contact']
  const currentTheme: 'system' | 'dark' | 'light' =
    theme === 'system' ? 'system' : isDark ? 'dark' : 'light'
  return (
    <>
      <Navbar isBordered variant='floating'>
        <Navbar.Brand>
          <Navbar.Toggle showIn='xs' />
          <Spacer></Spacer>
          <Link href='/' color='text'>
            <Phymas size={0.05} color={isDark ? '#FFF' : '#000'} />
            <Text
              b
              css={{
                paddingLeft: '10px',
              }}
              color='inherit'
            >
              Phymas
            </Text>
          </Link>
        </Navbar.Brand>

        <Navbar.Content activeColor='default' variant='highlight' hideIn='xs'>
          <Navbar.Link href='#about'>About me</Navbar.Link>
          <Navbar.Link href='#projects'>Projects</Navbar.Link>
          <Navbar.Link href='#contact'>Contact</Navbar.Link>
        </Navbar.Content>

        <Navbar.Content
          enableCursorHighlight
          activeColor='secondary'
          hideIn='xs'
          variant='underline'
        >
          <Theme theme={currentTheme} setter={setTheme} />
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
          <Navbar.CollapseItem>
            <Theme theme={currentTheme} setter={setTheme} />
          </Navbar.CollapseItem>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default Navigation
