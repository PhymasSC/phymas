import { Container, Col, Row, Text, Spacer, Link } from '@nextui-org/react'
import GitHub from './icons/Github'
import LinkedIn from './icons/LinkedIn'
import { useTheme } from '@nextui-org/react'
import { motion } from 'framer-motion'
const year = new Date().getFullYear()

const Footer = () => {
  const { isDark } = useTheme()
  return (
    <Container md>
      <Row align='center' justify='center'>
        <Text small>Find me on.</Text>
      </Row>
      <Row
        align='center'
        justify='center'
        css={{ marginTop: '1rem', marginBottom: '1rem' }}
      >
        <Link href='https://github.com/PhymasSC' target='_blank'>
          <GitHub width={30} height={30} color={isDark ? '#fff' : '#000'} />
        </Link>
        <Spacer x={1} />
        <Link
          href='https://www.linkedin.com/in/sheng-cher-lau-8a3730245/'
          target='_blank'
        >
          <LinkedIn width={30} height={30} color={isDark ? '#fff' : '#000'} />
        </Link>
      </Row>
      <Row justify='center'>
        <Text
          small
          css={{
            textAlign: 'center',
            marginBottom: '1rem',
          }}
        >
          Website built with{' '}
          <Link href='https://nextjs.org' target='_blank' isExternal>
            Next.js
          </Link>
          ,{' '}
          <Link href='https://nextui.org' target='_blank' isExternal>
            NextUI
          </Link>
          ,{' '}
          <Link
            href='https://www.framer.com/motion/'
            target='_blank'
            isExternal
          >
            Framer Motion
          </Link>{' '}
          and{' '}
          <Link
            href='https://www.typescriptlang.org'
            target='_blank'
            isExternal
          >
            TypeScript
          </Link>
          . Powered by{' '}
          <Link href='https://vercel.com' target='_blank' isExternal>
            Vercel
          </Link>
          . &copy; Lau Sheng Cher {year}
        </Text>
      </Row>
    </Container>
  )
}

export default Footer
