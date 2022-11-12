import avatar from "assets/images/avatar.png"
import styled from 'styled-components';

const Avatar = styled.img`
  width: 40px;
  aspect-ratio: 1/1;
  border-radius: 50%;
  overflow: hidden;
`

Avatar.defaultProps = {
  src: avatar
}

export default Avatar