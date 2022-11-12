export const colors = {
  disable: "#868686",
  gray50: "rgba(36,36,36,0.5)",
  gray: "#313131",
  darkGray: "#242424",
  white: "#FFFFFF",
  primary: "#64EEBC",
  success: "#64EEBC",
  error: "#FF0000",
  transparent: "transparent",
}

export const fontSize = {
  xl: "max(76px, min(120px, 10vw))",
  lg: "max(16px, min(22px, 9vw))",
  md: "20px",
  sm: "max(16px, min(18px, 7vw))",
  xs: "16px",
}

export const fontFamily = {
  primary: "Bebas Neue"
}

export const fontWeight = {
  regular: "400",
  bold: "700",
}

export const letterSpacing = {
  primary: "4px"
}

export const spacing = {
  safearea: "0 max(1.5rem, min(2rem, 10vw))",
  default: "max(1.5rem, min(5rem, 10vw))",
}

export const respond = {
  tablet: "@media(min-width: 768px)",
  desktop: "@media(min-width: 1024px)",
  wide: "@media(min-width: 1660px)",
}

export const transition = {
  timming: ".3s",
  easing: ""
}

const theme = {
  colors,
  fontSize,
  fontFamily,
  fontWeight,
  letterSpacing,
  spacing,
  respond,
  transition ,
}

export default theme