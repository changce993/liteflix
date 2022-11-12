import styled from 'styled-components';

export const Wrapper = styled.div`
  ${props => props}
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  opacity: ${props => props.opacity || .6};
  transition: ${props => props.theme.transition.timming};

  :hover {
    opacity: 1;
  }
`