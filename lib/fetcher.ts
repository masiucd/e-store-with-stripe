import { Shoe } from "@utils/types"
import axios from "axios"

export const fetcher = (query: string): Promise<Shoe[] | undefined> => {
  return axios({
    method: "POST",
    url: "/api/graphql",
    data: {
      query: query,
    },
  })
    .then((r) => r.data.data.shoes)
    .catch((err) => {
      console.error(err)
    })
}
export const graphql = String.raw
