import React from 'react';
import styled from 'styled-components';

import { useStaticQuery } from 'gatsby';
import { INode } from '../types/graphql-extends';
import { Query } from '../types/graphql-types';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Post, { IPost } from '../components/Post';
import SEO from '../components/SEO';

import LatestPostListQuery from '../queries/LatestPostListQuery';

export default () => {
  const data = useStaticQuery<Query>(LatestPostListQuery);

  return (
    <Layout>
      <SEO title="Home" />
      <Header />
      {/* <PostList>
        {data.allMarkdownRemark.edges.map(({ node }: { node: INode }) => {
          const post: IPost = {
            date: node.frontmatter.date,
            excerpt: node.frontmatter.excerpt,
            image: node.frontmatter.cover,
            path: node.fields.slug,
            title: node.frontmatter.title,
          };
          return <Post key={node.id} post={post} />;
        })}
      </PostList> */}
    </Layout>
  );
};

const PostList = styled.div`
  display: flex;
  flex-flow: wrap;
`;
