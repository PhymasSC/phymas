import { Text, TextProps } from '@nextui-org/react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useEffect } from 'react'

type AnimatedTextProps = {
  children: string
  animateScale?: number
} & TextProps

const AnimatedText = (props: AnimatedTextProps) => {
  const { scrollY } = useScroll()
  const [words, setWords] = useState<string[]>([])
  const [colorIndex, setColorIndex] = useState(0)
  const scale = useTransform(
    scrollY,
    [0, window.innerHeight],
    [props.animateScale || 1.25, 1],
  )

  useEffect(() => {
    const wordsArray = props.children.split(' ')
    setWords(wordsArray)
  }, [props.children])

  scrollY.on('change', () => {
    const scrollPercentage = scrollY.get() / window.innerHeight
    const newIndex = Math.floor(scrollPercentage * words.length * 3)

    if (newIndex !== colorIndex) {
      setColorIndex(newIndex)
    }
  })

  return (
    <motion.text style={{ scale }}>
      <Text {...props}>
        {
          // separate each word into a span
          props.children.split(' ').map((word, index) => {
            return (
              <span
                key={index}
                className={`${
                  index === colorIndex % words.length ? 'text-blue-500' : ''
                }`}
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
