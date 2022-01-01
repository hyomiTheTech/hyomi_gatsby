import React from "react"
import {Link, graphql} from 'gatsby'
import Layout from '../component/Layout'
import { header, btn} from '../styles/home.module.css'

export default function Home() {
 
  return (
    <Layout>
      <section className={header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p> US designer & web developer based in Vegas.</p>
          <Link className={btn} to="/projects">My Portfolio Projects</Link>
        </div>
        <img src="/banner.png" alt="site banner" style={{maxWidth: "100%"}}/>
      </section>
    </Layout>
  )
}

// page query!!
// refers to the tutorial #9
// export const query = graphql`
// query SiteInfo {
//   site {
//     siteMetadata {
//       description
//       title
//     }
//   }
// }
// `