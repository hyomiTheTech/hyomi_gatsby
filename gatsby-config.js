/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [{
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `notes`,
      path: `${__dirname}/src/notes/`,
    }},
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects/`,
      },
  }],
  siteMetadata : {
    title: "Hyomi Gatsby",
    description: "A web dev portfolio",
    copyright: "This website is copyright 2022 hyomithetech"
  }
}
