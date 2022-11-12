import { useState, useContext, useEffect } from "react"
import { Button, Input, Text } from "components/atoms"
import { Loadfile } from "components/molecules"
import modalContext from "context/modal/context"
import movieContext from "context/movie/context"
import { Layout, Wrapper, Close } from "./styled"
import { colors } from "theme/values"

const Modal = () => {
  const { show, toggleModal } = useContext(modalContext)
  const { getMyMovies, uploadMovie } = useContext(movieContext)

  const [ successScreen, setSuccessScreen ] = useState(false)
  const [ loaded, setLoaded ] = useState(0)
  const [ title, setTitle ] = useState("")
  const [ file, setFile ] = useState(null)

  const isLoaded = loaded === 100
  const isDisabled = (!title || !file) || !isLoaded

  useEffect(() => {
    getMyMovies()
    // eslint-disable-next-line
  }, [])

  const handleNext = () => {
    setSuccessScreen(true)

    if(title && file) {  
      let reader = new FileReader()

      reader.onloadend = () => {
        const movie = { title, file: reader.result }
        uploadMovie(movie)
      }

      reader.readAsDataURL(file.target.files[0])
    }
  }

  const handleCancel = () => {
    toggleModal()
    setFile(null)
    setTitle("")
    setSuccessScreen(false)
    setLoaded(0)
  }

  return (
    <Layout openModal={show}>
      <Wrapper openModal={show}>
        <Close onClick={handleCancel}/>
        <Text color={colors.primary}>Agregar película</Text>

        <Loadfile
          name="file"
          onChange={setFile}
          successScreen={successScreen}
          file={file}
          handleCancel={handleCancel}
          loaded={loaded}
          isLoaded={isLoaded}
          setLoaded={setLoaded}
        />

        {!successScreen && (
          <Input
            placeholder="título"
            name="title"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        )}

        <Button
          disable={isDisabled}
          confirm={!isDisabled}
          onClick={successScreen ? handleCancel : !isDisabled ? handleNext : null}
        >
          {successScreen ? "ir a home" : "subir película"}
        </Button>
      </Wrapper>
    </Layout>
   )
}

export default Modal