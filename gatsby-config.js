module.exports = {
  pathPrefix: `/test01`,
  siteMetadata: {
    siteUrl: "https://theflyingfire.github.io",
    title: "Test01",
    description: "just testing some stuff",
    author: "thefireflyer",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/posts`,
      },
    },
    `gatsby-transformer-remark`,
  ],
};
