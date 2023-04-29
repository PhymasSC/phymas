import { Text, Grid, Card } from '@nextui-org/react'
import AnimatedCard from './AnimatedCard'
import AnimatedChargingBar from './AnimatedChargingBar'
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
  Mandarin: {
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
  Hokkien: {
    Listening: 6,
    Speaking: 4,
  },
}

const Skills = () => {
  return (
    <>
      <Grid.Container gap={3}>
        <Grid xs={12}>
          <Text h1>Skills.</Text>
        </Grid>
        <Grid xs={12} lg={4}>
          {
            // Languages card
          }
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
                      justify='center'
                      alignItems='center'
                      css={{ marginBottom: '$md' }}
                    >
                      <Grid key={index} xs={5} alignItems='center'>
                        <Text weight='semibold' css={{ lineHeight: '$xs' }}>
                          {language.replaceAll('_', ' ')}
                        </Text>
                      </Grid>
                      <Grid key={index} xs={6} alignItems='center'>
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
        <Grid xs={12} md={4}>
          <SkillCard />
        </Grid>
        <Grid xs={12} md={4}>
          <SkillCard />
        </Grid>
        <Grid xs={12} md={4}>
          <SkillCard />
        </Grid>
        <Grid xs={12} md={4}>
          <SkillCard />
        </Grid>
        <Grid xs={12} md={4}>
          <SkillCard />
        </Grid>
      </Grid.Container>
    </>
  )
}

export default Skills
