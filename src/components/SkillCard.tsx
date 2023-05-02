import { faExternalLink, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Card, Text, Link, Grid, Button } from '@nextui-org/react'
import Image from 'next/image'
import AnimatedCard from './AnimatedCard'
import AnimatedChargingBar from './AnimatedChargingBar'

interface SkillCardProps {
  name: string
  description: string
  url: string
  image: React.ReactNode | string
  level?: number
}

const SkillCard = (props: SkillCardProps) => {
  const { name, description, url, image, level } = props
  return (
    <AnimatedCard>
      <Card
        variant='bordered'
        css={{
          width: '100%',
          minHeight: '300px',
          height: '100%',
        }}
      >
        <Card.Header>
          <Text h1 size={12} weight='bold' transform='uppercase'>
            {name}
          </Text>
        </Card.Header>
        <Card.Body
          css={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {image?.toLocaleString() === '[object Object]' ? (
            image
          ) : (
            <Image
              src={image?.toLocaleString() || ''}
              alt={description}
              height={300}
              width={300}
            />
          )}
        </Card.Body>
        <Card.Footer isBlurred>
          <Grid.Container gap={2}>
            <Grid xs={12} lg={8}>
              <Grid.Container>
                <Grid xs={12}>
                  <Text
                    css={{ color: 'inherit' }}
                    size={12}
                    weight='bold'
                    transform='uppercase'
                  >
                    {description}{' '}
                  </Text>
                </Grid>

                <Grid xs={12}>
                  <Text small>Proficiency level:</Text>
                  {level && (
                    <AnimatedChargingBar
                      level={level}
                      levelInText={`Level: ${level}`}
                    />
                  )}
                </Grid>
              </Grid.Container>
            </Grid>

            <Grid xs={12} lg={4}>
              <Link href={url}>
                <Button
                  auto
                  light
                  size='sm'
                  color='primary'
                  iconRight={<FontAwesomeIcon icon={faExternalLink} />}
                >
                  {`Learn more`}
                </Button>
              </Link>
            </Grid>
          </Grid.Container>
        </Card.Footer>
      </Card>
    </AnimatedCard>
  )
}

export default SkillCard
