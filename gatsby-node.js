const path = require('path')

module.exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions

    if (node.internal.type === 'MarkdownRemark') {
        const slug = path.basename(node.fileAbsolutePath, '.md')
        const parent = getNode(node.parent);

        let collection = parent.sourceInstanceName;
        createNodeField({
          node,
          name: 'collection',
          value: collection,
        });

        createNodeField({
            node,
            name: 'slug',
            value: slug
        })
        
    }

    
}

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    const blogTemplate = path.resolve('./src/templates/blog.js')
    const res = await graphql(`
            query {
                allMarkdownRemark {
                    edges {
                        node {
                            fields {
                                slug
                            }
                            
                        }
                    }
                }
            }
        `)

    res.data.allMarkdownRemark.edges.forEach( (edge) => {
        createPage({
            component: blogTemplate,
            path: `/blog/${edge.node.fields.slug}`,
            context: {
                slug: edge.node.fields.slug
            }

        })
    })

}


