import { Text } from 'components/atoms';
import styled from 'styled-components';

export const Wrapper = styled.section`
  position: relative;
  top: 0;
  left: 0;
  height: 100vh;
  background-image: url(${props => props.bgImg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: max(1.5rem, min(5rem, 5vw));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  ${props => props.theme.respond.desktop} {
    align-items: flex-start;
    justify-content: flex-end;
  }
`

export const Cover = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(60%);
  z-index: -1;
`

export const Group = styled.div`
  display: flex;
  gap: max(1rem, min(2rem, 2vw));
  flex-direction: column;

  ${props => props.theme.respond.tablet} {
    flex-direction: row;
  }
`

export const Title = styled(Text)`
  color: ${props => props.theme.colors.primary};
  width: 800px;
  max-width: 100%;
  font-size: ${props => props.theme.fontSize.xl};
  text-align: center;
  z-index: 1;

  ${props => props.theme.respond.desktop} {
    text-align: left;
  }
`