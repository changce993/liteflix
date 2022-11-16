import styled from 'styled-components';

export default styled.p`
  ${props => props}
  font-size: ${props => props.theme.fontSize[props.size || "xs"]};
  color: ${props => props.theme.colors[props.outline ? "transparent" : props.color || "white"]};
  font-weight: ${props => props.theme.fontWeight[props.weight || "regular"]};
  -webkit-text-stroke: ${props => props.outline && "2px black"};
  line-height: ${props => props.height || "1em"};
  font-family: ${props => props.theme.fontFamily.primary};
  letter-spacing: ${props => props.theme.letterSpacing.primary};
`