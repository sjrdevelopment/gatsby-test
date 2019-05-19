import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Nav from '../components/nav'

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Nav />
  </Layout>
)

export default SecondPage
