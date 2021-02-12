import { cx } from "@emotion/css"
import { AnimatePresence, motion } from "framer-motion"
import React from "react"

// Animate components on render and when we want to un render our component
interface FadeProps {
  isAnimated: boolean
  className?: string
  exitBeforeEnter?: boolean
  options?: {
    initial?: Record<string, number | string | Record<string, string | number>>
    animate?: Record<string, number | string | Record<string, string | number>>
    exit?: Record<string, number | string | Record<string, string | number>>
    transition?: Record<string, number | string>
  }
}

const Fade: React.FC<FadeProps> = ({
  children,
  isAnimated,
  options,
  className,
  exitBeforeEnter,
}) => {
  return (
    <AnimatePresence exitBeforeEnter={exitBeforeEnter ? exitBeforeEnter : false}>
      {isAnimated && (
        <motion.section
          layout
          className={cx(className, "fade")}
          initial={{ opacity: 0, ...options?.initial }}
          animate={{ opacity: 1, ...options?.animate }}
          exit={{ opacity: 0, ...options?.exit }}
          transition={{ ...options?.transition }}
        >
          {children}
        </motion.section>
      )}
    </AnimatePresence>
  )
}
export default Fade
