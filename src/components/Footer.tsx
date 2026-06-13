'use client'

import { Link } from '@nextui-org/link'
import Github from './icons/Github'
import LinkedIn from './icons/LinkedIn'

const Footer = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full py-8 mt-12 border-t border-gray-200 dark:border-gray-800">
        <p className="text-sm font-semibold mb-4">Find me on.</p>
        <div className="flex gap-4 mb-6">
          <Link isExternal href="https://github.com/PhymasSC">
            <Github width={24} height={24} />
          </Link>
          <Link isExternal href="https://www.linkedin.com/in/sheng-cher-lau-a03525227/">
            <LinkedIn width={24} height={24} />
          </Link>
        </div>
        <p className="text-xs text-center text-gray-500">
          Website built with{' '}
          <Link isExternal href="https://nextjs.org/" className="text-xs">Next.js</Link>,{' '}
          <Link isExternal href="https://nextui.org/" className="text-xs">NextUI</Link>,{' '}
          <Link isExternal href="https://www.framer.com/motion/" className="text-xs">Framer Motion</Link> and{' '}
          <Link isExternal href="https://www.typescriptlang.org/" className="text-xs">TypeScript</Link>.
          Powered by <Link isExternal href="https://vercel.com/" className="text-xs">Vercel</Link>.
          © Lau Sheng Cher 2026
        </p>
      </div>
    </>
  )
}

export default Footer
