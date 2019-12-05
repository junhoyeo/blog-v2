import React from 'react';
import styled from 'styled-components';

import { graphql, useStaticQuery } from 'gatsby';
import { INode } from '../types/graphql-extends';
import { Query } from '../types/graphql-types';

import Layout from '../components/Layout';
import Post, { IPost } from '../components/Post';
import SEO from '../components/SEO';

const LatestPostListQuery = graphql`
  query LatestPostListQuery {
    allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "YYYY년 MM월 DD일")
            excerpt
            cover
          }
          id
        }
      }
    }
  }
`;

const Container = styled.div`
  padding: 1rem;
`;

export default () => {
  const data = useStaticQuery<Query>(LatestPostListQuery);

  return (
    <Layout>
      <SEO title="Home" />
      <Container>
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
      </Container>
    </Layout>
  );
};
