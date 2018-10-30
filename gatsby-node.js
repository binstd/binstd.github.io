// const _ = require('lodash');
// const path = require("path");
// const { createFilePath } = require(`gatsby-source-filesystem`);

// exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
//     if (node.internal.type === `MarkdownRemark`) {
//         const { createNodeField } = boundActionCreators;
//         const slug = createFilePath({
//             node,
//             getNode,
//             basePath: `content`,
//         });
//         // slug starts and ends with '/' so parts[0] and parts[-1] will be empty
//         const parts = slug.split('/').filter(p => !!p);

//         const [framework, language, chapter] = parts;

//         createNodeField({ node, name: `slug`, value: slug });
//         createNodeField({ node, name: `framework`, value: framework });
//         createNodeField({ node, name: `language`, value: language });
//         createNodeField({ node, name: `chapter`, value: chapter });
//     }
// };

// exports.createPages = ({ graphql, boundActionCreators }) => {
//     const { createPage, createRedirect } = boundActionCreators;

//     return new Promise(resolve => {
//         graphql(`
//         {
//           pages: allMarkdownRemark {
//             edges {
//               node {
//                   frontmatter {
//                     path
//                     tags
//                   }
//                   fields {
//                     slug
//                     framework
//                     language
//                     chapter
//                   }
//               }
//             }
//           }
//           site {
//             siteMetadata {
//                 defaultTranslation
//             }
//           }
//         }
//     //   `).then(({ data: { pages: { edges }, site: { siteMetadata: { defaultTranslation } } } }) => {
//                 edges.forEach(({ node }) => {

//                     const { slug, framework, language, chapter } = node.fields;

//                     if (`${framework}/${language}` === defaultTranslation) {
//                         // Redirect the old URL format (/get-started) to our slug
//                         createRedirect({
//                             fromPath: `/${chapter}/`,
//                             isPermanent: true,
//                             redirectInBrowser: true,
//                             toPath: slug,
//                         });
//                     }

//                     if (node.frontmatter.path) {
//                         console.log(node.frontmatter.path);
//                         createPage({
//                             path: node.frontmatter.path,
//                             component: path.resolve("./src/templates/blogTemplate.js"),
//                         });

//                     } else {
//                         createPage({
//                             path: slug,
//                             component: path.resolve(`./src/templates/chapter.js`),
//                             context: {
//                                 slug,
//                                 framework,
//                                 language,
//                                 chapter,
//                             },
//                         });
//                     }

//                 });
//                 //处理完毕

//                 let tags = [];
//                 _.each(edges, edge => {
//                     if (_.get(edge, "node.frontmatter.tags")) {
//                         tags = tags.concat(edge.node.frontmatter.tags);
//                     }
//                 });
//                 // const tagTemplate = path.resolve("./src/templates/tags.js");
//                 tags = _.uniq(tags);
//                 tags.forEach(tag => {
//                     createPage({
//                         path: `/tags/${_.kebabCase(tag)}/`,
//                         component: path.resolve("./src/templates/tags.js"),
//                         context: {
//                             tag,
//                         },
//                     });
//                 });
//                 resolve();

//             });
//     });
// };
// // 
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
// const _ = require('lodash');

// exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
//     if (stage === "build-html") {
//         actions.setWebpackConfig({
//             module: {
//                 rules: [
//                     {
//                         test: /bad-module/,
//                         use: loaders.null(),
//                     },
//                 ],
//             },
//         })
//     }
// }



exports.createPages = ({ boundActionCreators, graphql }) => {
    const { createPage, createRedirect } = boundActionCreators;

    const documentationTemplate = path.resolve(`src/templates/documentation.js`);
    //   const redirectTemplate = path.resolve(`src/templates/redirect.js`);

    // {
    //     pages: allMarkdownRemark {
    //       edges {
    //         node {
    //             frontmatter {
    //               path
    //               tags
    //             }
    //             fields {
    //               slug
    //               framework
    //               language
    //               chapter
    //             }
    //         }
    //       }
    //     }
    //     site {
    //       siteMetadata {
    //           defaultTranslation
    //       }
    //     }
    //   }

    return graphql(`{
        pages: allMarkdownRemark(
            limit: 1000,
            sort: { order:ASC, fields: fileAbsolutePath },
            filter: { fileAbsolutePath: { regex: "/\/markdown\//" } }
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
                        path
                        title
                        description
                    }
                }
            }
        }
        site {
            siteMetadata {
                defaultTranslation
            }
        }
  }`).then(({ data: { pages: { edges }, site: { siteMetadata: { defaultTranslation } } } }) => {
          
            let nav = [];
            //处理
            edges.forEach(({ node }) => {
                if (!node.frontmatter.path){
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
                } 
            });


            //创建页面
            edges.forEach(({ node }, i) => {
                    if (node.frontmatter.path) {
                        // console.log(node.frontmatter.path);
                        createPage({
                            path: node.frontmatter.path,
                            component: path.resolve("./src/templates/blogTemplate.js"),
                        });

                    } else {
                        // console.log(node.frontmatter.path);
                        createPage({
                            path: getDocPath(node),
                            component: documentationTemplate,
                            context: { page: node, nav }
                        });
                    }

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


// exports.onCreatePage = async ({ page, boundActionCreators }) => {
//     const { createPage } = boundActionCreators;
  
//     return new Promise((resolve, reject) => {
//       if (page.path.match(/^\/landing-page/)) {
//         // It's assumed that `landingPage.js` exists in the `/layouts/` directory
//         page.layout = "landingPage";
//         // Update the page.
//         createPage(page);
//       }
//       resolve();
//     });
// };

exports.onCreatePage = async ({ page, boundActionCreators }) => {
    const { createPage } = boundActionCreators;
    if (page.path.match(/^\/dapp/)) {
        page.matchPath = "/dapp/*";
        // Update the page.
        createPage(page);
    }
    if (page.path.match(/^\/docs/)) {
        // It's assumed that `landingPage.js` exists in the `/layouts/` directory
        page.matchPath = "/dapp/*";
        page.layout = "docLayout";
        // Update the page.
        createPage(page);
      }

};