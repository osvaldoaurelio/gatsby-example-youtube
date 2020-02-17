import React from "react"
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Layout from "../componets/layout"
import Head from '../componets/head'

// export const query = graphql`
//   query($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       frontmatter {
//         title
//         data
//       }
//       html
//     }
//   }
// `

export const query = graphql`
  query($slug: String!) {
    contentfulBlogGatsbyPost (slug: { eq: $slug }) {
      title
      publishedDate(formatString: "DD [de] MMMM [de] YYYY", locale: "pt-br") 
      body {
        json
      }
    }
  }
`

const Blog = (props) => {
  // const { title, data } = props.data.markdownRemark.frontmatter
  // const { html } = props.data.markdownRemark
  const { title, publishedDate: data, body: { json } } = props.data.contentfulBlogGatsbyPost
  const options = {
    renderNode: {
      "embedded-asset-block": (node) => {
        const { title: { "en-US": alt }, file: { "en-US": { url } } } = node.data.target.fields
        return <img alt={alt} src={url} />
      } 
    }
  }
  return (
    <Layout>
      <Head title={title} />
      <h1>{title}</h1>
      <p>{data}</p>
      { documentToReactComponents(json, options) }
    </Layout>
  )
}

export default Blog
