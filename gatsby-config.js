module.exports = {
  siteMetadata: {
    title: `주노 개발 블로그`,
    author: `junhoyeo`,
    description: `👋 공부하며 느낀 내용과 과정을 기록하는 개발자 블로그입니다.`,
    keywords: [`development`, `frontend`, `javascript`],
    siteUrl: `https://junhoyeo.github.io`,
  },
  pathPrefix: `/`,
  plugins: [
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Lato`,
            variants: [`300`, `400`, `500`, `700`, `900`],
          },
          {
            family: `Noto Sans KR`,
            variants: [`300`, `400`, `500`, `700`, `900`],
          },
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/content/blog`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-generate-typings`,
      options: {
        dest: `./src/types/graphql-types.d.ts`,
      },
    },
  ],
}
