import * as React from "react"
import { Link } from "gatsby"

import Seo from "../components/seo"

const Home = ({ data, location }) => {
  return (
    <div>
      <Seo title="Homepage" />
      <Link to="blogs" itemProp="url">
        <span itemProp="headline">Blogs</span>
      </Link>
    </div>
  )
}

export default Home
