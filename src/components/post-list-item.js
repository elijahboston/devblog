import React from 'react';
import PostLink from './post-link';

const PostListItem = ({ id, post }) => (
    <section style={{ marginBottom: '1.45rem' }}>
        <div>
            <small>{post.frontmatter.date}</small>
        </div>
        <PostLink key={id} post={post} />
        <summary>{post.frontmatter.summary}</summary>
    </section>
);

export default PostListItem;