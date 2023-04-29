import { Container, Text } from '@nextui-org/react'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'

const Project = () => {
  const router = useRouter()
  const { name } = router.query

  return (
    <>
      <Container>
        <motion.div
          initial={{
            opacity: 0,
            y: 100,
          }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, type: 'spring' },
          }}
        >
          <Text h1>
            Projects #1 -{' '}
            {
              // remove underscore and make it title case
              name
                ?.toString()
                .replaceAll('_', ' ')
                .replace(/\w\S*/g, w => w.replace(/^\w/, c => c.toUpperCase()))
            }
          </Text>
        </motion.div>
      </Container>
    </>
  )
}

export default Project
