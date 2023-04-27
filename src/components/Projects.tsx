import { Grid } from '@nextui-org/react'
import ProjectCard from './ProjectCard'

const projects = [
  {
    title: 'Portfolio',
    images: [],
    description:
      'This is my portfolio website. It is built with Next.js and NextUI.',
    urlSourceCode: 'www.nextui.org',
    urlDeployedVersion:
      'https://avatars.githubusercontent.com/u/86160567?s=200&v=4',
    image: 'https://avatars.githubusercontent.com/u/86160567?s=200&v=4',
  },
  {
    title: 'UMT Fellow',
    description:
      'UMT Fellow is a platform for students to find and apply for fellowships.',
    urlDeployedVersion: 'https://www.umtfellow.social',
    urlSourceCode: 'https://github.com/PhymasSC/umt-fellow-web',
    image: 'https://avatars.githubusercontent.com/u/86160567?s=200&v=4',
  },
  {
    title: 'REVEUX',
    description:
      'REVEUX is a luxury ecommerce platform for luxury beauty products. ',
    urlDeployedVersion: 'www.umtfellow.com',
    urlSourceCode: 'https://github.com/PhymasSC/umt-fellow-web',
    image: 'https://avatars.githubusercontent.com/u/86160567?s=200&v=4',
  },
  {
    title: 'UMT Fellow',
    description:
      'UMT Fellow is a platform for students to find and apply for fellowships.',
    urlDeployedVersion: 'www.umtfellow.com',
    urlSourceCode: 'https://github.com/PhymasSC/umt-fellow-web',
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
              urlSourceCode={project.urlSourceCode}
              urlDeployedVersion={project.urlDeployedVersion}
              image={project.image || ''}
            />
          </Grid>
        ))}
      </Grid.Container>
    </>
  )
}

export default Projects
