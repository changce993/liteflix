import styled from 'styled-components';
import { ReactComponent as Cross } from "assets/icons/cross.svg"

export const Layout = styled.div`
  position: fixed;
  z-index: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.gray50};
  backdrop-filter: blur(4px);
  pointer-events: ${props => props.openModal ? "initial" : "none"};
  opacity: ${props => props.openModal ? "1" : "0"};
  transform: scale(${props => props.openModal ? "1.1" : "1"});
  transition: ${props => props.theme.transition.timming};
  z-index: 10000;
`

export const Wrapper = styled.div`
  width: fit-content;
  /* max-width: calc(100% - 2rem); */
  position: relative;
  padding: 2rem;
  background-color: ${props => props.theme.colors.darkGray};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;

  ${props => props.theme.respond.desktop} {
    padding: 3rem;
  }
`

export const Close = styled(Cross)`
  position: absolute;
  top: 2rem;
  right: 2rem;
  cursor: pointer;
`