export default movie => {
  return movie?.backdrop_path === null || movie?.backdrop_path === undefined
    ? "https://res.cloudinary.com/dxdboxbyb/image/upload/v1620052094/ayi6tvyiedrlmjiim6yn.png"
    : `${process.env.REACT_APP_BACKEND_URL_IMAGES}${movie?.backdrop_path}`
}