import About from '@/components/About'
import Contacts from '@/components/Contacts'
import Projects from '@/components/Projects'
import { Button, Container, Col, Text, Row } from '@nextui-org/react'

const year = new Date().getFullYear()

export default function Home() {
  return (
    <>
      <Container md>
        <Row>
          <Col>
            <Text h1>About me.</Text>
            <About />
          </Col>
        </Row>
        <Row>
          <Col>
            <Text h1>Projects.</Text>
            <Projects />
          </Col>
        </Row>
        <Row>
          <Col>
            <Text h1>Contact.</Text>
            <Contacts />
          </Col>
        </Row>
      </Container>
    </>
  )
}
