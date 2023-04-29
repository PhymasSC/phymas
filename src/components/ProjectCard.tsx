import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faLock,
} from '@fortawesome/free-solid-svg-icons'
import { Badge, Button, Card, Grid, Text } from '@nextui-org/react'
import Link from 'next/link'
import Image from 'next/image'

interface Props {
  title: string
  description: string
  urlSourceCode?: string
  urlDeployedVersion?: string
  image?: string | React.ReactNode
  timeline: string
  technologies: string[]
}

const ProjectCard = (props: Props) => {
  const {
    title,
    description,
    urlSourceCode,
    urlDeployedVersion,
    technologies,
    timeline,
    image,
  } = props

  return (
    <Link href={`/project/${title}`} style={{ width: '100%' }}>
      <Card
        variant='bordered'
        isPressable
        isHoverable
        css={{ p: '$6', width: '100%' }}
      >
        <Card.Header>
          {image?.toLocaleString() === '[object Object]' ? (
            image
          ) : image?.toLocaleString()?.startsWith('emoji-') ? (
            <Text
              css={{
                fontSize: '$6',
                lineHeight: '$xs',
                marginRight: '$4',
              }}
            >
              {image?.toLocaleString().replace('emoji-', '')}
            </Text>
          ) : (
            <Image
              alt='nextui logo'
              src={image?.toLocaleString() || ''}
              width={50}
              height={50}
            />
          )}
          <Grid.Container
            direction='column'
            justify='flex-end'
            css={{ pl: '$6' }}
          >
            <Grid xs={12}>
              <Text
                h1
                size='$xl'
                css={{
                  lineHeight: '$xs',
                }}
              >
                {title}
              </Text>
            </Grid>

            <Grid xs={12}>
              <Text
                color='gray'
                size='$xs'
                weight='semibold'
                css={{
                  lineHeight: '$xs',
                }}
              >
                {timeline}
              </Text>
            </Grid>
          </Grid.Container>
        </Card.Header>
        <Card.Body css={{ py: '$2' }}>
          <Text weight='bold'>
            <Text weight='medium' size='$md'>
              {description}
            </Text>
            <br />
            Technology used:
          </Text>
          <Grid.Container>
            <Grid>
              {technologies.map((technology, index) => (
                <Badge
                  key={index}
                  color='primary'
                  variant='flat'
                  css={{ fontSize: '$xs' }}
                >
                  {technology}
                </Badge>
              ))}
            </Grid>
          </Grid.Container>
        </Card.Body>
        <Card.Footer>
          <Grid.Container gap={1}>
            <Grid>
              {urlSourceCode ? (
                <Link
                  onClick={e => {
                    e.stopPropagation()
                  }}
                  color='primary'
                  target='_blank'
                  href={urlSourceCode}
                >
                  <Button
                    iconRight={
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    }
                    auto
                    ghost
                    rounded
                  >
                    Source code{' '}
                  </Button>
                </Link>
              ) : (
                <Button
                  icon={<FontAwesomeIcon icon={faLock} />}
                  auto
                  color='error'
                  ghost
                  rounded
                  as='a'
                  href={`mailto:phymaslau@gmail.com?subject=Request for source code for ${title}`}
                >
                  Request for source code
                </Button>
              )}
            </Grid>
            {urlDeployedVersion && (
              <Grid>
                <Link
                  onClick={e => {
                    e.stopPropagation()
                  }}
                  color='primary'
                  target='_blank'
                  href={urlDeployedVersion}
                >
                  <Button
                    iconRight={
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    }
                    auto
                    ghost
                    rounded
                  >
                    Visit deployed app
                  </Button>
                </Link>
              </Grid>
            )}
          </Grid.Container>
        </Card.Footer>
      </Card>
    </Link>
  )
}

export default ProjectCard
