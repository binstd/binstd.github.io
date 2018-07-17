import React from "react";
import PropTypes from "prop-types";
import PostLink from "../components/post-link";
import Link from "gatsby-link";
import Quote from 'grommet/components/Quote';
import Card from 'grommet/components/Card';
import Paragraph from 'grommet/components/Paragraph';
import Timestamp from 'grommet/components/Timestamp';
import Title from 'grommet/components/Title';
import Columns from 'grommet/components/Columns';
import Box from 'grommet/components/Box';
// Components
import Header from '../components/Header';
import Article from 'grommet/components/Article';
import Section from 'grommet/components/Section';

const Tags = ({ pathContext, data }) => {
  const { tag } = pathContext;
  const { edges, totalCount } = data.allMarkdownRemark;
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
    } tagged with "${tag}"`;

  return (

    <div>
      <Article >
        <Header style="" />
        {/* <PrimaryPage/> */}
        <Box 
       
        justify='center'
        align='center'
        wrap={false}
        reverse={false}
        // pad='medium'
        margin='medium'
        // colorIndex='light-2'
        >
        {/* <Columns
          masonry={true}
          size='large'
          justify='center'
        > */}
          {edges.map(({ node }) => {
            const { path, title, keynote } = node.frontmatter;
            return (
              <Link key={path} to={path} className="blog">
                <Box 
                  align='center'
                  pad='medium'
                  margin='small'
                  size={{width:'xxlarge'}} 
                >
					
                  <Title >
                    {title}
                  </Title>
                  {/* <Timestamp fields='date'
                  value={post.frontmatter.date} /> */}
                  <Section

                  >
                  {keynote}
                 </Section>
                  {/* <Paragraph
                    >
					          {keynote}
				         
                  </Paragraph> */}

                </Box>
              </Link>
              // <li key={path}>
              //   <Link to={path}>{title}</Link>
              // </li>
            );
          })}

        {/* </Columns> */}
        </Box>
      </Article>

      {/* <Link to="/tags">All tags</Link>  */}
    </div>
  );
};

Tags.propTypes = {
  pathContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              path: PropTypes.string.isRequired,
			  title: PropTypes.string.isRequired,
			//   keynote: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
};

export default Tags;

export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {  
            title
			keynote
            path
          }
        }
      }
    }
  }
`;