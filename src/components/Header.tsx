import {
  ArrowDownTrayIcon,
  MapPinIcon,
  ArrowDownCircleIcon,
  EnvelopeIcon,
} from '@heroicons/react/24/solid'
import { Text, Spacer, Row, Button, Grid } from '@nextui-org/react'
import { motion, Variants } from 'framer-motion'

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
      <motion.div
        initial='initial'
        animate='animate'
        variants={parentVariant}
        className=' min-h-screen h-full flex flex-col justify-center items-center'
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          variants={childrenVariant}
          className='w-full'
        >
          <Text
            h1
            className=' text-center text-[2rem] font-extrabold sm:text-[5rem] xl:text-[6rem] '
            css={{
              textGradient: `45deg, $accents8 -20%, $accents9 100%`,
            }}
          >
            Lau Sheng Cher
          </Text>
        </motion.div>
        <motion.div variants={childrenVariant}>
          <Text
            h2
            className='text-center text-sm sm:text-[2rem] xl:text-[3rem]'
          >
            Full-stack Web Development Student 👨🏻‍💻
          </Text>
        </motion.div>
        <motion.div variants={childrenVariant}>
          <Text
            h3
            weight='light'
            className='text-center text-xs sm:text-[1rem] sm:leading-8 xl:text-[2rem] xl:leading-[4rem]'
          >
            I am currently seeking for an internship
          </Text>
        </motion.div>
        <motion.div variants={childrenVariant}>
          <Row justify='center' align='center'>
            <MapPinIcon className='h-6 w-6 text-red-500 mt-[-0.75rem] ' />
            <Spacer x={0.5} />
            <Text h4 weight='light'>
              Penang, Malaysia
            </Text>
          </Row>
        </motion.div>
        <Spacer y={2} />
        <motion.div variants={childrenVariant}>
          <Grid.Container justify='center' gap={1}>
            <Grid>
              <Button
                size='xl'
                shadow
                ghost
                icon={<EnvelopeIcon className='h-6 w-6' />}
                auto
                as='a'
                href='mailto:phymaslau@gmail.com?subject=Job Offer for [Job Type] Intern Position at [Company Name]'
              >
                Hire me
              </Button>
            </Grid>
            <Grid>
              <Button
                size='xl'
                light
                iconRight={<ArrowDownTrayIcon className='h-6 w-6' />}
                auto
                color='secondary'
                as='a'
                href='/files/Lau_Sheng_Cher_Resume.pdf'
                target='_blank'
              >
                View Resume{' '}
              </Button>
            </Grid>
          </Grid.Container>
          <Spacer y={3} />
        </motion.div>
        <Row justify='center' align='center'>
          <ArrowDownCircleIcon className='h-10 r-10 animate-bounce' />
        </Row>
      </motion.div>
    </>
  )
}

export default About
