import { css, cx } from "@emotion/css"
import React from "react"

interface TitleProps {
  className?: string
  title: string
  subTitle?: string
}

const titleStyles = css`
  display: flex;
  justify-content: center;
  h1 {
    position: relative;
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

const Title: React.FC<TitleProps> = ({ className, title, subTitle }) => {
  return (
    <section className={cx(titleStyles, className, "main-title")}>
      <h1>{title}</h1>
      {Boolean(subTitle) && <h3>{subTitle}</h3>}
    </section>
  )
}
export default Title
