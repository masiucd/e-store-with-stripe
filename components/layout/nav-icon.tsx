import styled from "@emotion/styled"
import React from "react"

interface WrapperProps {
  isOpenMenu: boolean
}

const Wrapper = styled.button<WrapperProps>`
  ${({ isOpenMenu }) =>
    isOpenMenu ? "position:fixed; top: 1rem; right:1rem; " : "position:absolute; top:0; right:0;"};
  cursor: pointer;
  background: transparent;
  border: none;
  outline: none;
  z-index: 10;
  .nav-icon-part {
    height: 0.2rem;
    background-color: ${({ isOpenMenu }) => (isOpenMenu ? "var(--btn-text)" : "var(--headline)")};
    width: 3rem;
    padding: 0.1rem;
    margin-bottom: 0.2rem;
    border-radius: var(--border-radius-m);
    position: relative;
    transition: var(--transition-s);
  }
  .nav-icon-part:nth-of-type(1) {
    ${({ isOpenMenu }) => (isOpenMenu ? `top: 10px; transform: rotate(-45deg);` : "")};
  }
  .nav-icon-part:nth-of-type(2) {
    ${({ isOpenMenu }) => (isOpenMenu ? `display:none` : "")};
  }
  .nav-icon-part:nth-of-type(3) {
    ${({ isOpenMenu }) => (isOpenMenu ? `transform: rotate(45deg);` : "")};
  }
`

interface NavIconProps {
  toggle: () => void
  isOpenMenu: boolean
}
export const NavIcon = ({ toggle, isOpenMenu }: NavIconProps): JSX.Element => {
  return (
    <Wrapper onClick={toggle} isOpenMenu={isOpenMenu}>
      <div className="nav-icon-part"></div>
      <div className="nav-icon-part"></div>
      <div className="nav-icon-part"></div>
    </Wrapper>
  )
}
