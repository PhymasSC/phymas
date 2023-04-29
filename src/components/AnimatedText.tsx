import { Text, TextProps } from '@nextui-org/react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'

type AnimatedTextProps = {
  children: string
  animateScale?: number
} & TextProps

const AnimatedText = (props: AnimatedTextProps) => {
  const ref = useRef(null)
  const { scrollY, scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'start start'],
  })
  const [words, setWords] = useState<string[]>([])
  const [colorIndex, setColorIndex] = useState(0)
  const scale = useTransform(
    scrollYProgress,
    [0, window.innerHeight],
    [props.animateScale || 1.25, 1],
  )
  const textPosition = useTransform(
    scrollYProgress,
    [0, 1 / 2],
    [0, words.length],
  )

  useEffect(() => {
    const wordsArray = props.children.split(' ')
    setWords(wordsArray)
  }, [props.children])

  scrollY.on('change', () => {
    const newIndex = Math.floor(textPosition.get())
    if (newIndex !== colorIndex) {
      setColorIndex(newIndex)
    }
  })

  return (
    <motion.text ref={ref} style={{ scale }}>
      <Text {...props}>
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
      </Text>
    </motion.text>
  )
}

export default AnimatedText
