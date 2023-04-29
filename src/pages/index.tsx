import Header from '@/components/Header'
import Projects from '@/components/Projects'
import About from '@/components/About'
import { Col, Text, Grid } from '@nextui-org/react'
import Skills from '@/components/Skills'
import Head from 'next/head'

const Home = () => {
  return (
    <>
      <Head>
        <title>Phymas</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta property='og:image' content='https://www.phymas.me/api/og' />
      </Head>
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
