import { Text, Grid, Spacer } from '@nextui-org/react'
import { motion, useTransform, useScroll } from 'framer-motion'
import Image from 'next/image'
import AnimatedText from './AnimatedText'

const About = () => {
  const { scrollY } = useScroll()

  const scale = useTransform(scrollY, [0, window.innerHeight], [1.25, 1])
  return (
    <>
      <motion.div style={{ scale }}>
        <Grid.Container wrap='wrap'>
          <Grid justify='center' alignItems='center' direction='column' xs={12}>
            <Text h1>About me.</Text>
            <Image
              src='/img/my_photo.webp'
              width={200}
              height={200}
              alt='A photo of Lau Sheng Cher'
              style={{ borderRadius: '50%' }}
            />
          </Grid>
          <Spacer y={3} />
          <Grid alignItems='center'>
            <AnimatedText
              size='$2xl'
              weight='medium'
              animateScale={1.1}
              css={{
                textAlign: 'center',
                textJustify: 'inter-word',
                lineHeight: '1.5',
              }}
            >
              I'm a 23 year old student from Malaysia. I'm currently studying
              computer science at the University of Malaysia Terengganu in
              Terengganu, Malaysia. I'm interested in web development and
              software development.
            </AnimatedText>
          </Grid>
        </Grid.Container>
      </motion.div>
    </>
  )
}

export default About
