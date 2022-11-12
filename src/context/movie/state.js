import { useReducer } from 'react'
import MoviesContext from './context'
import moviesReducer from './reducer'
import { SET_FEATURED, SET_POPULAR, GET_MY_MOVIES, UPLOAD_MOVIES, SET_SHOW_LIST } from 'types/movie'
import clientAxios, { getUrl } from 'config/axios'
import { listType } from 'utils/listType'

const MoviesState = ({ children }) => {

  const initialState = {
    movies: null,
    popular: null,
    myMovies: [],
    showList: listType.popular
  }

  const [ state, dispatch ] = useReducer(moviesReducer, initialState)

  const getFeatured = async () => {
    try {
      const response = await clientAxios(getUrl.featured)

      dispatch({
        type: SET_FEATURED,
        payload: response.data
      })
    } catch (error) {
      console.log(error)
    }
  }

  const getPopular = async () => {
    try {
      const response = await clientAxios(getUrl.popular)

      dispatch({
        type: SET_POPULAR,
        payload: response.data.results
      })
    } catch (error) {
      console.log(error)
    }
  }

  const getMyMovies = () => {
    const movies = localStorage.getItem("myMovies")

    dispatch({
      type: GET_MY_MOVIES,
      payload: JSON.parse(movies) || []
    })
  }

  const uploadMovie = movie => {
    dispatch({
      type: UPLOAD_MOVIES,
      payload: movie
    })
  }

  const setShowList = showList => {
    dispatch({
      type: SET_SHOW_LIST,
      payload: showList
    })
  }

  const { movies, popular, myMovies, showList } = state

  return (
    <MoviesContext.Provider value={{
      movies,
      popular,
      myMovies,
      showList,
      getFeatured,
      getPopular,
      getMyMovies,
      uploadMovie,
      setShowList
    }}>
      {children}
    </MoviesContext.Provider>
  )
}

export default MoviesState