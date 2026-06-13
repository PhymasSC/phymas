'use client'

import { motion, useTransform, useScroll } from 'framer-motion'
import Image from 'next/image'
import AnimatedText from './AnimatedText'
import { useEffect, useState } from 'react'

const About = () => {
  const { scrollY } = useScroll()
  const [scale, setScale] = useState<any>(1.25)
  const motionScale = useTransform(scrollY, [0, typeof window !== 'undefined' ? window.innerHeight : 1000], [1.25, 1])

  useEffect(() => {
    setScale(motionScale)
  }, [motionScale])

  const age =
    new Date(Date.now() - new Date('2000-04-19').getTime()).getFullYear() - 1970

  return (
    <>
      <motion.div style={{ scale }}>
        <div className="flex flex-wrap justify-center items-center flex-col w-full">
          <div className="flex justify-center items-center flex-col w-full">
            <h1 className="text-4xl font-bold mb-4">About me.</h1>
            <Image
              src='/img/my_photo.webp'
              width={200}
              height={200}
              alt='A photo of Lau Sheng Cher'
              style={{ borderRadius: '50%' }}
            />
          </div>
          <div className="h-12 w-full" />
          <div className="flex items-center justify-center w-full">
            <AnimatedText
              className="text-2xl font-medium text-center leading-relaxed"
            >
              {`I'm a ${age} year old student from Malaysia. I'm currently studying computer science at the University of Malaysia Terengganu in Terengganu, Malaysia. I'm interested in web development and software development.`}
            </AnimatedText>
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default About
