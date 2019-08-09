import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostListItem from '../components/post-list-item';

const IndexPage = (
  {
    data: {
      allMarkdownRemark: { edges },
    },
  }
) => {

  const posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostListItem post={edge.node} id={edge.node.id} />);

  return(<Layout>
    <SEO title="Posts" />
    <h1>/posts</h1>
    {posts}
  </Layout>);
}

export default IndexPage

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
            summary
          }
        }
      }
    }
  }`;