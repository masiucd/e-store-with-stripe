export interface Shoe {
  id: string
  title: string
  image: string
  description: string
  price: number
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
