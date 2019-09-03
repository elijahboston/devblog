import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostListItem from '../components/post-list-item';
import ExternalLink from '../components/external-link';

const TagLine = styled.p`
  font-size: 1.5rem;
  line-height: 2rem;
`

const IndexPage = (
  {
    data: {
      allMarkdownRemark: { edges },
      github: {
        viewer: {
          gists: {
            nodes
          }
        }
      }
    },
  }
) => {

  const posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostListItem key={edge.node.id} post={edge.node} id={edge.node.id} />);

  const gists = nodes
    .map(node => {
      let filename = '';
      if (node.files.length) {
        const file = node.files[0];
        filename = file.name;
      }

      return (
        <li key={node.id}>
          <ExternalLink href={node.url}>{node.description || filename}</ExternalLink>
        </li>
      );
    });

  return (
    <Layout>
      <SEO title="Homepage" />
      <TagLine>Computer Engineer, full-stack developer. Automater of processes. Huge fan of Capybaras.</TagLine>
      <h1>Posts</h1>
      {posts}
      <h1>Github Snippets</h1>
      <ul>
        {gists}
      </ul>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(limit:3 sort: { order: DESC, fields: [frontmatter___date] }) {
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

    github {
      viewer {
        gists(last:5) {
          nodes {
            id
            name
            description
            url
            files(limit:10) {
              name
              extension
            }
          }
        }
      }
    }
  }`;