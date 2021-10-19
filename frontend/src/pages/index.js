import * as React from "react"
// import { Link } from "gatsby"

import { Parallax } from "@react-spring/parallax"
// import { Themed } from "theme-ui"
import Layout from "@lekoarts/gatsby-theme-cara/src/components/layout"
// import Divider from "@lekoarts/gatsby-theme-cara/src/elements/divider"
// import {
//   UpDown,
//   UpDownWide,
// } from "@lekoarts/gatsby-theme-cara/src/styles/animations"
// import Svg from "@lekoarts/gatsby-theme-cara/src/components/svg"
import Seo from "@lekoarts/gatsby-theme-cara/src/components/seo"
import Hero from "../components/hero"
// import Content from "@lekoarts/gatsby-theme-cara/src/elements/content"
// import Inner from "@lekoarts/gatsby-theme-cara/src/elements/inner"

const Home = ({ data, location }) => {
  return (
    <Layout>
      <Seo title="404 - Not Found" />
      <Parallax pages={5}>
        <Hero offset={0} factor={1} />
      </Parallax>
    </Layout>
  )
}

export default Home
