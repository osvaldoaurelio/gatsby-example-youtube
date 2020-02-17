import React from "react"
import { Link } from "gatsby"

import Layout from "../componets/layout"
import Head from '../componets/head'

const IndexPage = () => (
  <Layout>
    <Head title="Home" />
    <h1>Olá!</h1>
    <h2>Eu sou Osvaldo, um desenvolvedor full-stack vivendo em Porangatu - GO</h2>
    <p>precisando de um desenvolvedor? <Link to="/contact">Contate-me.</Link></p>
  </Layout>
)

export default IndexPage
