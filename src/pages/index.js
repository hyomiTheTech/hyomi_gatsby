import React from "react"
import {Link, graphql} from 'gatsby'
import Layout from '../component/Layout'
import { header, btn} from '../styles/home.module.css'
import Img from 'gatsby-image'

export default function Home({data}) {
 
  return (
    <Layout>
      <section className={header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p> US designer & web developer based in Vegas.</p>
          <Link className={btn} to="/projects">My Portfolio Projects</Link>
        </div>
        <Img fluid={data.file.childImageSharp.fluid} />
      </section>
    </Layout>
  )
}

export const query = graphql`
query Banner {
  file(relativePath: {eq: "banner.png"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`


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