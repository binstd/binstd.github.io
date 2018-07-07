// const path = require("path");

// exports.createPages = ({ boundActionCreators, graphql }) => {
//   const { createPage } = boundActionCreators;

//   const blogPostTemplate = path.resolve(`src/templates/blogTemplate.js`);

//   return graphql(`
//     {
//       allMarkdownRemark(
//         sort: { order: DESC, fields: [frontmatter___date] }
//         limit: 1000
//       ) {
//         edges {
//           node {
//             frontmatter {
//               path
//             }
//           }
//         }
//       }
//     }
//   `).then(result => {
//     if (result.errors) {
//       return Promise.reject(result.errors);
//     }

//     result.data.allMarkdownRemark.edges.forEach(({ node }) => {
//       createPage({
//         path: node.frontmatter.path,
//         component: blogPostTemplate,
//         context: {}, // additional data can be passed via context
//       });
//     });
//   });
// };
const _ = require('lodash');
const path = require("path");

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  const blogPostTemplate = path.resolve("src/templates/blogTemplate.js");
  const tagTemplate = path.resolve("src/templates/tags.js");

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 2000
      ) {
        edges {
          node {
            frontmatter {
              path
              tags
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    const posts = result.data.allMarkdownRemark.edges;

    // Create post detail pages
    posts.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: blogPostTemplate,
      });
    });

    // Tag pages:
    let tags = [];
    // Iterate through each post, putting all found tags into `tags`
    _.each(posts, edge => {
      if (_.get(edge, "node.frontmatter.tags")) {
        tags = tags.concat(edge.node.frontmatter.tags);
      }
    });
    // Eliminate duplicate tags
    tags = _.uniq(tags);

    // Make tag pages
    tags.forEach(tag => {
      createPage({
        path: `/tags/${_.kebabCase(tag)}/`,
        component: tagTemplate,
        context: {
          tag,
        },
      });
    });
  });
};