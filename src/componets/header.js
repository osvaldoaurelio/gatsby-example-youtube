import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

// import './header.module.scss'
import Styles from "./header.module.scss"

const Header = () => {
  
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const { title } = data.site.siteMetadata
  return (
    <header className={Styles.header}>
      <h1>
        <Link className={Styles.title} title="Home" to="/">
          {title}
        </Link>
      </h1>
      <nav>
        <ul className={Styles.navList}>
          <li>
            <Link
              className={Styles.navItem}
              activeClassName={Styles.activeNavItem}
              title="Home"
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={Styles.navItem}
              activeClassName={Styles.activeNavItem}
              title="Blog"
              to="/blog"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              className={Styles.navItem}
              activeClassName={Styles.activeNavItem}
              title="Sobre mim"
              to="/about"
            >
              Sobre mim
            </Link>
          </li>
          <li>
            <Link
              className={Styles.navItem}
              activeClassName={Styles.activeNavItem}
              title="Contato"
              to="/contact"
            >
              Contato
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
