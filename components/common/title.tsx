import { css, cx } from "@emotion/css"
import { above } from "@utils/media-query"
import React from "react"

interface TitleProps {
  className?: string
  title: string
  subTitle?: string
}

const titleStyles = css`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;

  h1 {
    position: relative;
    font-size: var(--h3);
    @media ${above.tabletM} {
      font-size: var(--h1);
    }
    &:after {
      content: "";
      position: absolute;
      bottom: 18px;
      left: 0;
      height: 1rem;
      background-color: var(--highlight-shadow);
      width: 80%;
      transition: var(--transition-s);
      transform: rotate(-2deg) skewX(20deg);
    }
  }
`

const Title: React.FC<TitleProps> = ({ className, title, subTitle, children }) => {
  return (
    <section className={cx(titleStyles, className, "main-title")}>
      <h1>{title}</h1>
      {Boolean(subTitle) && <h3>{subTitle}</h3>}
      {children}
    </section>
  )
}
export default Title
