export interface Shoe {
  id: string
  title: string
  image: string
  description: string
  price: number
  slug: string
  quantity?: number
}

export interface CartItem extends Shoe {
  quantity: number
}
export interface NavData {
  name: string
  path: string
}

export interface MediaQueryListFallBack extends MediaQueryList {
  media: string
  matches: boolean
  onchange: null
}
export interface SocialData {
  name: string
  url: string
}

export type ScrollDirection = "up" | "down" | "idle"
export interface ScrollY {
  y: number
  scrollDirection: ScrollDirection
}

export type Status = "idle" | "pending" | "resolved" | "rejected"

export interface FrontMatter {
  title: string
  date: string
  author: string
  slug: string
  category: string
  excerpt: string
}

export interface Source {
  compiledSource: string
  renderedOutput: string
  scope: Record<string, string>
}
export type ArityOneFn = (arg: any) => any
export type PickLastInTuple<T extends any[]> = T extends [...rest: infer U, argn: infer L]
  ? L
  : never
// @ts-ignore
export type FirstFnParameterType<T extends any[]> = Parameters<PickLastInTuple<T>>[any]
export type LastFnReturnType<T extends any[]> = ReturnType<T[0]>
