import { Container, Col, Row, Text, Spacer } from '@nextui-org/react'
import GitHub from './icons/Github'
import LinkedIn from './icons/LinkedIn'
import { useTheme } from '@nextui-org/react'

const year = new Date().getFullYear()

const Footer = () => {
  const { isDark } = useTheme()
  return (
    <Container md>
      <Row>
        <Text small>Find me on.</Text>
        <Spacer />
        <Col>
          <GitHub width={50} height={50} color={isDark ? '#fff' : '#000'} />
          <LinkedIn width={50} height={50} color={isDark ? '#fff' : '#000'} />
        </Col>
      </Row>
      <Row justify='center'>
        <Text small>&copy; Lau Sheng Cher {year}</Text>
      </Row>
    </Container>
  )
}

export default Footer
