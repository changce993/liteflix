import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Wrapper = styled(motion.header)`
  position: fixed;
  z-index: 1000;
  width: 100%;
  height: 5rem;
  padding: ${props => props.theme.spacing.safearea};
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Group = styled.div`
  ${props => props}
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`

export const Left = styled(Group)`
  z-index: 1000;

  ${props => props.theme.respond.tablet}{
    z-index: 0;
  }
`

export const Right = styled(Group)`
  justify-content: space-between;
  position: initial;
  top: 1.25rem;
  right: 2rem;
  width: ${props => props.isOpen ? "375px" : "fit-content"};
  width: fit-content;
  z-index: 1000;
  transition: ${props => props.theme.transition.timming};
  max-width: calc(100vw - 4rem);

  ${props => props.theme.respond.tablet} {
    width: ${props => props.isOpen ? "640px" : "160px"};
    position: ${props => props.isOpen ? "fixed" : "initial"};
  }
`

export const NavigationLayout = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: ${props => props.theme.colors.gray50};
  backdrop-filter: blur(4px);
  pointer-events: ${props => props.isOpen ? "initial" : "none"};
  opacity: ${props => props.isOpen ? "1" : "0"};
  transition: ${props => props.theme.transition.timming};
  z-index: 100;
`

export const NavigationContent = styled.div`
  width: 700px;
  max-width: 100%;
  height: 100%;
  margin-left: auto;
  background-color: ${props => props.theme.colors.darkGray};
  padding: 10rem 2rem 5rem;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  overflow-y: scroll;
  transition: ${props => props.theme.transition.timming};
  transform: translateX(${props => props.isOpen ? "0px" : "700px"});
`

export const HideMobile = styled.div`
  display: none;

  ${props => props.theme.respond.tablet} {
    display: block;
  }
`

export const ShowMobile = styled.div`
    display: block;
    z-index: 1000;

  ${props => props.theme.respond.tablet} {
    display: none;
  }
`