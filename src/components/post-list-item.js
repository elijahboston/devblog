import React from "react"
import styled from "styled-components"
import PostLink from "./post-link"

const PostContainer = styled.section`
    margin-bottom: 1.45rem;
`;
const PostHeader = styled.h3`
    margin-bottom: 0;
`;

const PostDate = styled.time`
    display: block;
    margin-bottom: .7rem;
    font-size: .8rem;
`;

const PostSummary = styled.summary``;

const PostListItem = ({ id, post }) => (
    <PostContainer>
        <PostHeader>
            <PostLink to={post.frontmatter.path}>
                    {post.frontmatter.title}
            </PostLink>
        </PostHeader>
        <PostDate>{post.frontmatter.date}</PostDate>
        <PostSummary>
            {post.frontmatter.summary}
        </PostSummary>
    </PostContainer>
);

export default PostListItem;