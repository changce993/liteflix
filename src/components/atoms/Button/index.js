import { motion } from 'framer-motion';
import styled from 'styled-components';

const Button = styled(motion.button)`
  width: 248px;
  max-width: 100%;
  height: 56px;
  border: 1px solid ${({ variant, theme }) => theme.colors[variant === "secondary" ? "white" : "transparent"]};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  color: ${props => props.theme.colors[(props.disable || props.confirm) ? "black" : "white"]};
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  cursor: ${props => props.disable ? "initial" : "pointer"};
  backdrop-filter: blur(4px);

  background-color: ${({ theme, disable, confirm, variant }) => (
    theme.colors[
      disable
        ? "disable"
        : confirm
          ? "white"
          : variant === "secondary"
            ? "gray50"
            : "gray"
    ]
  )};
`

Button.defaultProps = {
  initial: { clipPath: "polygon(0 0, 0% 0, 0% 100%, 0 100%)" },
  animate: i => ({
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    transition: {
      delay: 2 + (i * 0.18),
      duration: .5,
      type: "spring",
      damping: 100,
      stiffness: 400
    }
  })
}

export default Button