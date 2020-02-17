import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../componets/layout"
import Head from '../componets/head'
import Style from "./blog.module.scss"

const BlogPage = () => {

  const queryContentful = useStaticQuery(graphql`
    query {
      allContentfulBlogGatsbyPost (
        sort: {
          fields:publishedDate
          order:DESC
        }
      ) {
        edges {
          node {
            title
            slug
            publishedDate (
              formatString:"DD [de] MMMM [de] YYYY"
              locale:"pt-br"
            )
          }
        }
      }
    }
  `)
  const { edges: edgesContentful } = queryContentful.allContentfulBlogGatsbyPost

  // const queryMarkdown = useStaticQuery(graphql`
  //   query {
  //     allMarkdownRemark {
  //       edges {
  //         node {
  //           frontmatter {
  //             data
  //             title
  //           }
  //           fields {
  //             slug
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)
  // const { edges: edgesMarkdown } = queryMarkdown.allMarkdownRemark

  return (
    <Layout>
      <Head title="Blog" />
      <h1>Blog</h1>
      <ol className={Style.posts}>
        {/* {edgesMarkdown.map(edge => {
          const { title, data } = edge.node.frontmatter
          const { slug } = edge.node.fields
          return (
            <li key={title} className={Style.post}>
              <Link title={`ir para ${title}`} to={`/blog/${slug}`}>
                <h2>{title}</h2>
                <p>{data}</p>
              </Link>
            </li>
          )
        })} */}
        {edgesContentful.map(edge => {
          const { title, slug, publishedDate } = edge.node

          return(
            <li key={title} className={Style.post}>
              <Link title={`ir para ${title}`} to={`blog/${slug}`}>
                <h2>{title}</h2>
                <p>{publishedDate}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage
