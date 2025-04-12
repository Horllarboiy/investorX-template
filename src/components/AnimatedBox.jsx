import React from 'react'
import { motion } from 'motion/react'
import {useInView} from 'react-intersection-observer'

const AnimatedBox = ({ children }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold:0.1
    })
  return (
      <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView?{ opacity: 1, y: 0 }: {}}
          transition={{duration:0.6}}
      >
          {children}
      </motion.div>
  )
}

export default AnimatedBox