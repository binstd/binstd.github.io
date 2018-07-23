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
            <Header style="" />
            <Article
                justify='center'
                align='center'
            >

                {/* <Section 
                justify="center" 
            >
            <Box 
                size={{width: {max: 'xxlarge'}}} 
                // direction="row"
                responsive={false} justify="start" align="center" 
                pad={{horizontal: 'medium'}} flex="grow"  
            >
                最早时期，交通不发达，内陆地区使用沿海才有的贝壳做为交换媒介，去换取物品，得到贝壳的人又用它去换取其他物品。后来交通发达后，人们可以轻易获得贝壳，于是贝壳不在做为货币（货币的总量是否要优先，是否要防范增发？） 为什么不是铜铁，木头？而是黄金，白银，和稀缺是不是有关系。因为稀缺所有值钱，因为之前，所以不需要太多黄金，就可以换取大部分物品。
                
            </Box>
            </Section> */}

                <Box justify='center' margin='medium' >
                    {edges.map(({ node }) => {
                        const { path, title, keynote } = node.frontmatter;
                        return (
                            <Link key={path} to={path} className="blog"  >
                                <Box
                                    size={{ width: { max: 'xxlarge' } }}
                                    margin='small'
                                    responsive={false} justify="start" align="center"
                                    pad={{ horizontal: 'medium' }} flex="grow"
                                // size={{width:'xlarge'}} 
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

                                </Box>
                            </Link>
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