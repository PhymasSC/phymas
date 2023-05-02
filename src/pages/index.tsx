import Header from '@/components/Header'
import Projects from '@/components/Projects'
import About from '@/components/About'
import { Grid } from '@nextui-org/react'
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
          <Projects />
        </Grid>
      </Grid.Container>
    </>
  )
}

export default Home
