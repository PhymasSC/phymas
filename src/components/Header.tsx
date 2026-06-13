'use client'

import { Button } from '@nextui-org/button'
import { Link } from '@nextui-org/link'
import { motion, useTransform, useScroll } from 'framer-motion'
import { useEffect, useState } from 'react'

const Header = () => {
  const { scrollY } = useScroll()
  const [y1, setY1] = useState<any>(0)
  const [y2, setY2] = useState<any>(0)

  const motionY1 = useTransform(scrollY, [0, typeof window !== 'undefined' ? window.innerHeight : 1000], [0, 200])
  const motionY2 = useTransform(scrollY, [0, typeof window !== 'undefined' ? window.innerHeight : 1000], [0, -200])

  useEffect(() => {
    setY1(motionY1)
    setY2(motionY2)
  }, [motionY1, motionY2])

  return (
    <>
      <div className="flex flex-col justify-center items-center w-full min-h-[90vh]">
        <motion.div style={{ y: y2 }}>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Full-stack Web Development Student 👨‍💻
          </h1>
        </motion.div>
        <motion.div style={{ y: y1 }}>
          <h2 className="text-2xl text-center text-gray-500 mb-8">
            I am currently seeking for an internship
          </h2>
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="text-red-500">
                <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
              </span>
              <span>Penang, Malaysia</span>
            </div>
            <div className="flex flex-row items-center justify-center gap-6">
              <div className="flex items-center gap-2">
                <svg viewBox="0 0 24 24" fill="currentColor" height="1.5em" width="1.5em">
                  <path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z" />
                </svg>
                <Link className="text-black dark:text-white" href="mailto:laushengcher2000@gmail.com">
                  Hire me
                </Link>
              </div>
              <div className="flex items-center gap-2">
                <Link
                  isExternal
                  color="secondary"
                  href="/Lau Sheng Cher Resume.pdf"
                >
                  View Resume
                </Link>
                <span className="text-purple-500">
                  <svg viewBox="0 0 24 24" fill="currentColor" height="1.5em" width="1.5em">
                    <path d="M19 9h-4V3H9v6H5l7 8zM4 19h16v2H4z" />
                  </svg>
                </span>
              </div>
            </div>
            <Button
              isIconOnly
              color="default"
              aria-label="Scroll to About Me"
              radius="full"
              variant="flat"
              onPress={() => {
                if (typeof window !== 'undefined') {
                  window.scrollTo({
                    top: window.innerHeight,
                    behavior: 'smooth',
                  })
                }
              }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" height="1.5em" width="1.5em">
                <path d="m11.998 17 7-8h-14z" />
              </svg>
            </Button>
          </div>
        </motion.div>
      </div>
    </>
  )
}

export default Header
