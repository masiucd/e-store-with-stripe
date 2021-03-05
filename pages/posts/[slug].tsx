import Layout from "@components/layout/layout"
import TitleWrapper from "@components/common/title"
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next"
import path from "path"
import fs from "fs"
import matter from "gray-matter"
import { POST_PATH } from "@utils/mdx-utils"
import renderToString from "next-mdx-remote/render-to-string"
import hydrate from "next-mdx-remote/hydrate"
import Title from "@components/common/title"
import Counter from "@components/counter/main"
import Head from "next/head"
import { FrontMatter, Source } from "@utils/types"

interface PostPageProps {
  source: Source
  frontMatter: FrontMatter
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

const PostPage: React.FC<PostPageProps> = ({ source, frontMatter }) => {
  const content = hydrate(source, { components })

  return (
    <Layout>
      <section>
        <TitleWrapper title={`${frontMatter.title}`} />
        <main>{content}</main>
      </section>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = fs.readdirSync("posts")

  const paths = posts.map((p) => ({ params: { slug: p.replace(".mdx", "") } }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (ctx: GetStaticPropsContext) => {
  const { params } = ctx

  const contentText = fs.readFileSync(path.join(POST_PATH, `${params?.slug}.mdx`), "utf-8")
  const { content, data: frontMatter } = matter(contentText)
  const mdxSource = await renderToString(content, {
    components,
    // remark/rehype plugins goes in here
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: frontMatter,
  })

  return {
    props: { source: mdxSource, frontMatter },
  }
}

export default PostPage
