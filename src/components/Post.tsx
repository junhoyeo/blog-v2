import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

export interface IPost {
  path: string;
  date: string;
  title: string;
  excerpt: string;
  image: string;
}

export interface IPostProps {
  post: IPost;
}

const Wrapper = styled.div`
  width: 50%;

  @media (max-width: 1000px) {
    width: 100%;
  }
`;

const StyledLink = styled(Link)`
  color: #212529;
`;

const Container = styled.div`
  border-radius: 8px;
  border: 1px solid #ced4da;

  &:hover,
  &:focus {
    background: #f8f9fa;

    h1 {
      text-decoration: underline;
    }
  }
`;

const CoverImage = styled.img`
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  width: 100%;
  height: 18rem;
  object-fit: cover;

  @media (max-width: 1000px) {
    height: 15rem;
  }
`;

const Meta = styled.div`
  padding: 1.2rem;
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
  const { image, path, date, title, excerpt }: IPost = post;
  return (
    <Wrapper>
      <StyledLink to={path}>
        <Container>
          <CoverImage src={image} />
          <Meta>
            <Date>{date}</Date>
            <Title>{title}</Title>
            <Excerpt>{excerpt}</Excerpt>
          </Meta>
        </Container>
      </StyledLink>
    </Wrapper>
  );
};

export default Post;
