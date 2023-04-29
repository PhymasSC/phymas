import { faExternalLink, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Card, Col, Row, Button, Text } from '@nextui-org/react'
import Image from 'next/image'
import AnimatedCard from './AnimatedCard'

const SkillCard = () => {
  return (
    <AnimatedCard>
      <Card
        variant='bordered'
        css={{
          width: '100%',
          minHeight: '300px',
        }}
      >
        <Card.Header
          css={{
            position: 'absolute',
            zIndex: 1,
            background: 'linear-gradient(180deg, #00000080, #FFFFFF00)',
          }}
        >
          <Col>
            <Text
              size={12}
              weight='bold'
              transform='uppercase'
              color='#ffffffAA'
            >
              What to watch
            </Text>
            <Text h4 color='white'>
              Stream the Acme event
            </Text>
          </Col>
        </Card.Header>
        <Card.Body css={{ p: 0 }}>
          <Image
            src='/img/bg.png'
            alt='Picture of the author'
            height={300}
            width={800}
            style={{ objectFit: 'cover' }}
          ></Image>
        </Card.Body>
        <Card.Footer
          isBlurred
          css={{
            position: 'absolute',
            bgBlur: '#33333366',
            borderTop: '$borderWeights$light solid rgba(180, 180, 180, 0.5)',
            bottom: 0,
            zIndex: 1,
          }}
        >
          <Row>
            <Col>
              <FontAwesomeIcon icon={faStar} color='gold' />
              <FontAwesomeIcon icon={faStar} color='gold' />
              <FontAwesomeIcon icon={faStar} color='gold' />
              <FontAwesomeIcon icon={faStar} color='gold' />
              <FontAwesomeIcon icon={faStar} color='gold' />
            </Col>
            <Col>
              <Row justify='flex-end'>
                <Button
                  flat
                  auto
                  color='success'
                  rounded
                  iconRight={
                    <FontAwesomeIcon icon={faExternalLink} size='xs' />
                  }
                >
                  <Text
                    css={{ color: 'inherit' }}
                    size={12}
                    weight='bold'
                    transform='uppercase'
                  >
                    Learn More
                  </Text>
                </Button>
              </Row>
            </Col>
          </Row>
        </Card.Footer>
      </Card>
    </AnimatedCard>
  )
}

export default SkillCard
