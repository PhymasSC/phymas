import { Text, Grid, Card, theme } from '@nextui-org/react'
import AnimatedCard from './AnimatedCard'
import AnimatedChargingBar from './AnimatedChargingBar'
import MongoDB from './icons/MongoDB'
import NextJs from './icons/NextJs'
import Nodejs from './icons/Nodejs'
import ReactLogo from './icons/React'
import TypeScript from './icons/TypeScript'
import SkillCard from './SkillCard'
import GraphQL from './icons/GraphQL'
import MySQL from './icons/MySQL'
import Java from './icons/Java'
import Python from './icons/Python'
import Lua from './icons/Lua'
import Git from './icons/Git'

type LanguageLevels = {
  [key: string]: {
    Listening: number
    Speaking: number
    Reading?: number
    Writing?: number
  }
}

const Languages: LanguageLevels = {
  ['Mandarin 普通话']: {
    Listening: 10,
    Speaking: 9,
    Reading: 9,
    Writing: 8,
  },
  English: {
    Listening: 9,
    Speaking: 8,
    Reading: 8,
    Writing: 8,
  },
  Bahasa_Melayu: {
    Listening: 6,
    Speaking: 5,
    Reading: 6,
    Writing: 4,
  },
  ['Hokkien 福建话']: {
    Listening: 6,
    Speaking: 4,
  },
}

const ProgrammingSkills = [
  {
    name: 'React',
    description: 'A JavaScript library for building user interfaces',
    url: 'https://reactjs.org/',
    image: <ReactLogo width={200} height={200} />,
    level: 7,
  },
  {
    name: 'Next.js',
    description: 'The React Framework for Production',
    url: 'https://nextjs.org/',
    image: (
      <NextJs
        width={200}
        height={200}
        color={theme.colors.accents9.toString()}
      />
    ),
    level: 7,
  },
  {
    name: 'TypeScript',
    description: 'Typed JavaScript at Any Scale.',
    url: 'https://www.typescriptlang.org/',
    image: <TypeScript width={200} height={200} />,
    level: 5,
  },
  {
    name: 'Node.js',
    description:
      "Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.",
    url: 'https://nodejs.org/en/',
    image: <Nodejs width={200} height={200} />,
    level: 5,
  },
  {
    name: 'GraphQL',
    description:
      'GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data.',
    url: 'https://graphql.org/',
    image: <GraphQL width={200} height={200} />,
    level: 5,
  },
  {
    name: 'MongoDB',
    description:
      'MongoDB is a general purpose, document-based, distributed database built for modern application developers and for the cloud era.',
    url: 'https://www.mongodb.com/',
    image: <MongoDB width={200} height={200} />,
    level: 5,
  },
  {
    name: 'MySQL',
    description:
      'MySQL is an open-source relational database management system.',
    url: 'https://www.mysql.com/',
    image: <MySQL width={200} height={200} />,
    level: 5,
  },
  {
    name: 'Java',
    description:
      'Java is a class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.',
    url: 'https://www.java.com/en/',
    image: <Java width={200} height={200} />,
    level: 5,
  },
  {
    name: 'Python',
    description:
      'Python is an interpreted, high-level and general-purpose programming language.',
    url: 'https://www.python.org/',
    image: <Python width={200} height={200} />,
    level: 5,
  },
  {
    name: 'Lua',
    description:
      'Lua is a lightweight, high-level, multi-paradigm programming language designed primarily for embedded use in applications.',
    url: 'https://www.lua.org/',
    image: <Lua width={200} height={200} />,
    level: 5,
  },
  {
    name: 'Git',
    description:
      'Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.',
    url: 'https://git-scm.com/',
    image: <Git width={200} height={200} />,
    level: 5,
  },
]

const Skills = () => {
  return (
    <>
      <Grid.Container
        gap={3}
        css={{
          marginTop: '1rem',
        }}
      >
        <Grid xs={12} justify='center'>
          <Text h2>Skills.</Text>
        </Grid>
        {
          // Languages card
        }
        <Grid xs={12}>
          <AnimatedCard>
            <Card
              variant='bordered'
              css={{
                padding: '$md',
                background:
                  'linear-gradient(135deg, $accents0, rgba(145, 186, 236, 1))',
              }}
            >
              <Card.Header>
                <Text h2 size='$xl'>
                  Languages
                </Text>
              </Card.Header>
              <Card.Body>
                {Object.keys(Languages).map((language, index) => {
                  const level =
                    (Languages[language].Listening +
                      Languages[language].Speaking +
                      (Languages[language]?.Reading || 0) +
                      (Languages[language]?.Writing || 0)) /
                    Object.keys(Languages[language]).length
                  return (
                    <Grid.Container
                      key={index}
                      justify='center'
                      alignItems='center'
                      css={{ marginBottom: '$md' }}
                    >
                      <Grid xs={5} alignItems='center'>
                        <Text weight='semibold' css={{ lineHeight: '$xs' }}>
                          {language.replaceAll('_', ' ')}
                        </Text>
                      </Grid>
                      <Grid xs={6} alignItems='center'>
                        <AnimatedChargingBar
                          level={level}
                          levelInText={`Overall: ${level}`}
                        />
                      </Grid>
                    </Grid.Container>
                  )
                })}
              </Card.Body>
            </Card>
          </AnimatedCard>
        </Grid>
        {
          // Skills card
          ProgrammingSkills.map((skill, index) => (
            <Grid key={index} xs={12} md={4}>
              <SkillCard
                name={skill.name}
                description={skill.description}
                url={skill.url}
                image={skill.image}
                level={skill.level}
              />
            </Grid>
          ))
        }
      </Grid.Container>
    </>
  )
}

export default Skills
