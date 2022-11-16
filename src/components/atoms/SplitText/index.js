import { AnimatePresence, motion } from 'framer-motion'

const SplitText = ({ children, ...rest }) => {
  let words = children?.split(' ')
  return (
    <AnimatePresence>
      {words?.map((word, i) => {
        return (
          <span
            key={children + i}
            style={{ display: 'inline-flex', overflow: 'hidden' }}
          >
            <motion.span
              {...rest}
              style={{ display: 'inline-block', willChange: 'transform' }}
              custom={i}
            >
              {word + (i !== words.length - 1 ? '\u00A0' : '')}
            </motion.span>
          </span>
        )
      })}
    </AnimatePresence>
  )
}

export default SplitText