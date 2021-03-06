import { SetStateAction } from "react"

export const init = (
  xs: string[],
  fn: (value: SetStateAction<Record<string, boolean>>) => void
) => {
  const map: Record<string, boolean> = xs.reduce((obj: Record<string, boolean>, key: string) => {
    if (!obj[key]) {
      obj[key] = false
    }
    return obj
  }, {})
  fn(map)
}

export const initCategories = (
  categories: Record<string, boolean>,
  fn: (value: SetStateAction<string[]>) => void
) => {
  const list = []
  for (const key of Object.keys(categories)) {
    if (categories[key]) {
      list.push(key)
    }
  }

  fn(list)
}
