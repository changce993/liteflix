import { useState } from "react"
import { Avatar, ButtonBurger, Logo, Text } from "components/atoms"
import { AddMovie } from "components/molecules"
import { Wrapper, Group, NavigationLayout, NavigationContent, Left, Right, HideMobile, ShowMobile } from "./styled"
import { ReactComponent as Bell } from "assets/icons/bell.svg"
import { ReactComponent as Cross } from "assets/icons/cross.svg"
import { container } from "./animations"

const Navbar = () => {
  const [ isOpen, setIsOpen ] = useState(false)
  const links = [ "INICIO", "SERIES", "PELICULAS", "AGREGADAS RECIENTEMENTE", "POPULARES", "MIS PELICULAS", "MI LISTA" ]
  const textProps = { size: "lg", opacity: .6 }

  const handleOpenMenu = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <Wrapper variants={container} initial="initial" animate="animate">
      <ShowMobile>
        <ButtonBurger
          as={isOpen && Cross}
          onClick={handleOpenMenu}
        />
      </ShowMobile>

      <Left>
        <Logo/>
        <HideMobile>
          <AddMovie/>
        </HideMobile>
      </Left>

      <Right isOpen={isOpen}>
        <HideMobile>
          <ButtonBurger
            as={isOpen && Cross}
            onClick={handleOpenMenu}
          />
        </HideMobile>

        <Group>
          <HideMobile>
            <Bell/>
          </HideMobile>
          <Avatar/>
        </Group>
      </Right>

      <NavigationLayout isOpen={isOpen}>
        <NavigationContent isOpen={isOpen}>
          {links.map(link => <Text {...textProps} key={link}>{link}</Text>)}
          <AddMovie size="lg" opacity={1} margin="2rem 0"/>
          <Text {...textProps}>CERRAR SESION</Text>
        </NavigationContent>
      </NavigationLayout>
    </Wrapper>
  )
}
 
export default Navbar