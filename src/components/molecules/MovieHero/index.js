import { useContext, useEffect, useState } from "react"
import movieContext from "context/movie/context"
import { Wrapper, Cover, Group, Title } from "./styled"
import { Button, Text } from "components/atoms"
import { getImage, getRandomArbitrary } from "utils"

const Hero = () => {
  const { movies, getFeatured } = useContext(movieContext)
  const [ current, setCurrent ] = useState(0)
  const movie = movies?.results[current]
  
  useEffect(() => {
    getFeatured()
    setCurrent(getRandomArbitrary(20))
    // eslint-disable-next-line
  }, [])

  return (
    <Wrapper>
      <Cover src={getImage(movie)}/>
      <Text size="md">ORIGINAL DE LITEFLIX</Text>
      <Title>{movie?.title}</Title>

      <Group>
        <Button>Reproducir</Button>
        <Button variant="secondary">Mi lista</Button>
      </Group>
    </Wrapper>
  )
}
 
export default Hero