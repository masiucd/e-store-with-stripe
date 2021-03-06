import { css } from "@emotion/css"
import styled from "@emotion/styled"

export const Button = styled.button`
  width: 12rem;
  font-size: 1.2rem;
  border-radius: var(--border-radius-m);
  transition: var(--transition-s);
  background-color: var(--btn);
  color: var(--btn-text);
  border: none;
  height: 2.45rem;
  cursor: pointer;
  outline: none;
  box-shadow: var(--sh-lg);
  margin-bottom: 0.5rem;
  &:hover {
    background-color: var(--headline);
    box-shadow: var(--sh-xl);
  }
`

export const resetButtonStyles = css`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  transition: var(--transition-s);
  outline: none;
`
