import About from '@/components/About'
import Contacts from '@/components/Contacts'
import Projects from '@/components/Projects'
import { Col, Text, Row } from '@nextui-org/react'

const Home = () => {
  return (
    <>
      <Row className='h-screen' css={{ marginBottom: '5vh', height: '85vh' }}>
        <Col
          id='about'
          css={{
            height: 'calc(100vh - 76px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <About />
        </Col>
      </Row>
      <Row>
        <Col id='projects'>
          <Text h1>Projects.</Text>
          <Projects />
        </Col>
      </Row>
      <Row>
        <Col id='contact'>
          <Text h1>Contact.</Text>
          <Contacts />
        </Col>
      </Row>
    </>
  )
}

export default Home
