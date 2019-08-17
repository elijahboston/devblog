import React from "react"
import { Link } from "gatsby"

const PostLink = ({ post }) => (
  <div>
    <h3><Link to={post.frontmatter.path}>
      {post.frontmatter.title}
    </Link></h3>
  </div>
)
export default PostLink