import Layout from "@components/layout/layout"
import { NextPage, GetStaticProps, GetStaticPaths } from "next"

import productsData from "@data/products.json"
import { Shoe } from "@utils/types"
import SingleProductItem from "@components/products/single-product-item"

interface ProductPageProps {
  product: Shoe
}
const ProductPage: NextPage<ProductPageProps> = ({ product }) => {
  return (
    <Layout metaConfig={{ title: "Product" }}>
      <SingleProductItem shoe={product} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const product = productsData.find((product) => product.slug === params?.slug)
  console.log(product)
  return {
    props: {
      product,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = productsData.map((product) => ({ params: { slug: product.slug } }))
  return {
    paths,
    fallback: false,
  }
}

export default ProductPage
