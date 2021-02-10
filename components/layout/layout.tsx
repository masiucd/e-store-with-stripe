import React from "react"
import GlobalStyles from "@components/styles/global-styles"
import styled from "@emotion/styled"
import { Header } from "./header"

const Main = styled.main`
  max-width: var(--app-width);
  border: 2px solid red;
  margin: 0 auto;
`

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Main>{children}</Main>
    </>
  )
}
export default Layout
