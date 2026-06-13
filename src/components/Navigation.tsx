'use client'

import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/navbar'
import { Link } from '@nextui-org/link'
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from '@nextui-org/dropdown'
import { Button } from '@nextui-org/button'
import { useTheme } from 'next-themes'
import Phymas from './icons/Phymas'
import { useEffect, useState } from 'react'

const Navigation = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <Navbar isBordered position="sticky" className="w-full">
      <NavbarBrand>
        <Link href="/" color="foreground" className="flex items-center gap-2">
          <Phymas width={24} height={24} />
          <p className="font-bold text-inherit">Phymas</p>
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#about">
            About me
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#projects">
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#contact">
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          {mounted && (
            <Dropdown>
              <DropdownTrigger>
                <Button variant="bordered" size="sm">
                  {theme === 'dark' ? 'Dark' : theme === 'light' ? 'Light' : 'System'}
                  <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em" className="ml-1">
                    <path d="m11.998 17 7-8h-14z" />
                  </svg>
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                aria-label="Theme selection"
                onAction={(key) => setTheme(key as string)}
              >
                <DropdownItem key="system">System</DropdownItem>
                <DropdownItem key="dark">Dark</DropdownItem>
                <DropdownItem key="light">Light</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          )}
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}

export default Navigation
