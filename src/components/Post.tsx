import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

export interface IPost {
  path: string;
  date: string;
  title: string;
  excerpt: string;
}

export interface IPostProps {
  post: IPost;
}

const Wrapper = styled.div`
  width: 50%;
  padding: 0.5rem;
`;

const StyledLink = styled(Link)`
  color: #212529;
`;

const Container = styled.div`
  padding: 1.2rem;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;

  &:hover,
  &:focus {
    background: #f8f9fa;

    h1 {
      text-decoration: underline;
    }
  }
`;

const Title = styled.h1`
  font-size: 1.8rem;
`;

const Date = styled.span`
  color: #495057;
  font-weight: 300;
`;

const Excerpt = styled.p`
  color: #868e96;
  font-weight: 400;
  word-break: keep-all;
`;

const Post = ({ post }: IPostProps) => {
  const { path, date, title, excerpt }: IPost = post;
  return (
    <Wrapper>
      <StyledLink to={path}>
        <Container>
          <Date>{date}</Date>
          <Title>{title}</Title>
          <Excerpt>{excerpt}</Excerpt>
        </Container>
      </StyledLink>
    </Wrapper>
  );
};

export default Post;
