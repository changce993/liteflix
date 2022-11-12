import { SET_FEATURED, SET_POPULAR, GET_MY_MOVIES, UPLOAD_MOVIES, SET_SHOW_LIST } from 'types/movie';
import { getImage } from 'utils';

const moviesReducer = (state, action) => {
  switch(action.type){
    case SET_FEATURED:
      return {
        ...state,
        movies: action.payload
      }
    case SET_POPULAR:
      const dsa = action.payload.map(movie => ({
        title: movie?.title,
        file: getImage(movie)
      }))
      return {
        ...state,
        popular: dsa
      }
    case GET_MY_MOVIES:
      return {
        ...state,
        myMovies: action.payload
      }
    case UPLOAD_MOVIES:
      localStorage.setItem("myMovies", JSON.stringify([...state.myMovies, action.payload]))
      return {
        ...state,
        myMovies: [...state.myMovies, action.payload]
      }
    case SET_SHOW_LIST:
      return {
        ...state,
        showList: action.payload
      }
    default:
      return state
  }
};

export default moviesReducer;