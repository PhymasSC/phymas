import Header from '@/components/Header'
import Projects from '@/components/Projects'
import About from '@/components/About'
import { Col, Text, Row, Container } from '@nextui-org/react'
import Skills from '@/components/Skills'

const Home = () => {
  return (
    <>
      <Container md>
        <Row>
          <Col
            css={{
              height: 'calc(100vh - 74px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Header />
          </Col>
        </Row>
        <Row>
          <About />
        </Row>
        <Row>
          <Skills />
        </Row>
        <Row>
          <Col id='projects'>
            <Text h1>Projects.</Text>
            <Projects />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Home
