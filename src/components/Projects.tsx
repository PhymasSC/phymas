'use client'

import { useTheme } from 'next-themes'
import Phymas from './icons/Phymas'
import ProjectCard from './ProjectCard'

const projectList = [
  {
    name: 'Portfolio',
    date: 'April 2022 - Current',
    description: 'This is my portfolio website. It is built with Next.js and NextUI.',
    url: 'https://phymas.com',
    source: 'https://github.com/PhymasSC/phymas',
    technology: ['Next.js', 'NextUI', 'Framer Motion', 'TypeScript'],
    icon: <Phymas width={40} height={40} />,
  },
  {
    name: 'UMT Fellow',
    date: 'November 2022 - Current',
    description:
      'UMT Fellow is a platform for students to find and apply for fellowships.',
    url: 'https://fellow.umt.edu.my',
    source: 'https://github.com/UMTFellow/umtfellow',
    technology: [
      'Next.js',
      'Mantine UI',
      'Ably',
      'Prisma',
      'GraphQL',
      'Apollo',
      'TypeScript',
    ],
    icon: (
      <img
        src="/img/umt_fellow.webp"
        width={40}
        height={40}
        alt="UMT Fellow"
      />
    ),
  },
  {
    name: 'Online Badminton Court Booking System',
    date: 'May 2022 - June 2022',
    description: 'This is an online banking system built with Java Swing.',
    source: 'https://github.com/PhymasSC/Online-Badminton-Court-Booking-System',
    technology: ['Java EE', 'JSP', 'Servlet', 'MySQL', 'JavaScript', 'Daisy UI'],
    icon: (
      <img
        src="/img/badminton.webp"
        width={40}
        height={40}
        alt="Online Badminton Court Booking System"
      />
    ),
  },
  {
    name: 'REVEUX',
    date: 'December 2021 - January 2022',
    description:
      'REVEUX is a luxury ecommerce platform for luxury beauty products.',
    source: 'https://github.com/PhymasSC/REVEUX',
    technology: [
      'Node.js',
      'Express.js',
      'MongoDB',
      'Stripe',
      'JavaScript',
      'Tailwind CSS',
    ],
    icon: (
      <img
        src="/img/reveux.webp"
        width={40}
        height={40}
        alt="REVEUX"
      />
    ),
  },
  {
    name: 'Online Banking System',
    date: 'May 2021 - July 2021',
    description: 'This is an online banking system built with Java Swing.',
    technology: ['Java SE', 'Java Swing', 'Google Mail API', 'Figma'],
    icon: (
      <img
        src="/img/bank.webp"
        width={40}
        height={40}
        alt="Online Banking System"
      />
    ),
    isWip: true,
    wipDescription: 'Request for source code',
  },
  {
    name: "Shoot 'Em Up",
    date: 'December 2020 - January 2021',
    description: "Shoot 'Em Up is a 2D game built with Pygame.",
    source: 'https://github.com/PhymasSC/Shoot-Em-Up',
    technology: ['Python', 'Pygame'],
    icon: (
      <img
        src="/img/spaceship.webp"
        width={40}
        height={40}
        alt="Shoot 'Em Up"
      />
    ),
  },
]

const Projects = () => {
  return (
    <>
      <div className="w-full mt-4 flex flex-col">
        <div className="flex justify-center w-full mb-6">
          <h2 className="text-3xl font-bold">Projects.</h2>
        </div>
        <div className="flex flex-col gap-6 w-full">
          {projectList.map((project, index) => (
            <div key={index} className="w-full">
              <ProjectCard
                name={project.name}
                date={project.date}
                description={project.description}
                url={project.url}
                source={project.source}
                technology={project.technology}
                icon={project.icon}
                isWip={project.isWip}
                wipDescription={project.wipDescription}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Projects
