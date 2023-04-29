import { motion, useMotionValue, useTransform, useAnimate } from 'framer-motion'

const AnimatedCard = ({ children }: { children: any }) => {
  const [scope, animate] = useAnimate()
  const x = useMotionValue(200)
  const y = useMotionValue(200)

  const rotateX = useTransform(y, [0, 400], [2.5, -2.5])
  const rotateY = useTransform(x, [0, 400], [-2.5, 2.5])

  function handleMouse(event: {
    currentTarget: { getBoundingClientRect: () => any }
    clientX: number
    clientY: number
  }) {
    const rect = event.currentTarget.getBoundingClientRect()

    x.set(event.clientX - rect.left)
    y.set(event.clientY - rect.top)
  }

  function handleMouseLeave(event: any) {
    animate(
      scope.current,
      { rotateX: 0, rotateY: 0 },
      { duration: 0.5, stiffness: 100, damping: 500 },
    )
  }

  return (
    <motion.div
      style={{
        display: 'flex',
        placeItems: 'center',
        placeContent: 'center',
        width: '100%',
        perspective: '50rem',
      }}
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        ref={scope}
        style={{
          rotateX: rotateX,
          rotateY: rotateY,
          width: '100%',
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}
export default AnimatedCard
