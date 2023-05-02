import { Text, Grid, Card, theme } from '@nextui-org/react'
import AnimatedCard from './AnimatedCard'
import AnimatedChargingBar from './AnimatedChargingBar'
import NextJs from './icons/NextJs'
import Nodejs from './icons/Nodejs'
import ReactLogo from './icons/React'
import TypeScript from './icons/TypeScript'
import SkillCard from './SkillCard'

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
                  'linear-gradient(135deg, rgba(223, 237, 254, 0.6), rgba(145, 186, 236, 1))',
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
            <Grid xs={12} md={4}>
              <SkillCard
                key={index}
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
