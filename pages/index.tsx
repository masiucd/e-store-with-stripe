import TitleWrapper from "@components/common/title"
import { Button } from "@components/styles/button"
import { css, cx } from "@emotion/css"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"

const wrapperStyles = css`
  padding-bottom: 2.5rem; /* Footer height */
`

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Runner addict</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={cx(wrapperStyles, "section home-section-wrapper")}>
        <TitleWrapper title="Welcome to" subTitle="Runners addict">
          <Link href="/products">
            <a>
              <Button> Products </Button>
            </a>
          </Link>
        </TitleWrapper>
        <Image src="/jogging.svg" width={1000} height={1000} />
      </section>
    </>
  )
}
