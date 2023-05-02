import { useTheme, Grid, Text } from '@nextui-org/react'
import Phymas from './icons/Phymas'
import ProjectCard from './ProjectCard'

const Projects = () => {
  const { isDark } = useTheme()

  const projects = [
    {
      title: 'Portfolio',
      description:
        'This is my portfolio website. It is built with Next.js and NextUI.',
      urlSourceCode: 'https://github.com/PhymasSC/phymas',
      urlDeployedVersion: 'https://www.phymas.me/',
      image: <Phymas size={0.1} color={isDark ? '#FFF' : '#000'} />,
      technologies: [
        { name: 'Next.js', site: 'https://nextjs.org/' },
        { name: 'NextUI', site: 'https://nextui.org/' },
        { name: 'Framer Motion', site: 'https://www.framer.com/motion/' },
        { name: 'TypeScript', site: 'https://www.typescriptlang.org/' },
      ],
      timeline: 'April 2022 - Current',
    },
    {
      title: 'UMT Fellow',
      description:
        'UMT Fellow is a platform for students to find and apply for fellowships.',
      urlDeployedVersion: 'https://www.umtfellow.social',
      urlSourceCode: 'https://github.com/PhymasSC/umt-fellow-web',
      image: '/img/umt_fellow_logo.png',
      technologies: [
        { name: 'Next.js', site: 'https://nextjs.org/' },
        { name: 'Manitne UI', site: 'https://mantine.dev/' },
        { name: 'Ably', site: 'https://ably.com/' },
        { name: 'Prisma', site: 'https://www.prisma.io/' },
        { name: 'GraphQL', site: 'https://graphql.org/' },
        { name: 'Apollo', site: 'https://www.apollographql.com/' },
        { name: 'TypeScript', site: 'https://www.typescriptlang.org/' },
      ],
      timeline: 'November 2022 - Current',
    },
    {
      title: 'Online Badminton Court Booking System',
      description: 'This is an online banking system built with Java Swing.',
      urlSourceCode: 'https://github.com/PhymasSC/BadmintonPal_JSP_centric',
      image: 'emoji-🏸',
      technologies: [
        {
          name: 'Java EE',
          site: 'https://www.oracle.com/java/technologies/java-ee-glance.html',
        },
        {
          name: 'JSP',
          site: 'https://www.oracle.com/java/technologies/jspt.html',
        },
        {
          name: 'Servlet',
          site: 'https://www.oracle.com/java/technologies/servlets.html',
        },
        { name: 'MySQL', site: 'https://www.mysql.com/' },
        { name: 'JavaScript', site: 'https://www.javascript.com/' },
        { name: 'Daisy UI', site: 'https://daisyui.com/' },
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
        { name: 'Node.js', site: 'https://nodejs.org/en/' },
        { name: 'Express.js', site: 'https://expressjs.com/' },
        { name: 'MongoDB', site: 'https://www.mongodb.com/' },
        { name: 'Stripe', site: 'https://stripe.com/' },
        { name: 'JavaScript', site: 'https://www.javascript.com/' },
        { name: 'Tailwind CSS', site: 'https://tailwindcss.com/' },
      ],
      timeline: 'December 2021 - January 2022',
    },
    {
      title: 'Online Banking System',
      description: 'This is an online banking system built with Java Swing.',
      image: '/img/obs_logo.png',
      technologies: [
        {
          name: 'Java SE',
          site: 'https://www.oracle.com/java/technologies/javase-downloads.html',
        },
        {
          name: 'Java Swing',
          site: 'https://docs.oracle.com/javase/tutorial/uiswing/',
        },
        {
          name: 'Google Mail API',
          site: 'https://developers.google.com/gmail/api',
        },
        { name: 'Figma', site: 'https://www.figma.com/' },
      ],
      timeline: 'May 2021 - July 2021',
    },
    {
      title: "Shoot 'Em Up",
      description: "Shoot 'Em Up is a 2D game built with Pygame.",
      urlSourceCode: 'https://github.com/PhymasSC/ShootEmUp',
      image: '/img/Shoot_em_up_logo.png',
      technologies: [
        { name: 'Python', site: 'https://www.python.org/' },
        { name: 'Pygame', site: 'https://www.pygame.org/' },
      ],
      timeline: 'December 2020 - January 2021',
    },
  ]

  return (
    <>
      <Grid.Container
        gap={3}
        justify='center'
        wrap='wrap'
        css={{
          '@media only screen and (max-width: 600px)': {
            width: '100vc',
            padding: '0',
          },
        }}
      >
        <Text h1>Projects.</Text>

        {projects.map((project, index) => (
          <Grid
            xs={12}
            key={index}
            css={{
              '@media only screen and (max-width: 600px)': {
                width: '100%',
              },
            }}
          >
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
