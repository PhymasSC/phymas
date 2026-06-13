'use client'

import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'

export default function Project() {
  const params = useParams()
  const name = params?.name as string | undefined

  return (
    <div className="container mx-auto px-4 max-w-7xl">
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
        <h1 className="text-4xl font-bold">
          Projects #1 -{' '}
          {
            // remove underscore and make it title case
            name
              ?.toString()
              .replaceAll('_', ' ')
              .replace(/\w\S*/g, w => w.replace(/^\w/, c => c.toUpperCase()))
          }
        </h1>
      </motion.div>
    </div>
  )
}
