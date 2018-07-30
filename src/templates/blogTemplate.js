import React from "react";
import Section from 'grommet/components/Section';
import Paragraph from 'grommet/components/Paragraph';
import Heading from 'grommet/components/Heading';
import Markdown from 'grommet/components/Markdown';
import Article from 'grommet/components/Article';
import Header from '../components/Header';
export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark;
  return (
    <div>
        <Header style="" />

        <Article  
            justify='center'
            align='center'
        >
        <Section 
            align='center'
            pad='medium'
            margin='small'
            size={{width:'xxlarge'}} 
        >

        <Heading tag="h1">{frontmatter.title}</Heading>
        <Markdown content={html} className='blog-content'  />
        </Section>  

        </Article>
  </div>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;