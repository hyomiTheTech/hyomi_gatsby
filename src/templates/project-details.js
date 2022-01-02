import React from "react"
import Img from "gatsby-image"
import Layout from "../component/Layout"
import { details, featured } from '../styles/project-details.module.css'

const ProjectDetails = () => {
  return (
    <Layout>
      <div className={details}>
        <h2>title</h2>
        <h3>stack</h3>
        <div className={featured}>
          {/* <Img fluid={} /> */}
        </div>
        {/* <div className={styles.html} dangerouslySetInnerHTML={} /> */}
      </div>
    </Layout>
  )
}
 
export default ProjectDetails