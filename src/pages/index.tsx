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
      <Grid.Container xs={12}>
        <Grid xs={12}>
          <Header />
        </Grid>
        <Grid xs={12}>
          <About />
        </Grid>
        <Grid xs={12}>
          <Skills />
        </Grid>
        <Grid xs={12}>
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
