import type { GatsbyConfig } from 'gatsby'

require('dotenv').config({
  path: `.env`,
})

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Hello Nav!`,
    description: `A pure navigation for front-end developers`,
    siteUrl: `https://hello-nav.github.io/`,
  },
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-less',
    'gatsby-plugin-no-sourcemaps',
    'gatsby-plugin-image',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-plugin-mdx',
    'gatsby-plugin-sharp',
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'models',
        path: './src/model/',
      },
      __key: 'models',
    },
    {
      resolve: 'gatsby-plugin-baidu-analytics',
      options: {
        siteId: process.env.GATSBY_BAIDU_KEY,
        head: false,
      },
    },
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: [process.env.GATSBY_GOOGLE_KEY],
      },
    },
  ],
}

export default config
