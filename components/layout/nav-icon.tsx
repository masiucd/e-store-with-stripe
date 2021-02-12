import styled from "@emotion/styled"
import React from "react"

const Wrapper = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  background: transparent;
  border: none;
  outline: none;
  .nav-icon-part {
    height: 0.2rem;
    background-color: red;
    width: 3rem;
    padding: 0.2rem;
    margin-bottom: 0.2rem;
    border-radius: var(--border-radius-m);
  }
`
interface NavIconProps {
  toggle: () => void
}
export const NavIcon = ({ toggle }: NavIconProps): JSX.Element => {
  return (
    <Wrapper onClick={toggle}>
      <div className="nav-icon-part"></div>
      <div className="nav-icon-part"></div>
      <div className="nav-icon-part"></div>
    </Wrapper>
  )
}