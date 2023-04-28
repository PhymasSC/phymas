import { Grid } from '@nextui-org/react'
import ProjectCard from './ProjectCard'

const projects = [
  {
    title: 'Portfolio',
    description:
      'This is my portfolio website. It is built with Next.js and NextUI.',
    urlSourceCode: 'https://github.com/PhymasSC/phymas',
    urlDeployedVersion: 'https://www.phymas.me/',
    image: '/favicon-32x32.png',
    technologies: ['Next.js', 'NextUI', 'Framer Motion', 'TypeScript'],
    timeline: 'April 2022 - Current',
  },
  {
    title: 'UMT Fellow',
    description:
      'UMT Fellow is a platform for students to find and apply for fellowships.',
    urlDeployedVersion: 'https://www.umtfellow.social',
    urlSourceCode: 'https://github.com/PhymasSC/umt-fellow-web',
    image: '/favicon-32x32.png',
    technologies: [
      'Next.js',
      'Mantine UI',
      'Ably',
      'Prisma',
      'GraphQL',
      'Apollo',
      'TypeScript',
    ],
    timeline: 'November 2022 - Current',
  },
  {
    title: 'Online Badminton Court Booking System',
    description: 'This is an online banking system built with Java Swing.',
    urlSourceCode: 'https://github.com/PhymasSC/BadmintonPal_JSP_centric',
    image: 'emoji-🏸',
    technologies: [
      'Java EE',
      'JSP',
      'Servlet',
      'MySQL',
      'JavaScript',
      'Daisy UI',
    ],
    timeline: 'May 2022 - June 2022',
  },
  {
    title: 'REVEUX',
    description:
      'REVEUX is a luxury ecommerce platform for luxury beauty products. ',
    urlSourceCode: 'https://github.com/PhymasSC/reveux',
    image: '/img/Reveux_icon.png',
    technologies: [
      'NodeJs',
      'Express js',
      'Stripe',
      'JavaScript',
      'Tailwind CSS',
    ],
    timeline: 'December 2021 - January 2022',
  },
  {
    title: 'Online Banking System',
    description: 'This is an online banking system built with Java Swing.',
    urlSourceCode: 'https://github.com/PhymasSC/umt-fellow-web',
    image: '/favicon-32x32.png',
    technologies: ['Java SE', 'Java Swing', 'Google Mail API', 'Figma'],
    timeline: 'May 2021 - July 2021',
  },
  {
    title: "Shoot 'Em Up",
    description: "Shoot 'Em Up is a 2D game built with Pygame.",
    urlSourceCode: 'https://github.com/PhymasSC/ShootEmUp',
    image: '/img/Shoot_em_up_logo.png',
    technologies: ['Python', 'Pygame'],
    timeline: 'December 2020 - January 2021',
  },
]

const Projects = () => {
  return (
    <>
      <Grid.Container gap={3} justify='center'>
        {projects.map((project, index) => (
          <Grid xs={12} key={index}>
            <ProjectCard
              title={project.title}
              description={project.description}
              urlSourceCode={project.urlSourceCode}
              urlDeployedVersion={project.urlDeployedVersion}
              image={project.image || ''}
              technologies={project.technologies}
              timeline={project.timeline}
            />
          </Grid>
        ))}
      </Grid.Container>
    </>
  )
}

export default Projects
