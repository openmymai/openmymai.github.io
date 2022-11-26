module.exports = {
  plugins: [{
    resolve: 'gatsby-plugin-sass',
  }],
  siteMetadata: {
      title: `I am Sirisak Chantanate`,
      description: `Nutrigenomics lover, I really love share the health knowledge.`,
    siteUrl: `https://openmymai.github.io`
  },
  plugins: [ "gatsby-plugin-sass", "gatsby-plugin-image", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  },
  {
    resolve: `gatsby-plugin-google-gtag`,
    options: {
      // You can add multiple tracking ids and a pageview event will be fired for all of them.
      trackingIds: [
        "G-90XFCE7HSM", // Google Analytics / GA
      ],
      // This object is used for configuration specific to this plugin
      pluginConfig: {
        // Puts tracking script in the head instead of the body
        head: true,
      },
    },
  },
  ],
};