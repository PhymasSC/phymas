import { Container, Row, Tooltip } from '@nextui-org/react'
import { motion } from 'framer-motion'

interface AnimatedChargingBarProps {
  level: number
  levelInText: string
}

const AnimatedChargingBar = (props: AnimatedChargingBarProps) => {
  return (
    <>
      <Container>
        <Tooltip
          contentColor='primary'
          content={props.levelInText}
          placement='right'
        >
          <Row>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i, index) => (
              <motion.div
                key={index}
                initial={{
                  backgroundColor: '#00000050',
                }}
                whileInView={{
                  backgroundColor: `${
                    index < props.level ? 'rgba(255, 216, 0, 1)' : '#00000050'
                  }`,
                  scale: [1, 1.2, 1],
                  transition: {
                    delay: Math.floor(Math.log(index + 1) * 100 * 0.3) / 100,
                    type: 'tween',
                  },
                }}
                style={{
                  width: '.5rem',
                  height: '1.5rem',
                  borderRadius: 'xl',
                  marginRight: '.2rem',
                }}
              />
            ))}
          </Row>
        </Tooltip>
      </Container>
    </>
  )
}

export default AnimatedChargingBar
