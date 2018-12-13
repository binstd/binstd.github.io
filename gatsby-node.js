/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
// exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
//     if (stage === "build-html") {
//       actions.setWebpackConfig({
//         module: {
//           rules: [
//             {
//               test: /bad-module/,
//               use: loaders.null(),
//             },
//           ],
//         },
//       })
//     }
// }


// exports.createPages = ({ boundActionCreators, graphql }) => {
//     const { createPage, createRedirect } = boundActionCreators;

//     const documentationTemplate = path.resolve(`src/templates/documentation.js`);
    

//     return graphql(`{
//         pages: allMarkdownRemark(
//             limit: 1000,
//             sort: { order:ASC, fields: fileAbsolutePath },
//             filter: { fileAbsolutePath: { regex: "/\/docs\//" } }
//         ) {
//             edges {
//                     node {
//                     fileAbsolutePath
//                     html
//                     headings {
//                         value
//                         depth
//                     }
//                     frontmatter {
//                         path
//                         title
//                     }
//                 }
//             }
//         }
//         site {
//             siteMetadata {
//                 defaultTranslation
//             }
//         }
//   }`).then(({ data: { pages: { edges }, site: { siteMetadata: { defaultTranslation } } } }) => {
          
//             let nav = [];
//             //处理
//             edges.forEach(({ node }) => {
//                 if (!node.frontmatter.path){
//                     if (node.fileAbsolutePath.indexOf('index') > 0) {
//                         const parent = { title: node.frontmatter.title, children: [], redirectFrom: getDocPath(node) };
//                         nav.push(parent);
//                     }
//                     else {
//                         const parent = nav[nav.length - 1];
//                         if (!parent.path) {
//                             parent.path = getDocPath(node);
//                         }
//                         parent.children.push({ title: node.frontmatter.title, path: getDocPath(node) });
//                     }
//                 } 
//             });


//             //创建页面
//             edges.forEach(({ node }, i) => {
//                     if (node.frontmatter.path) {
//                         console.log(node.frontmatter.path);
//                         // doc 

//                         // createPage({
//                         //     path: node.frontmatter.path,
//                         //     component: path.resolve("./src/templates/blogTemplate.js"),
//                         // });

//                     } else {
//                         console.log(node.frontmatter.path);
//                         createPage({
//                             path: getDocPath(node),
//                             component: documentationTemplate,
//                             context: { page: node, nav }
//                         });
//                     }

//                 });
//         });


// }


// function getDocPath({ fileAbsolutePath }) {
//     const ext = path.extname(fileAbsolutePath);
//     const file = stripOrderingNumbers(path.basename(fileAbsolutePath, ext));
//     const dir = stripOrderingNumbers(path.dirname(fileAbsolutePath).split(path.sep).pop());

//     return `/docs/${dir}${file === 'index' ? '' : `/${file}`}`;
// }

// function stripOrderingNumbers(str) {
//     return str.replace(/^(\d+-)/, '');
// }

// exports.onCreatePage = async ({ page, boundActionCreators }) => {
//     const { createPage } = boundActionCreators;
    
//     if (page.path.match(/^\/dapp/)) {
//         page.matchPath = "/dapp/*";
//         // Update the page.
//         createPage(page);
//     }
   
  
// };



/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

'use strict';

const path = require('path');

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
    if (stage === "build-html") {
      actions.setWebpackConfig({
        module: {
          rules: [
            {
              test: /bad-module/,
              use: loaders.null(),
            },
          ],
        },
      })
    }
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage, createRedirect } = actions;

  const documentationTemplate = path.resolve(`src/templates/documentation.js`);
//   const redirectTemplate = path.resolve(`src/templates/redirect.js`);

  return graphql(`{
    allMarkdownRemark(
      limit: 1000,
      sort: { order:ASC, fields: fileAbsolutePath },
      filter: { fileAbsolutePath: { regex: "/\/docs\//" } }
    ) {
      edges {
        node {
          fileAbsolutePath
          html
          headings {
            value
            depth
          }
          frontmatter {
            title
            description
          }
        }
      }
    }
  }`)
    .then(result => {
      if (result.errors) {
       
      }
      
      let nav = [];

      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        if (node.fileAbsolutePath.indexOf('index') > 0) {
          const parent = { title: node.frontmatter.title, children: [], redirectFrom: getDocPath(node) };
          
          nav.push(parent);
        }
        else {
          const parent = nav[nav.length - 1];
          if (!parent.path) {
            parent.path = getDocPath(node);
          }

          parent.children.push({ title: node.frontmatter.title, path: getDocPath(node) });
        }
      });

      result.data.allMarkdownRemark.edges
        .forEach(({ node }, i) => {
          createPage({
            path: getDocPath(node),
            component: documentationTemplate,
            context: { page: node, nav }
          })
      });
    });
}


function getDocPath({ fileAbsolutePath }) {
  const ext = path.extname(fileAbsolutePath);
  const file = stripOrderingNumbers(path.basename(fileAbsolutePath, ext));
  const dir = stripOrderingNumbers(path.dirname(fileAbsolutePath).split(path.sep).pop());

  return `/docs/${dir}${file === 'index' ? '' : `/${file}`}`;
}

function stripOrderingNumbers(str) {
  return str.replace(/^(\d+-)/, '');
}

exports.onCreatePage = async ({ page, boundActionCreators }) => {
    const { createPage } = boundActionCreators;
    
    if (page.path.match(/^\/dapp/)) {
        page.matchPath = "/dapp/*";
        // Update the page.
        createPage(page);
    }

};

