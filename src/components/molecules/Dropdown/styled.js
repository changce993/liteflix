import { Text } from 'components/atoms'
import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  max-width: 327px;
  height: 3.5rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  gap: .25rem;
  cursor: pointer;
  margin: 0 auto;

  input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
  }
`

export const Options = styled.div`
  position: absolute;
  top: 4rem;
  background-color: ${props => props.theme.colors.darkGray};
  width: 100%;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  cursor: initial;
  opacity: ${props => props.isOpen ? 1 : 0};
  pointer-events: ${props => props.isOpen ? "initial" : "none"};
  transition: ${props => props.theme.transition.timming};

  ::after {
    content: "";
    background-color: ${props => props.theme.colors.darkGray};
    width: 16px;
    height: 16px;
    position: absolute;
    top: -8px;
    right: 2rem;
    transform: rotate(45deg);
  }
`

export const Option = styled(Text)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 1.5rem;
  transition: ${props => props.theme.transition.timming};
  cursor: pointer;

  :hover {
    opacity: .8;
  }
`