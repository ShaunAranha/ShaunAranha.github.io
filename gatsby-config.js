require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
      title: 'Shaun Aranha',
      siteUrl: `https://www.raphaelaranha.com`,
      author: 'Raphael'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-postcss',
      {
        resolve: `gatsby-plugin-manifest`,
        options: {
          name: `Shaun Aranha`,
          short_name: `Shaun`,
          start_url: `/`,
          display: `standalone`,
          icon: `src/images/icon.png`
        }
      },
      {
          resolve: 'gatsby-source-filesystem',
          options: {
              name: `projects`,
              path: `${__dirname}/src/projects`
          }
      },
      {
        resolve: 'gatsby-source-filesystem',
        options: {
            name: `experiences`,
            path: `${__dirname}/src/experiences`
        }
      },
      'gatsby-plugin-image',
      'gatsby-plugin-sharp',
      {
        resolve: 'gatsby-transformer-remark',
        options: {
          plugins: [
            'gatsby-remark-relative-images',
            {
              resolve: 'gatsby-remark-images',
              options: {
                maxWidth: 750,
                linkImagesToOriginal: false
              }
            }
            
          ]
        }
      }
      
  ]
}
