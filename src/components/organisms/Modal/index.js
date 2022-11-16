import { useState, useContext, useEffect } from "react"
import { Button, Input, Text } from "components/atoms"
import { Loadfile } from "components/molecules"
import modalContext from "context/modal/context"
import movieContext from "context/movie/context"
import { Layout, Wrapper, Close, Error } from "./styled"
import { colors } from "theme/values"
import { allowedTypes } from "utils"

const Modal = () => {
  const { show, toggleModal } = useContext(modalContext)
  const { getMyMovies, uploadMovie } = useContext(movieContext)

  const [ successScreen, setSuccessScreen ] = useState(false)
  const [ loaded, setLoaded ] = useState(0)
  const [ title, setTitle ] = useState("")
  const [ file, setFile ] = useState(null)
  const [ error, setError ] = useState(false)

  const isLoaded = loaded === 100
  const isDisabled = (!title || !file) || !isLoaded || error

  useEffect(() => {
    getMyMovies()
    // eslint-disable-next-line
  }, [])

  const handleNext = () => {
    setSuccessScreen(true)
    const currentFile = file.target.files[0]

    if(title && file) {  
      let reader = new FileReader()

      reader.onloadend = () => {
        const movie = { title, file: reader.result }
        uploadMovie(movie)
      }

      reader.readAsDataURL(currentFile)
    }
  }

  const handleChangeFile = e => {
    const currentFile = e.target.files[0]

    if(allowedTypes(currentFile.type)) {
      setError(true)
    } else {
      setError(false)
      setFile(e)
    }
  }

  const handleCancel = () => {
    toggleModal()
    setFile(null)
    setTitle("")
    setSuccessScreen(false)
    setLoaded(0)
    setError(false)
  }

  return (
    <Layout openModal={show}>
      <Wrapper openModal={show}>
        <Close onClick={handleCancel}/>
        <Text color={colors.primary}>Agregar película</Text>

        <Loadfile
          name="file"
          onChange={handleChangeFile}
          successScreen={successScreen}
          file={file}
          handleCancel={handleCancel}
          loaded={loaded}
          isLoaded={isLoaded}
          setLoaded={setLoaded}
        />

        {error && (
          <Error>
            <span>Formato invalido, sube una portada para tu pelicula</span>
            <span>(png, jpeg, jpg, heic)</span>
          </Error>
        )}

        {!successScreen && (
          <>
            <label className="hidden" htmlFor="title">title</label>
            <Input
              id="title" 
              placeholder="título"
              name="title"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
          </>
        )}

        <Button
          disable={isDisabled ? "true" : null}
          confirm={!isDisabled ? "true" : null}
          onClick={successScreen ? handleCancel : !isDisabled ? handleNext : null}
        >
          {successScreen ? "ir a home" : "subir película"}
        </Button>
      </Wrapper>
    </Layout>
   )
}

export default Modal