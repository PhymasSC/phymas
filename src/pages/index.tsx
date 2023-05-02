import Header from '@/components/Header'
import Projects from '@/components/Projects'
import About from '@/components/About'
import { Col, Text, Grid } from '@nextui-org/react'
import Skills from '@/components/Skills'
import Head from 'next/head'
import { NextSeo } from 'next-seo'

const Home = () => {
  return (
    <>
      <NextSeo
        title='Phymas'
        description="Meet Lau Sheng Cher, a passionate computer science student seeking an internship. With impressive projects showcasing his potential as a full-stack web developer, connect with this rising talent in tech today. Browse Lau Sheng Cher's portfolio and discover how he can add value to your organization."
        openGraph={{
          url: 'https://phymas.vercel.app/',
          title: 'Phymas',
          description:
            "Meet Lau Sheng Cher, a passionate computer science student seeking an internship. With impressive projects showcasing his potential as a full-stack web developer, connect with this rising talent in tech today. Browse Lau Sheng Cher's portfolio and discover how he can add value to your organization.",
          images: [
            {
              url: 'https://www.phymas.me/api/og',
              width: 800,
              height: 600,
              alt: 'Phymas',
            },
          ],
          site_name: 'Phymas',
        }}
        robotsProps={{
          nosnippet: true,
          notranslate: true,
          noimageindex: true,
          noarchive: true,
        }}
        themeColor='#0072F5'
      />
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
