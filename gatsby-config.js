module.exports = {
  pathPrefix: "/daysheets",
  siteMetadata: {
    title: `Day Sheets`,
    description: `Touring can be a beautiful thing when executed properly. Day Sheets offers services to help your band organize everything you need for a successful tour from security to catering.`,
    author: `Josh Weinstein`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/src/images/`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
