import { motion } from 'framer-motion'
import { useState } from 'react'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const skills = [
  { name: 'Mandarin', level: 'Native Speaker' },
  { name: 'English', level: 'Highly Proficient' },
  { name: 'Bahasa Malaysia', level: 'Very Good Command' },
  { name: 'Java', level: 'Intermediate' },
  { name: 'Kotlin', level: 'Intermediate' },
  { name: 'Python', level: 'Intermediate' },
  { name: 'Lua', level: 'Beginner' },
  { name: 'JavaScript', level: 'Intermediate' },
  { name: 'TypeScript', level: 'Intermediate' },
  { name: 'MySQL', level: 'Intermediate' },
  { name: 'SQLite', level: 'Intermediate' },
  { name: 'Visual Studio Code', level: 'Advanced' },
  { name: 'Netbeans', level: 'Intermediate' },
  { name: 'IntelliJ IDEA', level: 'Intermediate' },
  { name: 'React', level: 'Intermediate' },
  { name: 'Next.js', level: 'Intermediate' },
  { name: 'REST', level: 'Intermediate' },
  { name: 'GraphQL', level: 'Beginner' },
  { name: 'Git', level: 'Intermediate' },
]

const ProgressBar = ({ progress }: any) => {
  const [isAnimated, setIsAnimated] = useState(false)

  const variants = {
    initial: { width: 0 },
    animate: {
      width: `${progress}%`,
      transition: {
        duration: 1,
        ease: 'easeInOut',
      },
    },
  }

  const handleMouseEnter = () => {
    setIsAnimated(true)
  }

  const handleMouseLeave = () => {
    setIsAnimated(false)
  }

  return (
    <div className='relative flex items-center h-6 rounded-full bg-gray-400 overflow-hidden'>
      <motion.div
        className={`h-full bg-yellow-500 ${isAnimated ? 'z-10' : 'z-0'}`}
        variants={variants}
        initial='initial'
        animate='animate'
      />
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className='relative w-full text-center'
      >
        <FontAwesomeIcon
          icon={faStar}
          className='inline-block text-yellow-500 w-4 h-4'
        />
        <span className='inline-block ml-2'>{progress}%</span>
      </div>
    </div>
  )
}

const Section = () => {
  return (
    <section className='py-12'>
      <h2 className='text-2xl font-medium mb-4'>Skills</h2>
      {skills.map(skill => (
        <div key={skill.name} className='flex items-center mb-2'>
          <p className='flex-1 mr-4'>{skill.name}</p>
          <div className='w-1/2'>
            <ProgressBar
              progress={
                skill.level === 'Native Speaker' ||
                skill.level === 'Highly Proficient' ||
                skill.level === 'Very Good Command'
                  ? 100
                  : skill.level === 'Advanced'
                  ? 90
                  : skill.level === 'Intermediate'
                  ? 70
                  : 40
              }
            />
          </div>
          <p className='ml-4'>{skill.level}</p>
        </div>
      ))}
    </section>
  )
}

export default Section
