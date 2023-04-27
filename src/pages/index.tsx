import Header from '@/components/Header'
import Projects from '@/components/Projects'
import About from '@/components/About'
import { Col, Text, Row } from '@nextui-org/react'
import AnimatedText from '@/components/AnimatedText'
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
          <Header />
        </Col>
      </Row>
      <Row>
        <About />
      </Row>
      <Row>
        <Col id='projects'>
          <Text h1>Projects.</Text>
          <Projects />
        </Col>
      </Row>
      <AnimatedText
        size='$2xl'
        weight='medium'
        animateScale={1.1}
        css={{
          textAlign: 'center',
          textJustify: 'inter-word',
          lineHeight: '1.5',
        }}
      >
        I'm a 23 year old student from Malaysia. I'm currently studying computer
        science at the University of Malaysia Terengganu in Terengganu,
        Malaysia. I'm interested in web development and software development.
      </AnimatedText>
    </>
  )
}

export default Home
