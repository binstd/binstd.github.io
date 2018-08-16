import React from "react";
import Link from "gatsby-link";

const PostLink = ({ post }) => (
  <div>
    <Link to={post.frontmatter.path}>
      {post.frontmatter.title} ({post.frontmatter.date})
      ({post.html.replace(/<[^>]+>/g,"").substr(0, 200)})
      ({post.frontmatter.img})
    </Link>
  </div>
);

export default PostLink;


