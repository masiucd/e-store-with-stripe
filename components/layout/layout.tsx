import React, { FC } from "react"
import GlobalStyles from "@components/styles/global-styles"
import styled from "@emotion/styled"
import { Header } from "./header"
import { Footer } from "./footer"
import Head from "next/head"

const Main = styled.main`
  max-width: var(--app-width);
  margin: 0 auto;
  min-height: 80vh;
`

interface LayoutProps {
  metaConfig?: Record<string, string>
}

const Layout: FC<LayoutProps> = ({ children, metaConfig }) => {
  return (
    <>
      <GlobalStyles />
      <Head>
        <title>{metaConfig ? metaConfig.title : "Runner addict"}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          property="og:title"
          content={metaConfig ? metaConfig.titleContent : "Runner Addict"}
          key="title"
        />
      </Head>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  )
}
export default Layout
