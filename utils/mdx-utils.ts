import fs from "fs"
import path from "path"

export const POST_PATH = path.join(process.cwd(), "posts")
export const postFileFolder = fs.readdirSync(POST_PATH)

export const postSlugs = postFileFolder.map((post) => post.replace(".mdx", ""))
