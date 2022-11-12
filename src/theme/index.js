import values from "./values"
import Globalstyles from "./globalstyles"
import { ThemeProvider } from "styled-components"

const Theme = ({ children }) => {
  return (
    <ThemeProvider theme={values}>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet"/>
      <Globalstyles/>
      {children}
    </ThemeProvider>
  )
}

export default Theme