import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Wrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: ${props => props.theme.colors.darkGray};
  z-index: 100000;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Span = styled(motion.span)``