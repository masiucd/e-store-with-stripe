import { FC } from "react"
import Link from "next/link"
import { css } from "@emotion/css"

interface PostProps {
  slug: string
}

const postStyles = css`
  font-size: var(--h3);
  padding: 0.5rem;
  border: 1px solid #000;
  margin-bottom: 0.5rem;
`

const Post: FC<PostProps> = ({ slug }) => {
  return (
    <Link key={slug} href={`/posts/[slug]`} as={`/posts/${slug}`}>
      <a className={postStyles}>
        <p>{slug}</p>
      </a>
    </Link>
  )
}
export default Post
