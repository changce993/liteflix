import React, { useContext } from 'react';
import { Text } from "components/atoms";
import { ReactComponent as More } from "assets/icons/more.svg"
import modalContext from "context/modal/context"
import { Wrapper } from "./styled"

const AddMovie = ({ size, ...props }) => {
  const { toggleModal } = useContext(modalContext);

  return ( 
    <Wrapper onClick={toggleModal} {...props}>
      <More/>
      <Text size={size}>agregar película</Text>
    </Wrapper>
   );
}
 
export default AddMovie;