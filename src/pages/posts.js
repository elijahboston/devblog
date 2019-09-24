import React from "react"
import { graphql } from "gatsby"
import { Layout, SEO, PostListItem } from "../components"

const PostsPage = (
  {
    data: {
      allMarkdownRemark: { edges },
    },
  }
) => {

  const posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostListItem key={edge.node.id} post={edge.node} id={edge.node.id} />);

  return(<Layout>
    <SEO title="Posts" />
    <h1>Posts</h1>
    {posts}
  </Layout>);
}

export default PostsPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }`;