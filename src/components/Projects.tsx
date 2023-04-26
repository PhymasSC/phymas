import { Card, Grid, Link, Text } from '@nextui-org/react'
import ProjectCard from './ProjectCard'

const projects = [
  {
    title: 'Portfolio',
    images: [],
    description:
      'This is my portfolio website. It is built with Next.js and NextUI.',
    url: 'www.nextui.org',
    image: 'https://avatars.githubusercontent.com/u/86160567?s=200&v=4',
  },
  {
    title: 'UMT Fellow',
    description:
      'UMT Fellow is a platform for students to find and apply for fellowships.',
    url: 'www.umtfellow.com',
    image: 'https://avatars.githubusercontent.com/u/86160567?s=200&v=4',
  },
  {
    title: 'UMT Fellow',
    description:
      'UMT Fellow is a platform for students to find and apply for fellowships.',
    url: 'www.umtfellow.com',
    image: 'https://avatars.githubusercontent.com/u/86160567?s=200&v=4',
  },
]

const Projects = () => {
  return (
    <>
      <Grid.Container gap={3}>
        {projects.map((project, index) => (
          <Grid xs={12} md={4} key={index}>
            <ProjectCard
              title={project.title}
              description={project.description}
              url={project.url}
              image={project.image || ''}
            />
          </Grid>
        ))}
      </Grid.Container>
    </>
  )
}

export default Projects
