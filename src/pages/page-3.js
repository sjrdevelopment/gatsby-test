import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Nav from '../components/nav'

const ThirdPage = () => (
  <Layout>
    <SEO title="Page three" />
    <h1>Hi from the third page</h1>
    <p>test test test</p>
    <a href="http://www.google.com">Google</a>
    <Nav />
  </Layout>
)

export default ThirdPage
