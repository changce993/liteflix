import { Text } from 'components/atoms';
import styled from 'styled-components';

export const Wrapper = styled.div`
  border: 1px dashed ${props => props.theme.colors[props.hasFile ? "transparent" : "white"]};
  /* width: 600px; */
  padding: 0 2rem;
  max-width: 100%;
  aspect-ratio: 6/1;
  position: relative;
  display: flex;
  flex-direction: ${props => props.hasFile ? "column" : "row"};
  align-items: center;
  justify-content: center;
  gap: 1rem;
`

export const Input = styled.input`
  opacity: 0;
  background-color: #fff;
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

export const Span = styled(Text)`
  display: none;

  ${props => props.theme.respond.tablet}{
    display: block;
  }
`

Input.defaultProps = {
  type: "file"
}

Span.defaultProps = {
  as: "span"
}