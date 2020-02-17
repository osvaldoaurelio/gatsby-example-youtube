import React from "react"
import { graphql, useStaticQuery } from 'gatsby'

import Styles from './footer.module.scss'

export default () => {
  
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  
  const { author } = data.site.siteMetadata
  return (
  <footer className={Styles.footer}>
    <p>Criado por {author}, © 2020</p>
  </footer>
)
  }
