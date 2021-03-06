import Layout from "@components/layout/layout"
import { NextPage } from "next"
import TitleWrapper from "@components/common/title"
import { GetStaticProps } from "next"
import styled from "@emotion/styled"
import { css } from "@emotion/css"
import Post from "@components/post/post"
import { POST_PATH } from "@utils/mdx-utils"
import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { FrontMatter } from "@utils/types"
import useScroll from "@hooks/scroll"
import { CategoryTable } from "@components/category-table/category-table"
import { ChangeEvent, useEffect, useCallback, useState } from "react"
import { listOfKeys, getUniqueList } from "@utils/helpers"
import { init, initCategories } from "@utils/blog-helpers"

interface BlogPageProps {
  frontMatterList: FrontMatter[]
}

const PostsWrapper = styled.div`
  display: flex;
  max-width: 50rem;
  margin: 0 auto 1rem auto;
  flex-flow: column wrap;
`

const titleStyles = css`
  margin-bottom: 2rem;
`

const BlogPage: NextPage<BlogPageProps> = ({ frontMatterList }) => {
  const [categories, setCategories] = useState<Record<string, boolean>>(() => ({}))
  const [selectedList, setSelectedList] = useState<string[]>([])
  const [filteredList, setFilteredList] = useState<FrontMatter[]>([])
  const { data: posts } = useScroll({ list: frontMatterList })

  const listOfCategories = listOfKeys(frontMatterList)("category")
  const uniqueListFrontMatterList = getUniqueList(listOfCategories)

  const handleCategory = (evt: ChangeEvent<HTMLInputElement>): void => {
    const { name, checked } = evt.target
    setCategories((p) => ({ ...p, [name]: checked }))
  }

  // console.log(
  //   frontMatterList.filter((x, i) => {
  //     console.log(x.category, selectedList[i])
  //     return x.category === selectedList[i]
  //   })
  // )
  // console.log(frontMatterList)
  // const f = frontMatterList.filter((x, i) => x.category === "shoes")
  // console.log(f)

  useEffect(() => {
    init(uniqueListFrontMatterList, setCategories)
  }, [])

  useEffect(() => {
    initCategories(categories, setSelectedList)
  }, [categories])

  useEffect(() => {
    const xs = frontMatterList.filter((x, i) => {
      // console.log(x, i)
      console.log(selectedList[i] === x.category)
    })

    // console.log(xs)
    setFilteredList(xs)
  }, [selectedList])
  // console.log(frontMatterList)

  // console.log(filteredList)

  return (
    <Layout>
      <TitleWrapper title="Posts" subTitle="running posts" className={titleStyles} />
      <CategoryTable
        uniqueList={uniqueListFrontMatterList}
        categories={categories}
        handleCategory={handleCategory}
      />
      <PostsWrapper>
        {filteredList.length > 0
          ? filteredList.map((post) => <Post key={post.slug} post={post} />)
          : posts.map((post) => <Post key={post.slug} post={post} />)}
      </PostsWrapper>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = fs.readdirSync("posts")
  const postsToString = posts.map((x) => fs.readFileSync(path.join(POST_PATH, `${x}`), "utf-8"))
  const frontMatterList: FrontMatter[] = []

  postsToString.forEach((p) => {
    const { data: frontMatter } = matter(p)
    frontMatterList.push(frontMatter as FrontMatter)
  })

  return {
    props: { frontMatterList },
  }
}

export default BlogPage
