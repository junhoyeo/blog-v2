import React from 'react';
import styled from 'styled-components';

import GlobalStyle from './GlobalStyle';

interface ILayoutProps {
  children: React.ReactElement | React.ReactElement[];
}

const Layout = ({ children }: ILayoutProps) => (
  <Wrapper>
    <GlobalStyle />
    <Container>
      {children}
    </Container>
  </Wrapper>
);

export default Layout;

const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100%;
  justify-content: center;
  background-color: #33383D;
`;

const Container = styled.main`
  width: 83%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 90%;
  }

  @media (max-width: 500px) {
    width: 92%;
  }
`;
