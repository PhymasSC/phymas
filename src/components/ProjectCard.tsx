import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { Card, Grid, Row, Text } from '@nextui-org/react'
import Link from 'next/link'

interface Props {
  title: string
  description: string
  url: string
  image?: string
}

const ProjectCard = (props: Props) => {
  const { title, description, url, image } = props

  return (
    <Card css={{ p: '$6', width: '400px' }}>
      <Card.Header>
        <img alt='nextui logo' src={image} width='34px' height='34px' />
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
          <Link color='primary' target='_blank' href={url}>
            Visit source code on GitHub{' '}
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> .
          </Link>
          <Link color='primary' target='_blank' href={url}>
            Visit deployed version{' '}
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> .
          </Link>
        </Row>
      </Card.Footer>
    </Card>
  )
}

export default ProjectCard
