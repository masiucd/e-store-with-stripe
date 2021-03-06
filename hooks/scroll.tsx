import { useCallback, useEffect, useState } from "react"

interface Scroll<T> {
  list: Array<T>
  heightLimit?: number
  options?: Record<string, string | number>
}
function useScroll<T>({ list, heightLimit = 20, ...options }: Scroll<T>): { data: Array<T> } {
  const [data, setData] = useState([...list.slice(0, 2)])
  const [hasMoreData, setHasMoreData] = useState(list.length > 2)

  const loadPosts = useCallback(() => {
    const currentLen = data.length
    const morePosts = currentLen < list.length
    const nextEdges = morePosts ? list.slice(currentLen, currentLen * 2) : []

    setHasMoreData(morePosts)
    setData([...data, ...nextEdges])
  }, [list, data])

  useEffect(() => {
    const scrollListener = () => {
      if (!hasMoreData) {
        return
      }

      if (
        window.innerHeight + document.documentElement.scrollTop + heightLimit >=
        document.documentElement.offsetHeight
      ) {
        loadPosts()
      }
    }
    window.addEventListener("scroll", scrollListener)
    return () => {
      window.removeEventListener("scroll", scrollListener)
    }
  }, [hasMoreData, heightLimit, loadPosts])

  return { data }
}

export default useScroll
