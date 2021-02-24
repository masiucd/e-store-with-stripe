import Fade from "@components/animated/fade"
import { css } from "@emotion/css"
import styled from "@emotion/styled"
import { useToggle } from "@hooks/toggle"
import { motion } from "framer-motion"
import { FC } from "react"

interface BoxProps {
  name: string
  url: string
  image: string
}

interface StyledBoxProps {
  image: string
}

const wrapperStyles = css`
  padding: 1rem 0.5rem 0 0.5rem;
`

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

  a {
    p {
      color: var(--p);
      padding: 0.5rem;
      background-color: var(--background);
      display: inline-block;
      border-radius: var(--border-radius-m);
    }
    span {
      color: var(--red);
      position: relative;
      &:after {
        content: "";
        position: absolute;
        bottom: -4px;
        left: 0;
        width: 80%;
        background-color: var(--red-shadow);
        height: 1.1rem;
        transform: rotate(-4deg);
      }
    }
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

const ContactButton = styled.button`
  font-size: var(--h2);
  padding: 2.5rem 1rem;
  strong {
    text-transform: capitalize;
    position: relative;
    &:after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      background-color: var(--red-shadow);
      height: 1.1rem;
      transition: var(--transition-s);
    }
    &:hover {
      &:after {
        width: 100%;
      }
    }
  }
`

const CloseButton = styled.button`
  position: absolute;
  z-index: 3;
  bottom: -1.5rem;
  right: -0.3rem;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: var(--background);
  border: 2px solid var(--red);
  &:hover {
    background: var(--red);
    color: var(--background);
  }
`

const Box: FC<BoxProps> = ({ name, url, image }) => {
  const { on, onToFalse, onToTrue } = useToggle()

  return (
    <motion.div className={wrapperStyles}>
      {!on && (
        <ContactButton className="btn-reset" onClick={onToTrue}>
          <strong>{name}</strong>
        </ContactButton>
      )}
      <Fade
        isAnimated={on}
        options={{ initial: { height: 0 }, exit: { height: 0 }, animate: { height: "auto" } }}
        exitBeforeEnter
      >
        <StyledBox image={image}>
          <a href={url} target="_blank" rel="noreferrer" className={linkStyles}>
            <motion.p whileHover={{ scale: 1.1, x: 20 }}>
              my <span>{name}</span> profile
            </motion.p>
          </a>
          <CloseButton className="btn-reset" onClick={onToFalse}>
            &#x02717;
          </CloseButton>
        </StyledBox>
      </Fade>
    </motion.div>
  )
}
export default Box
