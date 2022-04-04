import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    
    margin: 0;
    padding: 0;
    box-sizing: border-box;

  }

  html {
    font-size: 62.5%;
  }

  html, body, #__next {
    height: 100%;
  }

  body{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`

// later in your app

// <React.Fragment>
//   <GlobalStyle whiteColor />
//   <Navigation /> {/* example of other top-level stuff */}
// </React.Fragment>

export default GlobalStyle
