import React from "react"
import { Link } from "gatsby"

import Layout from "../componets/layout"
import Head from '../componets/head'

const NotFound = () => {
  return (
    <Layout>
    <Head title="404" />
      <h1>Page not found</h1>
      <p>
        <Link to="/">Head home</Link>
      </p>
    </Layout>
  )
}

export default NotFound
