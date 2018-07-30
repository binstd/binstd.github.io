const _ = require('lodash');
const path = require("path");
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  if (node.internal.type === `MarkdownRemark`) {
    const { createNodeField } = boundActionCreators;
    const slug = createFilePath({
        node,
        getNode,
        basePath: `content`,
    });

    // slug starts and ends with '/' so parts[0] and parts[-1] will be empty
    const parts = slug.split('/').filter(p => !!p);

    const [framework, language, chapter] = parts;

    createNodeField({ node, name: `slug`, value: slug });
    createNodeField({ node, name: `framework`, value: framework });
    createNodeField({ node, name: `language`, value: language });
    createNodeField({ node, name: `chapter`, value: chapter });
  }
};

exports.createPages = ({ graphql, boundActionCreators }) => {
    const { createPage, createRedirect } = boundActionCreators;
  
    return new Promise(resolve => {
      graphql(`
        {
          pages: allMarkdownRemark {
            edges {
              node {
                  frontmatter {
                    path
                    tags
                  }
                  fields {
                    slug
                    framework
                    language
                    chapter
                  }
              }
            }
          }
          site {
            siteMetadata {
                defaultTranslation
            }
          }
        }
      `).then(({ data: { pages: { edges }, site: { siteMetadata: { defaultTranslation } } } }) => {
        edges.forEach(({ node }) => {

          const { slug, framework, language, chapter } = node.fields;
       
          if (`${framework}/${language}` === defaultTranslation) {
            // Redirect the old URL format (/get-started) to our slug
            createRedirect({
                fromPath: `/${chapter}/`,
                isPermanent: true,
                redirectInBrowser: true,
                toPath: slug,
            });
          }
  
            if(node.frontmatter.path) {
                    // console.log(node.frontmatter.path);
                createPage({
                    path: node.frontmatter.path,
                    component: path.resolve("./src/templates/blogTemplate.js"),
                });
                        
            }  else {
                createPage({
                    path: slug,
                    component: path.resolve(`./src/templates/chapter.js`),
                    context: {
                        slug,
                        framework,
                        language,
                        chapter,
                    },
                });
            }
         
        });
        
        let tags = [];
        _.each(edges, edge => {
            if (_.get(edge, "node.frontmatter.tags")) {
                tags = tags.concat(edge.node.frontmatter.tags);
            }
        });
        // const tagTemplate = path.resolve("./src/templates/tags.js");
        tags = _.uniq(tags);
        tags.forEach(tag => {
            createPage({
                path: `/tags/${_.kebabCase(tag)}/`,
                component: path.resolve("./src/templates/tags.js"),
                context: {
                    tag,
                },
            });
        });
        resolve();

        
      });
    });
  };
  

//   const _ = require('lodash');
//   const path = require("path");
  
//   exports.createPages = ({ boundActionCreators, graphql }) => {
//     const { createPage } = boundActionCreators;
  
//     const blogPostTemplate = path.resolve("src/templates/blogTemplate.js");
//     const tagTemplate = path.resolve("src/templates/tags.js");
  
//     return graphql(`
//       {
//         allMarkdownRemark(
//           sort: { order: DESC, fields: [frontmatter___date] }
//           limit: 2000
//         ) {
//           edges {
//               node {
//                   frontmatter {
//                   path
//                   tags
//                   }
//               }
//           }
//         }
//       }
//     `).then(result => {
//       if (result.errors) {
//         return Promise.reject(result.errors);
//       }
  
//       const posts = result.data.allMarkdownRemark.edges;
  
//       posts.forEach(({ node }) => {
//         createPage({
//           path: node.frontmatter.path,
//           component: blogPostTemplate,
//         });
//       });
  
//       let tags = [];
//       _.each(posts, edge => {
//         if (_.get(edge, "node.frontmatter.tags")) {
//           tags = tags.concat(edge.node.frontmatter.tags);
//         }
//       });
  
//       tags = _.uniq(tags);
//       tags.forEach(tag => {
//         createPage({
//           path: `/tags/${_.kebabCase(tag)}/`,
//           component: tagTemplate,
//           context: {
//             tag,
//           },
//         });
//       });

//     });
//   };