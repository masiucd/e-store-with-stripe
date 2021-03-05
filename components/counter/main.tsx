import styled from "@emotion/styled"
import { useState } from "react"

const CountWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const CountButton = styled.button`
  padding: 0.5rem;
  width: 8rem;
  font-size: var(--h4);
  box-shadow: var(--sh-lg);
  border: none;
  border-radius: var(--border-radius-m);
  color: var(--white);
  transition: var(--transition-s);
  outline: 0;

  &:nth-child(1) {
    background-color: var(--red);
  }
  &:nth-child(3) {
    background-color: var(--purple);
  }
`
const Count = styled.strong`
  font-size: var(--h1);
  padding: 1rem;
`

const Counter = (): JSX.Element => {
  const [count, setCount] = useState(() => 0)
  return (
    <CountWrapper>
      <CountButton onClick={() => setCount((p) => p - 1)}>-</CountButton>
      <Count>{count}</Count>
      <CountButton onClick={() => setCount((p) => p + 1)}>+</CountButton>
    </CountWrapper>
  )
}

export default Counter
