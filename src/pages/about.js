import React from "react"
import { Link } from "gatsby"

import Layout from "../componets/layout"
import Head from '../componets/head'

const AboutPage = () => (
  <Layout>
    <Head title="About" />
    <h1>About</h1>
    <p>Informações <Link to="/contact">Sobre mim</Link></p>
  </Layout>
)

export default AboutPage
