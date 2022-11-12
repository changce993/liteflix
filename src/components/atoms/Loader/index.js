import styled from 'styled-components';

export default styled.div`
  width: 600px;
  max-width: 100%;
  height: 4px;
  background-color: ${props => props.theme.colors.disable};
  position: relative;

  ::after {
    position: absolute;
    content: "";
    background-color: ${props => props.theme.colors.primary};
    width: 100%;
    height: 8px;
    top: -2px;
    left: 0;
    transform: scaleX(${props => props.loaded / 100 || 0});
    transform-origin: left center;
    transition: ${props => props.theme.transition.timming};
  }
`