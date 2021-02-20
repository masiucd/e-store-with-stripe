import styled from "@emotion/styled"
import { motion } from "framer-motion"

const StyledSpinner = styled(motion.div)`
  position: absolute;
  width: 30rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  div {
    height: 1rem;
    width: 14rem;
    background-color: var(--grey);
    /* position: absolute; */
    display: flex;
    flex-flow: column wrap;
    margin-bottom: 0.5rem;
    &:nth-of-type(1) {
      background-color: var(--warning);
    }
    &:nth-of-type(2) {
      background-color: var(--highlight);
      width: 8rem;
    }
    &:nth-of-type(3) {
      background-color: var(--dark-m);
      width: 16rem;
    }
  }
`

export const Spinner = (): JSX.Element => {
  return (
    <StyledSpinner layout>
      <motion.div
        initial={{ x: 0, scale: 1.1, borderRadius: ".1rem" }}
        animate={{
          x: 230,
          scale: 1.3,
          borderRadius: "2rem",
          backgroundColor: ["#6146ea", "#fff322", "#e45858"],
        }}
        transition={{ ease: "easeInOut", duration: 0.8, flip: Infinity, type: { type: "spring" } }}
      />
      <motion.div
        initial={{ x: -60, scale: 0.9, borderRadius: ".6rem" }}
        animate={{ x: 310, scale: 1.125, borderRadius: "1rem" }}
        transition={{ ease: "easeInOut", duration: 0.5, flip: Infinity, type: { type: "spring" } }}
      />
      <motion.div
        initial={{ x: -20, scale: 1.2, borderRadius: ".6rem" }}
        animate={{ x: 230, scale: 1.5, borderRadius: "1.5rem" }}
        transition={{ ease: "easeInOut", duration: 0.65, flip: Infinity, type: { type: "spring" } }}
      />
    </StyledSpinner>
  )
}
