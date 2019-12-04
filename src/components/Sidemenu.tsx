import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  flex-shrink: 0;
  width: 20rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 1.2rem;
  padding-top: 3rem;
  background: radial-gradient(circle, #100E48, #0A0930);
`;

const Content = styled.div`
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
`;

const Title = styled(Link)`
  color: white;
  font-size: 1.5rem;
  font-weight: 700;
  margin-left: auto;
  color: #54b7ff;
`;

const Icon = require('../../static/icons/search.svg');

const Input = styled.input`
  padding: 0.6rem 0.8rem;
  background-color: transparent;
  border: 5px solid #54b7ff;
  color: #54b7ff;
  font-size: 0.8rem;
  margin-top: 0.3rem;
  background-image: url(${Icon});
  background-position: 7px center;
  background-repeat: no-repeat;
  padding-left: 2.2rem;
`;

export default () => {
  return (
    <Container>
      <Content>
        <Title to="/">
          주노 개발 블로그
        </Title>
        <Input />
      </Content>
    </Container>
  );
};
