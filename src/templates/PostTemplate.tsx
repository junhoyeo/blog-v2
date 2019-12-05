import React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';

interface IPostTemplateProps {
  pageContext: {
    title: string;
    html: string;
  };
}

const Post = styled.div`
  padding: 1rem 2.5rem;
`;

const PostTitle = styled.h1`
  margin: 0;
  font-weight: 800;
  font-size: 2rem;
  width: fit-content;
  word-break: break-word;
  line-height: 1.3;
`;

const PostArticle = styled.div`
  h1, h2, h3, h4, h5, h6 {
    margin: 0.5rem 0;
  }

  h1 {
    font-size: 1.5rem;
  }

  h2 {
    font-size: 1.4rem;
  }

  a {
    color: #4263eb;

    &:hover,
    &:active {
      text-decoration: underline;
    }
  }

  p {
    line-height: 1.5;
    font-size: 1rem;
    margin: 0.3rem 0;
  }

  blockquote {
    margin: 0;
    padding-left: 0.8rem;
    border-left: 0.25em solid #ced4da;
    color: #868e96;
  }

  img {
    width: 100%;
    margin: auto;
    display: flex;
  }
`;

const PostTemplate: React.FC<IPostTemplateProps> = React.memo(({ pageContext }) => {
  const { title, html } = pageContext;

  return (
    <Layout>
      <Post>
        <PostTitle>{title}</PostTitle>
        <PostArticle dangerouslySetInnerHTML={{ __html: html }} />
      </Post>
    </Layout>
  );
});

PostTemplate.displayName = 'PostTemplate';

export default PostTemplate;
