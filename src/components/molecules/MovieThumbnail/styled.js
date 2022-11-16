import styled from 'styled-components';
import { ReactComponent as Play } from "assets/icons/play.svg"
import { motion } from 'framer-motion';

export const Wrapper = styled(motion.div)`
  width: 250px;
  max-width: 100%;
  aspect-ratio: 327/215;
  background-image: url(${props => props.bgimg});
  background-position: center;
  background-size: 130%;
  background-repeat: no-repeat;
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 1rem;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
  transition: background-size ${props => props.theme.transition.timming};

  ::after {
    content: "";
    width: 100%;
    height: 50%;
    position: absolute;
    left: 0;
    bottom: 0;
    background-image: linear-gradient(0, rgba(0,0,0,.6), rgba(0,0,0,.0));
  }

  :hover {
    background-size: 120%;
  }
`

export const Player = styled(Play)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`