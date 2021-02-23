import { css } from "@emotion/css"
import styled from "@emotion/styled"
import { FC } from "react"

interface BoxProps {
  name: string
  url: string
  image: string
}

interface StyledBoxProps {
  image: string
}
const StyledBox = styled.div<StyledBoxProps>`
  padding: 2rem 1rem;
  box-shadow: var(--sh-lg);
  border-radius: var(--border-radius-m);
  background-image: ${({ image }) => `url(${image}.jpg)`};
  background-position: center;
  background-attachment: fixed;
  background-repeat: none;
  height: 6rem;
  margin-bottom: 1rem;
  background-size: cover;
  position: relative;
  &:after {
    content: "";
    background-color: rgba(5, 5, 5, 0.4);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

const linkStyles = css`
  p {
    color: var(--background);
    z-index: 1;
    position: relative;
    font-size: var(--h3);
  }
`

const Box: FC<BoxProps> = ({ name, url, image }) => {
  return (
    <StyledBox image={image}>
      <a href={url} target="_blank" rel="noreferrer" className={linkStyles}>
        <p>{name}</p>
      </a>
    </StyledBox>
  )
}
export default Box
