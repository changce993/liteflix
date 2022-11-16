import { Text } from "components/atoms";
import { Wrapper, Options, Option } from "./styled"
import { ReactComponent as Check } from "assets/icons/check.svg"
import { ReactComponent as Chevron } from "assets/icons/chevron.svg"
import { useContext, useState } from "react";
import movieContext from "context/movie/context"
import { listType } from 'utils'

const Dropdown = () => {
  const options =[ listType.popular, listType.myMovies ]

  const { showList, setShowList } = useContext(movieContext)

  const [ isOpen, setIsOpen ] = useState(false)

  return (
    <Wrapper>
      <Wrapper onClick={() => setIsOpen((prev) => !prev)}>
        <Text opacity=".6" size="sm">VER:</Text>
        <Text size="sm">{showList}</Text>
        <Chevron/>
        <label className="hidden" htmlFor="dropdown">dropdown</label>
        <input id="dropdown" onBlur={() => setTimeout(() => setIsOpen(false), 100)}/>
      </Wrapper>

      <Options isOpen={isOpen}>
        {options.map((opt, idx) => (
          <Option
            key={idx}
            onClick={() => setShowList(opt)}
            opacity={opt !== showList ? .5 : null}
          >
            {opt} {opt === showList && <Check/>}
          </Option>
        ))}
      </Options>
    </Wrapper>
  );
}
 
export default Dropdown;