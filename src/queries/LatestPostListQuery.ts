import { graphql } from 'gatsby';

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

export default LatestPostListQuery;
