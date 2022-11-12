import styled from 'styled-components';

export default styled.input`
  height: 2rem;
  width: 248px;
  background-color: ${props => props.theme.colors.transparent};
  outline: none;
  border: none;
  text-align: center;
  color: ${props => props.theme.colors.white};
  border-bottom: 1px solid white;
`