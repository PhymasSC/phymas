import { Container, Col, Row, Text, Spacer } from '@nextui-org/react'
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
        <a href='https://github.com/PhymasSC' target='_blank'>
          <GitHub width={30} height={30} color={isDark ? '#fff' : '#000'} />
        </a>
        <Spacer x={1} />
        <a
          href='https://www.linkedin.com/in/sheng-cher-lau-8a3730245/'
          target='_blank'
        >
          <LinkedIn width={30} height={30} color={isDark ? '#fff' : '#000'} />
        </a>
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
          <a href='https://nextjs.org' target='_blank'>
            Next.js
          </a>
          ,{' '}
          <a href='https://nextui.org' target='_blank'>
            NextUI
          </a>
          ,{' '}
          <a href='https://www.framer.com/motion/' target='_blank'>
            Framer Motion
          </a>{' '}
          and{' '}
          <a href='https://www.typescriptlang.org' target='_blank'>
            TypeScript
          </a>
          . Powered by{' '}
          <a href='https://vercel.com' target='_blank'>
            Vercel
          </a>
          . &copy; Lau Sheng Cher {year}
        </Text>
      </Row>
    </Container>
  )
}

export default Footer
