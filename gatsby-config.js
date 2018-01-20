module.exports = {
  siteMetadata: {
    title: "Harman Pannu"
  },
  plugins: [
    "gatsby-plugin-react-helmet", 
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./src/favicon.png",
        injectHTML: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          twitter: true,
          yandex: true,
          windows: true
        }
      }
    },
  ]
};
