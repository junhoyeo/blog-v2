import React from 'react';
import styled from 'styled-components';

import { graphql, Link, useStaticQuery } from 'gatsby';
import { Node, Query } from '../types/graphql-types';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

const LatestPostListQuery = graphql`
  query LatestPostListQuery {
    allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
      edges {
        node {
          excerpt(truncate: true, pruneLength: 200)
          frontmatter {
            title
            date(formatString: "YYYY-MM-DD HH:mm:ss")
          }
          id
        }
      }
    }
  }
`;

const Container = styled.div``;

export default () => {
  const data = useStaticQuery<Query>(LatestPostListQuery);

  return (
    <Layout>
      <SEO title="Home" />
      <Container>
        {data.allMarkdownRemark.edges.map(({ node }: { node: any }) => (
          <li key={node.id}>
            <h2>
              <Link to={node.frontmatter.path}>{node.frontmatter.title}</Link>
            </h2>
            <h3>{node.frontmatter.date}</h3>
            <p>{node.excerpt}</p>
            <hr />
          </li>
        ))}
      </Container>
    </Layout>
  );
};
