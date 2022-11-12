import { useEffect, useState } from "react"

function useWindowSize() {
  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
    mobile: window.innerWidth < 600,
    tablet: window.innerWidth > 600 && window.innerWidth < 990,
    desktop: window.innerWidth > 990 && window.innerWidth < 1440,
  }

  const [ windowSize, setWindowSize ] = useState(sizes)

  useEffect(() => {
    function handleResize() {
      setWindowSize(sizes)
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return windowSize
}

export default useWindowSize