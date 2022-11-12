import { Text } from "components/atoms";
import { Wrapper, Player } from "./styled"

const Thumbnail = ({ cover, title }) => {
  return (
    <Wrapper bgImg={cover}>
      <Player/>
      <Text zIndex="1" textAlign="center">{title}</Text>
    </Wrapper>
  );
}
 
export default Thumbnail;