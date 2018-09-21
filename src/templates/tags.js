import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Title from 'grommet/components/Title';

import Box from 'grommet/components/Box';
// Components
import Header from '../components/Header';
import Foot from '../components/Foot';
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
            <Header style="" />
            <Article
                justify='center'
                align='center'
            >
                <Box justify='center' margin='medium' >
                    {edges.map(({ node }) => {
                        const { path, title, keynote } = node.frontmatter;
                        return (
                                <Box
                                    size={{ width: { max: 'xxlarge' }}}
                                    margin='small'
                                    responsive={false} justify="start" align="center"
                                    pad={{ horizontal: 'medium' }} flex="grow"
                                >
                                    <Title >
                                        <Link key={path} to={path} className="blog">{title}</Link>
                                    </Title>
                          
                                    <Section >
                                        {keynote}
                                    </Section>

                                </Box>
                            
                        );
                    })}
                </Box>
            </Article>
            <Foot style="" />
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