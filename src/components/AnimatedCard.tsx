'use client'

import { motion } from 'framer-motion'
import React from 'react'

const AnimatedCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{
        y: 0,
        opacity: 1,
        transition: {
          type: 'spring',
          bounce: 0.4,
          duration: 0.8,
        },
      }}
      viewport={{ once: true, amount: 0.1 }}
      className="h-full"
    >
      {children}
    </motion.div>
  )
}

export default AnimatedCard
