require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Umami Food Magazine`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    // `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `@chakra-ui/gatsby-plugin`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    },
    {
      resolve: `gatsby-source-drupal`,
      options: {
        baseUrl: process.env.DRUPAL_URL,
        apiBase: `jsonapi`,
        headers: {
            'api-key': process.env.JSON_API_KEY
        },
        fastBuilds: true,
        filters: {
          // collection : filter
          "file--file": "filter[status][value]=1",
        },
      },
    },
  ]
};
