'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'

type AnimatedTextProps = {
  children: string
  animateScale?: number
  className?: string
}

const AnimatedText = (props: AnimatedTextProps) => {
  const ref = useRef(null)
  const { scrollY, scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'start start'],
  })
  const [words, setWords] = useState<string[]>([])
  const [colorIndex, setColorIndex] = useState(0)

  const [scale, setScale] = useState<any>(1.25)
  const motionScale = useTransform(
    scrollYProgress,
    [0, typeof window !== 'undefined' ? window.innerHeight : 1000],
    [props.animateScale || 1.25, 1],
  )

  useEffect(() => {
    setScale(motionScale)
  }, [motionScale])

  const textPosition = useTransform(
    scrollYProgress,
    [0, 1 / 2],
    [0, words.length],
  )

  useEffect(() => {
    const wordsArray = props.children.split(' ')
    setWords(wordsArray)
  }, [props.children])

  useEffect(() => {
    return scrollY.on('change', () => {
      const newIndex = Math.floor(textPosition.get())
      if (newIndex !== colorIndex) {
        setColorIndex(newIndex)
      }
    })
  }, [scrollY, textPosition, colorIndex])

  return (
    <motion.div ref={ref} style={{ scale }}>
      <p
        className={`flex justify-center flex-wrap gap-1 ${props.className || ''}`}
        aria-label={props.children}
      >
        {
          // separate each word into a span
          words.map((word, index) => {
            return (
              <span
                key={index}
                className={`${index === colorIndex ? 'text-blue-500' : ''}`}
              >
                {word}{' '}
              </span>
            )
          })
        }
      </p>
    </motion.div>
  )
}

export default AnimatedText
