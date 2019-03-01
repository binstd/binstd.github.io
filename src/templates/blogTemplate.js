import React from "react";
import MaLayout from '../components/MaLayout'
import Mamenu from '../components/Mamenu';
import Footer from '../components/Footer';
import Typography from '../components/common/Typography';
import Markdown from '../components/common/Markdown';
export default function Template({
    data, // this prop will be injected by the GraphQL query below.
}) {
    const { markdownRemark } = data; // data.markdownRemark holds our post data
    const { frontmatter, html } = markdownRemark;
    return (
        <MaLayout>     
            <div style={{minWidth:'300px', width:'75%',margin:'80px auto' }}>
     
            <Typography variant="h5" gutterBottom marked="center" align="center">
                {frontmatter.title} 
            </Typography>
        
            <Markdown > 
                {html}
                {/* <div dangerouslySetInnerHTML={{ __html: html }} /> */}
            </Markdown>
         
        </div>
        <Footer /> 
     </MaLayout>    
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