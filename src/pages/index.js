import React from "react";
import PostLink from "../components/post-link";
import PrimaryPage from '../components/PrimaryPage';
import Header from '../components/Header';
import Article from 'grommet/components/Article';
import NarraTive from '../components/demo/NarraTive';
import Home from '../components/Home';

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
  }) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />);

  return (
      <div>
         <Header />
          <Home />
      </div>
  );
};
export default IndexPage;

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          html
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            img
          }
        }
      }
    }
  }
`;