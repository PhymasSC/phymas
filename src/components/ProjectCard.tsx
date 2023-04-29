import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faLock,
} from '@fortawesome/free-solid-svg-icons'
import { Badge, Button, Card, Grid, Row, Spacer, Text } from '@nextui-org/react'
import Link from 'next/link'
import Image from 'next/image'

interface Props {
  title: string
  description: string
  urlSourceCode?: string
  urlDeployedVersion?: string
  image?: string
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
          {image?.startsWith('emoji-') ? (
            <Text
              css={{
                fontSize: '$6',
                lineHeight: '$xs',
                marginRight: '$4',
              }}
            >
              {image?.replace('emoji-', '')}
            </Text>
          ) : (
            <Image alt='nextui logo' src={image || ''} width={50} height={50} />
          )}
          <Grid.Container
            direction='column'
            justify='flex-end'
            css={{ pl: '$6' }}
          >
            <Grid xs={12}>
              <Text h1 size='$xl' css={{ lineHeight: '0' }}>
                {title}
              </Text>
            </Grid>
            <Grid xs={12}>
              <Text
                color='gray'
                size='$xs'
                weight='semibold'
                css={{ lineHeight: '0', marginTop: '$md' }}
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
          <Row>
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
          </Row>
        </Card.Body>
        <Card.Footer>
          <Row>
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
                  Visit source code on GitHub{' '}
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
            {urlDeployedVersion && (
              <>
                <Spacer x={1} />
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
              </>
            )}
          </Row>
        </Card.Footer>
      </Card>
    </Link>
  )
}

export default ProjectCard
