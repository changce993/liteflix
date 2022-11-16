import { Text } from "components/atoms";
import { Wrapper, Player } from "./styled"

const Thumbnail = ({ cover, title, variants, custom }) => {
  return (
    <Wrapper bgimg={cover} variants={variants} custom={custom}>
      <Player/>
      <Text zIndex="1" textAlign="center">{title}</Text>
    </Wrapper>
  );
}
 
export default Thumbnail;