export default movie => {
  return `${process.env.REACT_APP_BACKEND_URL_IMAGES}${movie?.backdrop_path}`
}