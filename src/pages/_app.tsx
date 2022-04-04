import { AppProps } from "next/app"
import Head from "next/head"
import { useEffect } from "react"

import GlobalStyle from "styles/global"

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("sw.js").then(
        function () {
          console.log("Service Worker: Registered (Pages)")
        },
        function (error) {
          console.log("Service worker registration failed:", error)
        }
      )
    } else {
      console.log("Service workers are not supported.")
    }
  })
  return (
    <>
      <Head>
        <title>React Avançado - Boilerplate</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="React Avançado - Boilerplate" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#06092b" />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default App
