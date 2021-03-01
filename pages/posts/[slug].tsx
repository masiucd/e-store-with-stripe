import Layout from "@components/layout/layout"
import TitleWrapper from "@components/common/title"
import { useRouter } from "next/router"
import { GetStaticPaths, GetStaticProps } from "next"
import path from "path"
import fs from "fs"

interface PostPageProps {}

const PostPage: React.FC<PostPageProps> = ({}) => {
  const { query } = useRouter()

  return (
    <Layout>
      <section>
        <TitleWrapper title={`${query.slug}`} />
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

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { slug } = ctx.params!
  console.log(slug)
  const content = fs.readFileSync(path.join("posts", `${slug}.mdx`), "utf-8")
  console.log(content)

  return {
    props: { foo: "" },
  }
}

export default PostPage
