import { Input, Span, Wrapper } from "./styled"
import { Text, Loader } from "components/atoms"
import { ReactComponent as Clip } from "assets/icons/clip.svg"
import { useEffect } from "react"

const Loadfile = ({ name, onChange, successScreen, file, handleCancel, loaded, setLoaded, isLoaded }) => {

  useEffect(() => {
    if(file) {
      setTimeout(() => { setLoaded(20) }, 1000)
      setTimeout(() => { setLoaded(32) }, 1700)
      setTimeout(() => { setLoaded(43) }, 2000)
      setTimeout(() => { setLoaded(49) }, 2300)
      setTimeout(() => { setLoaded(54) }, 3000)
      setTimeout(() => { setLoaded(62) }, 4000)
      setTimeout(() => { setLoaded(73) }, 5200)
      setTimeout(() => { setLoaded(81) }, 6100)
      setTimeout(() => { setLoaded(93) }, 6800)
      setTimeout(() => { setLoaded(100) }, 7200)
      // setTimeout(() => { setLoaded(100) }, 100)
    }
    // eslint-disable-next-line
  }, [file])

  return (
    <Wrapper hasFile={file}>
      {file ? (
        successScreen 
          ? (
            <>
              <Text size="lg">¡Felicitaciones!</Text>
              <Text size="md">Liteflix The Movie fue correctamente subida.</Text>
            </>
          )
          : (
            <>
              <Text alignSelf="flex-start" size="xs">CARGANDO {loaded}%</Text>
              <Loader loaded={loaded}/>
              <Text
                alignSelf="flex-end"
                color={isLoaded ? "primary" : null}
                onClick={!isLoaded ? handleCancel : null}
                size="sm"
              >
                {isLoaded ? "¡LISTO!" : "CANCELAR"}
              </Text>
            </>
          )
      ) : (
        <>
          <Input onChange={onChange} name={name} type="file" />
          <Clip/>
          <Text display="flex" gap=".5rem">Agregá un archivo <Span> o arrastralo y soltalo aquí</Span></Text>
        </>
      )}
    </Wrapper>
  )
}

export default Loadfile