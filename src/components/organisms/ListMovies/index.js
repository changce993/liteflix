import { useContext, useEffect } from "react"
import movieContext from "context/movie/context"
import { Dropdown, MovieThumbnail } from "components/molecules"
import { Wrapper, List } from "./styled"
import { listType } from "utils/listType"
import { getRandomArbitrary } from "utils"

const ListMovies = () => {
  const { showList, myMovies, popular, getPopular, getMyMovies } = useContext(movieContext)

  const isPopular = showList === listType.popular
  const movies = isPopular ? popular : myMovies
  const randomNuber = isPopular ? getRandomArbitrary(15) : myMovies.length - 4

  useEffect(() => {
    getPopular()
    getMyMovies()
    // eslint-disable-next-line
  }, [])

  return (
    <Wrapper>
      <Dropdown/>
      <List>
        {movies?.slice(randomNuber, randomNuber + 4).reverse().map((movie, idx) => (
          <MovieThumbnail
            cover={movie?.file}
            title={movie?.title}
            key={idx}
          />
        ))}
      </List>
    </Wrapper>
  )
}
 
export default ListMovies