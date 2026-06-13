'use client'

import Header from '@/components/Header'
import Projects from '@/components/Projects'
import About from '@/components/About'
import Skills from '@/components/Skills'

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <div className="w-full">
        <Header />
      </div>
      <div className="w-full">
        <About />
      </div>
      <div className="w-full">
        <Skills />
      </div>
      <div className="w-full">
        <Projects />
      </div>
    </div>
  )
}
