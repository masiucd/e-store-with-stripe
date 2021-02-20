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

export type Status = "idle" | "pending" | "resolved" | "rejected"
