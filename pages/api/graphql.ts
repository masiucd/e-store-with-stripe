import { ApolloServer, gql } from "apollo-server-micro"

const typeDefs = gql`
  type Query {
    shoes: [Shoe!]!
  }
  type Shoe {
    name: String
    id: ID
    title: String!
    image: String
    description: String!
    slug: String!
    price: Int!
  }
`

const resolvers = {
  Query: {
    shoes: () => {
      return [
        {
          id: "price_1IJMT9CYzbrCXwtlL1lNv50M",
          title: "fast-nike",
          image: "/shoes/shoe-1.jpg",
          description: "run fast with nike",
          slug: "fast-nike",
          price: 550,
        },
        {
          id: "price_1IJMTqCYzbrCXwtl91mljOJq",
          title: "nike free run",
          image: "/shoes/shoe-2.jpg",
          description: "cool nice looking shoes",
          slug: "nike-free-run",
          price: 345,
        },
        {
          id: "price_1IJMUMCYzbrCXwtl2SpqLuO9",
          title: "nike 45",
          image: "/shoes/shoe-3.jpg",
          description: "run like a pro",
          slug: "fast-45",
          price: 325,
        },
        {
          id: "price_1IJMUxCYzbrCXwtl4FqdxeBN",
          title: "nike bounce",
          image: "/shoes/shoe-4.jpg",
          description: "jump high, run fast and become a pro",
          slug: "nike-bounce",
          price: 725,
        },
        {
          id: "price_1IKS4JCYzbrCXwtlEuqh2GMP",
          title: "air max class",
          image: "/shoes/air-max-class.jpg",
          description: "classic air max class",
          slug: "air-max-class",
          price: 788,
        },
        {
          id: "price_1IKS5fCYzbrCXwtlXRZutX4z",
          title: "nike free",
          image: "/shoes/nike-jump.jpg",
          description: "run fast with lightweight shoes",
          slug: "nike-free",
          price: 545,
        },
        {
          id: "price_1IKS5CCYzbrCXwtlazfPUzSy",
          title: "asics one",
          image: "/shoes/asics-one.jpg",
          description: "run fast with asics",
          slug: "asics-one",
          price: 545,
        },
      ]
    },
  },
}

const apolloServer = new ApolloServer({ typeDefs, resolvers })

export const config = {
  api: {
    bodyParser: false,
  },
}

export default apolloServer.createHandler({ path: "/api/graphql" })
