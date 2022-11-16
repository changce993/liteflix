import { useContext, useEffect, useState } from "react"
import movieContext from "context/movie/context"
import { Wrapper, Cover, Group, Title } from "./styled"
import { Button, SplitText, Text } from "components/atoms"
import { getImage, getRandomArbitrary } from "utils"
import { fromLiteflixx, image, splitText } from "./animations"
import { motion } from "framer-motion"
import { ReactComponent as More } from "assets/icons/more.svg"
import { ReactComponent as Play } from "assets/icons/simple_play.svg"

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
      <Cover src={getImage(movie)} variants={image} initial="initial" animate="animate" />
      <div style={{ overflow: "hidden" }}>
        <Text
          as={motion.p}
          size="md"
          variants={fromLiteflixx}
          initial="initial"
          animate="animate"
        >
          ORIGINAL DE LITEFLIX
        </Text>
      </div>
      <Title>
        <SplitText
          variants={splitText.variants}
          initial={splitText.initial}
          animate={splitText.animate}
        >
          {movie?.title}
        </SplitText>
      </Title>

      <Group>
        <Button custom={0}><Play/> <span>Reproducir</span></Button>
        <Button custom={1} variant="secondary"><More/>Mi lista</Button>
      </Group>
    </Wrapper>
  )
}
 
export default Hero