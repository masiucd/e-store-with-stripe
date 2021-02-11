import React, { useRouter } from "next/router"
import { Children } from "react"
import Link from "next/link"

export const ActiveLink: React.FC = ({ children, ...props }) => {
  const { asPath } = useRouter()

  const p = props as any

  // const child = Children.only(children)
  // const childClassName = child.props.className || ""
  // const className = asPath === p.href || asPath === p.as ? `` : childClassName

  return (
    <Link href="/" {...props}>
      {/* {React.cloneElement(child, {
        className: className || null,
      })} */}
    </Link>
  )
}
