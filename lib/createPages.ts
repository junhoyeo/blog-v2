import { CreatePagesArgs } from 'gatsby';
import { Query } from '../src/types/graphql-types';

export const createPages = async ({ graphql, actions, reporter }: CreatePagesArgs) => {
  const { createPage } = actions;
  const result: any = await graphql<Query>(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            html
            fields {
              slug
            }
            frontmatter {
              title
              date
            }
          }
        }
      }
    }
  `);
  if (result.errors) {
    reporter.panicOnBuild('Error while running GraphQL query.');
    return;
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const { html, frontmatter: { title }, fields: { slug } } = node;
    createPage({
      component: require.resolve('../src/templates/PostTemplate.tsx'),
      context: {
        html,
        title,
      },
      path: slug,
    });
  });
};
