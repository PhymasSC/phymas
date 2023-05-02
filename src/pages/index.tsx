import Header from '@/components/Header'
import Projects from '@/components/Projects'
import About from '@/components/About'
import { Col, Text, Grid } from '@nextui-org/react'
import Skills from '@/components/Skills'
import Meta from '@/components/Meta'

const Home = () => {
  return (
    <>
      <Meta />
      <Grid.Container md>
        <Grid>
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
        </Grid>
        <Grid>
          <About />
        </Grid>
        <Grid>
          <Skills />
        </Grid>
        <Grid>
          <Col id='projects'>
            <Text h1>Projects.</Text>
            <Projects />
          </Col>
        </Grid>
      </Grid.Container>
    </>
  )
}

export default Home
