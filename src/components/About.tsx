import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Text, Spacer, Row, Button, Avatar } from '@nextui-org/react'
import { motion, AnimatePresence, Variants } from 'framer-motion'
import {
  faArrowCircleDown,
  faEnvelope,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons'
import Phymas from './icons/Phymas'

const About = () => {
  const parentVariant: Variants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { staggerChildren: 0.4 },
    },
  }

  const childrenVariant: Variants = {
    initial: { opacity: 0, y: 100 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, type: 'spring' },
    },
  }

  return (
    <>
      <AnimatePresence>
        <motion.div
          initial='initial'
          animate='animate'
          variants={parentVariant}
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
            variants={childrenVariant}
          >
            <Text
              h3
              css={{
                textAlign: 'center',
                fontSize: '10rem',
                textGradient: `45deg, $accents8 -20%, $accents9 100%`,
                fontWeight: '$extrabold',
                '@media (max-width: 1440px)': {
                  fontSize: '8rem',
                },

                '@media (max-width: 1024px)': {
                  fontSize: '6rem',
                },

                '@media(max-width: 960px )': {
                  fontSize: '5rem',
                },

                '@media (max-width: 768px)': {
                  fontSize: '4rem',
                },

                '@media (max-width: 480px)': {
                  fontSize: '3rem',
                },

                '@media (max-width: 380px)': {
                  fontSize: '2rem',
                },
              }}
            >
              Lau Sheng Cher
            </Text>
          </motion.div>
          <motion.div variants={childrenVariant}>
            <Text h2 css={{ textAlign: 'center' }}>
              Full-stack Web Developement Student 👨🏻‍💻
            </Text>
          </motion.div>
          <motion.div variants={childrenVariant}>
            <Text h3 weight='light' css={{ textAlign: 'center' }}>
              I am currently seeking for an internship
            </Text>
          </motion.div>
          <motion.div variants={childrenVariant}>
            <Row justify='center' align='center'>
              <FontAwesomeIcon
                rotate={90}
                icon={faLocationDot}
                size='lg'
                color='rgb(255,59,48)'
                style={{
                  marginTop: '-10px',
                }}
              />
              <Spacer x={0.5} />
              <Text h4 weight='light'>
                Penang, Malaysia
              </Text>
            </Row>
          </motion.div>
          <Spacer y={2} />
          <motion.div variants={childrenVariant}>
            <Row justify='center' align='center'>
              <Button
                size='xl'
                shadow
                bordered
                icon={<FontAwesomeIcon icon={faEnvelope} />}
                auto
                as='a'
                href='mailto:phymaslau@gmail.com'
              >
                Hire me
              </Button>
            </Row>
            <Spacer y={3} />
          </motion.div>
          <Row justify='center' align='center'>
            <FontAwesomeIcon icon={faArrowCircleDown} bounce />
          </Row>
        </motion.div>
      </AnimatePresence>
    </>
  )
}

export default About
