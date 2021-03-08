import fs from "fs"
import matter from "gray-matter"
import renderToString from "next-mdx-remote/render-to-string"
import path from "path"
import { Items } from "./types"

export const POST_PATH = path.join(process.cwd(), "posts")
export const postFileFolder = fs.readdirSync(POST_PATH)

export const postSlugs = postFileFolder.map((post) => post.replace(".mdx", ""))
export const getPostsDir = () => fs.readdirSync("posts").map((post) => post.replace(".mdx", ""))

const postsDirectory = path.join(process.cwd(), "posts")

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

const replaceString = (re: RegExp, slug: string) => slug.replace(re, "")
export const formatPosts = (slug: string) => path.join(POST_PATH, `${slug}.mdx`)
export const getFileContent = (fullPath: string) => fs.readFileSync(fullPath, "utf-8")

export const getPostBySlug = (slug: string, fields: string[] = []) => {
  const realSlug = replaceString(/\.mdx$/, slug)
  const fullPath = formatPosts(realSlug)
  const fileContents = getFileContent(fullPath)
  const { data, content } = matter(fileContents)

  const items: Items = {}

  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug
    }
    if (field === "content") {
      items[field] = content
    }
    if (field === "date") {
      items[field] = data.date
    }

    if (data[field]) {
      items[field] = data[field]
    }
  })
  return items
}

export function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs()

  const posts = slugs
    .map((slug) => {
      return getPostBySlug(slug, fields)
    })
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return posts
}

export const generateMdx = async (post: Record<string, any>, components: Record<string, any>) => {
  const mdxSource = await renderToString(post.content || "", {
    components,
    // remark/rehype plugins goes in here
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: post,
  })

  return mdxSource
}
