import { Grid } from '@nextui-org/react'
import AnimatedText from './AnimatedText'
import ProjectCard from './ProjectCard'

const projects = [
  {
    title: 'Portfolio',
    description:
      'This is my portfolio website. It is built with Next.js and NextUI.',
    urlSourceCode: 'https://github.com/PhymasSC/phymas',
    urlDeployedVersion:
      'https://avatars.githubusercontent.com/u/86160567?s=200&v=4',
    image: '/favicon-32x32.png',
  },
  {
    title: 'UMT Fellow',
    description:
      'UMT Fellow is a platform for students to find and apply for fellowships.',
    urlDeployedVersion: 'https://www.umtfellow.social',
    urlSourceCode: 'https://github.com/PhymasSC/umt-fellow-web',
    image: '/favicon-32x32.png',
  },
  {
    title: 'REVEUX',
    description:
      'REVEUX is a luxury ecommerce platform for luxury beauty products. ',
    urlDeployedVersion: 'www.umtfellow.com',
    urlSourceCode: 'https://github.com/PhymasSC/umt-fellow-web',
    image: '/favicon-32x32.png',
  },
  {
    title: 'UMT Fellow',
    description:
      'UMT Fellow is a platform for students to find and apply for fellowships.',
    urlDeployedVersion: 'www.umtfellow.com',
    urlSourceCode: 'https://github.com/PhymasSC/umt-fellow-web',
    image: '/favicon-32x32.png',
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

      <AnimatedText>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ipsa
        quod Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Praesentium quae, corrupti necessitatibus itaque assumenda repellendus
        beatae dolor libero sed magnam quis, dolore nisi ducimus. Enim
        laboriosam a aspernatur recusandae accusamus, error nobis veritatis
        excepturi nulla nihil officiis magni laudantium maxime repellendus,
        nesciunt nemo hic perferendis officia fugit reprehenderit dicta vel
        placeat illo quod! Dolor reprehenderit quaerat ex iste blanditiis at
        quia, aliquam alias eligendi inventore molestiae quibusdam soluta
        impedit sapiente nulla, aliquid quasi facere animi vero voluptatibus quo
        ab! Aperiam dolores voluptas est accusantium nostrum! Quibusdam iusto
        distinctio earum dolorem ex ipsa impedit repellat cupiditate, quasi modi
        possimus iste illo quaerat numquam non commodi adipisci ab aut eveniet.
        Et veritatis accusamus architecto, quasi consequuntur perferendis
        blanditiis sint natus eius quaerat quos distinctio saepe maiores fugit
        eaque deserunt voluptate maxime ducimus dolores, optio aspernatur nihil.
        Repudiandae hic earum saepe sed at dolor tenetur. Ab ex repellendus esse
        nihil quod? Iste quos illum asperiores aperiam repellat deleniti alias
        soluta? Minima quos exercitationem aliquam aperiam eveniet dicta
        asperiores. Ducimus placeat at eveniet magnam praesentium temporibus,
        sint laboriosam culpa! Obcaecati dignissimos distinctio sint. Neque
        obcaecati officiis ipsum temporibus. Maiores quibusdam nemo libero
        incidunt, ut eligendi perferendis! Repellat inventore molestias mollitia
        aut pariatur sed distinctio commodi animi itaque non esse aspernatur,
        soluta id aliquid, labore deleniti! Repellendus, nam esse! Expedita
        totam quam perferendis sunt iusto blanditiis quisquam ipsa ex
        consectetur ullam. Blanditiis reprehenderit similique quos aliquam dicta
        quasi aspernatur expedita odit culpa sit, ipsa exercitationem nihil
        doloremque sint accusantium vel, neque inventore! Ullam eum ipsa
        voluptates odit natus nobis laudantium suscipit! Vero nemo consequuntur
        suscipit earum dolore, ullam tempore beatae quia optio debitis delectus
        numquam at exercitationem aspernatur maiores nisi, ut iste labore? Optio
        impedit doloremque nobis. Vero nihil beatae id, quaerat distinctio ipsum
        libero excepturi accusantium consequuntur quod labore praesentium
        doloribus dolore suscipit perspiciatis.
      </AnimatedText>
    </>
  )
}

export default Projects
