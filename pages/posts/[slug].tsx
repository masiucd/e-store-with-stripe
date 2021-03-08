import Layout from "@components/layout/layout"
import TitleWrapper from "@components/common/title"
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next"
import path from "path"
import fs from "fs"
import matter from "gray-matter"
import { generateMdx, getAllPosts, getPostBySlug, getPostsDir, POST_PATH } from "@utils/mdx-utils"
import renderToString from "next-mdx-remote/render-to-string"
import hydrate from "next-mdx-remote/hydrate"
import Title from "@components/common/title"
import Counter from "@components/counter/main"
import Head from "next/head"
import { FrontMatter, Source } from "@utils/types"
import Link from "next/link"
import styled from "@emotion/styled"

const PostNavigation = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 1rem;
  a {
    font-size: var(--h4);
    position: relative;
    &:after {
      content: "";
      position: absolute;
      height: 0.5rem;
      background-color: var(--highlight-shadow);
      width: 0;
      bottom: 0.9rem;
      left: 0;
      transition: 500ms ease-in-out width;
    }
    &:hover {
      &::after {
        width: 100%;
      }
    }
  }
`

interface PostPageProps {
  source: Source
  frontMatter: FrontMatter
  posts: string[]
}

const components = {
  Title,
  Counter,
  // It also works with dynamically-imported components, which is especially
  // useful for conditionally loading components for certain routes.
  // See the notes in README.md for more details.
  // TestComponent: dynamic(() => import('../../components/TestComponent')),
  Head,
}

const PostPage: React.FC<PostPageProps> = ({ source, frontMatter, posts }) => {
  const content = hydrate(source, { components })
  const currentPostIndex = posts.indexOf(frontMatter.slug)
  const previousPost = posts[currentPostIndex - 1]
  const nextPost = posts[currentPostIndex + 1]

  return (
    <Layout>
      <section>
        <TitleWrapper title={`${frontMatter.title}`} />
        <main>{content}</main>
        <PostNavigation>
          {Boolean(previousPost) && (
            <Link href={`/posts/${previousPost}`}>
              <a>{previousPost}</a>
            </Link>
          )}
          {Boolean(nextPost) && (
            <Link href={`/posts/${nextPost}`}>
              <a>{nextPost}</a>
            </Link>
          )}
        </PostNavigation>
      </section>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts(["slug"])

  const paths = posts.map((p) => ({ params: { slug: p.slug } }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (ctx: GetStaticPropsContext) => {
  const { params } = ctx
  const slug = params?.slug ?? ""
  const post = getPostBySlug(slug as string, [
    "title",
    "date",
    "author",
    "slug",
    "category",
    "excerpt",
    "content",
  ])

  const posts = getPostsDir()
  const mdxSource = await generateMdx(post, components)

  return {
    props: { source: mdxSource, frontMatter: post, posts },
  }
}

export default PostPage
