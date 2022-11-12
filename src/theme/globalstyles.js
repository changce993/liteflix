import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    font-family: ${props => props.theme.fontFamily.primary};
    letter-spacing: ${props => props.theme.letterSpacing.primary};
    outline: none;
    text-decoration: none;
    list-style: none;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    overscroll-behavior: none;
    user-select: none;
    overflow-x: hidden;
    background-color: ${props => props.theme.colors.gray};
    background-color: black;

    &::-webkit-scrollbar {
      display: none;
    }

    ${props => props.theme.respond.desktop} {
      overflow: hidden;
    }
  }
`;