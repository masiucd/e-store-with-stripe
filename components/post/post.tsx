import { FC } from "react"
import Link from "next/link"
import { css } from "@emotion/css"
import { FrontMatter } from "@utils/types"

interface PostProps {
  post: FrontMatter
}

const postStyles = css`
  font-size: var(--h3);
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  border-radius: var(--border-radius-m);
  display: flex;
  flex-flow: column wrap;
  p {
    display: inline-block;
    &:nth-child(1) {
      font-size: var(--h2);
      position: relative;
      &::after {
        content: "";
        position: absolute;
        bottom: 1.3rem;
        left: 0;
        width: 31%;
        padding: 0.4rem;
        background-color: var(--red-shadow);
      }
    }
    &:nth-child(2) {
      font-size: var(--h4);
    }
    &:nth-child(3) {
      font-size: var(--h5);
    }
  }

  border-bottom: 2px solid var(--highlight);
`

const Post: FC<PostProps> = ({ post }) => (
  <Link href={`/posts/[slug]`} as={`/posts/${post.slug}`}>
    <a className={postStyles}>
      <p>{post.slug}</p>
      <p>{post.date}</p>
      <p>{post.excerpt}</p>
      <p>category:{post.category}</p>
    </a>
  </Link>
)
export default Post
