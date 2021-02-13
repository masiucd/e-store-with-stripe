import React from "react"
import GlobalStyles from "@components/styles/global-styles"
import styled from "@emotion/styled"
import { Header } from "./header"
import { Footer } from "./footer"

const Main = styled.main`
  max-width: var(--app-width);
  margin: 0 auto;
  min-height: 80vh;
  /* height: 100%; */
`

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  )
}
export default Layout
