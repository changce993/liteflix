import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: max(2rem, min(5rem, 5vw));
  display: flex;
  flex-direction: column;
  gap: .5rem;

  ${props => props.theme.respond.desktop} {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 100;
  }

  ${props => props.theme.respond.wide} {
    top: 2rem;
  }
`

export const List = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  place-items: center;
  gap: 1.25rem;

  ${props => props.theme.respond.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${props => props.theme.respond.desktop} {
    grid-template-columns: repeat(1, 1fr);
  }
`