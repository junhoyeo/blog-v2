import React from 'react';
import styled from 'styled-components';

import Sidemenu from './Sidemenu';

import '../global.scss';

const Container = styled.div`
  display: flex;
  height: 100%;
`;

const Content = styled.main`
  flex: 1 1;
`;

interface ILayoutProps {
  children: React.ReactElement | React.ReactElement[];
}

const Layout = ({ children }: ILayoutProps) => (
  <Container>
    <Sidemenu />
    <Content>
      {children}
    </Content>
  </Container>
);

export default Layout;
