import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { Card, Grid, Row, Text } from '@nextui-org/react'
import Link from 'next/link'
import Image from 'next/image'

interface Props {
  title: string
  description: string
  urlSourceCode: string
  urlDeployedVersion: string
  image?: string
}

const ProjectCard = (props: Props) => {
  const { title, description, urlSourceCode, urlDeployedVersion, image } = props

  return (
    <Card css={{ p: '$6', width: '400px' }}>
      <Card.Header>
        <Image
          alt='nextui logo'
          src={image || ''}
          width={34}
          height={34}
          style={{ borderRadius: '50%' }}
        />
        <Grid.Container css={{ pl: '$6' }}>
          <Grid xs={12}>
            <Text h4 css={{ lineHeight: '$xs' }}>
              {title}
            </Text>
          </Grid>
        </Grid.Container>
      </Card.Header>
      <Card.Body css={{ py: '$2' }}>
        <Text>{description}</Text>
      </Card.Body>
      <Card.Footer>
        <Row>
          <Link color='primary' target='_blank' href={urlSourceCode}>
            Visit source code on GitHub{' '}
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> .
          </Link>
          <Link color='primary' target='_blank' href={urlDeployedVersion}>
            Visit deployed version{' '}
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> .
          </Link>
        </Row>
      </Card.Footer>
    </Card>
  )
}

export default ProjectCard
