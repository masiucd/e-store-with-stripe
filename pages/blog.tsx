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
import { CategoryTable as FilterSection } from "@components/category-table/category-table"
import { ChangeEvent, useEffect, useState } from "react"
import { listOfKeys, getUniqueList } from "@utils/helpers"
import { init, initCategories } from "@utils/blog-helpers"
import { useToggle } from "@hooks/toggle"
import Fade from "@components/animated/fade"
import { Button } from "@components/styles/button"

interface BlogPageProps {
  frontMatterList: FrontMatter[]
}

const PostsWrapper = styled.ul`
  display: flex;
  max-width: 50rem;
  margin: 0 auto 1rem auto;
  flex-flow: column wrap;
`

const titleStyles = css`
  margin-bottom: 2rem;
`

const filterButtonStyles = css`
  position: fixed;
  bottom: 10%;
  right: 5%;
  width: 5.5rem;
`

const BlogPage: NextPage<BlogPageProps> = ({ frontMatterList }) => {
  const [categories, setCategories] = useState<Record<string, boolean>>(() => ({}))
  const [selectedList, setSelectedList] = useState<string[]>([])
  const [filteredList, setFilteredList] = useState<FrontMatter[]>([])
  const [inputValue, setInputValue] = useState("")
  const { data: posts } = useScroll({ list: frontMatterList })
  const { on: showFilterBar, toggle: toggleFilterBar } = useToggle()

  const listOfCategories = listOfKeys(frontMatterList)("category")
  const uniqueListFrontMatterList = getUniqueList(listOfCategories)

  const handleCategory = (evt: ChangeEvent<HTMLInputElement>): void => {
    const { name, checked } = evt.target
    setCategories((p) => ({ ...p, [name]: checked }))
  }

  useEffect(() => {
    init(uniqueListFrontMatterList, setCategories)
  }, [])

  useEffect(() => {
    initCategories(categories, setSelectedList)
  }, [categories])

  useEffect(() => {
    const xs = frontMatterList.filter((x) => x.category === selectedList[selectedList.length - 1])

    setFilteredList(xs)
  }, [selectedList])

  useEffect(() => {
    if (inputValue.length > 0) {
      const filteredListFromInput = posts.filter((p) => {
        let re = new RegExp(`${inputValue}`, "gi")
        return p.slug.match(re) || p.title.match(re)
      })

      setFilteredList(filteredListFromInput)
    } else {
      setFilteredList([])
    }
  }, [inputValue])

  return (
    <Layout>
      <TitleWrapper title="Posts" subTitle="running posts" className={titleStyles} />
      <Fade isAnimated={showFilterBar}>
        <FilterSection
          uniqueList={uniqueListFrontMatterList}
          categories={categories}
          handleCategory={handleCategory}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
      </Fade>
      <PostsWrapper>
        {selectedList.length > 0 || filteredList.length > 0
          ? filteredList.map((post) => <Post key={post.slug} post={post} />)
          : posts.map((post) => <Post key={post.slug} post={post} />)}
      </PostsWrapper>
      <Button className={filterButtonStyles} onClick={toggleFilterBar}>
        {showFilterBar ? "hide filter" : "filter"}
      </Button>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = fs.readdirSync("posts")
  const postsToString = posts.map((post) =>
    fs.readFileSync(path.join(POST_PATH, `${post}`), "utf-8")
  )

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
